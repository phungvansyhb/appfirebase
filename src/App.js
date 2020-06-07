import React, {Component} from "react";
import {Button, DatePicker, Divider, Menu} from "antd";
import {AlertOutlined, BgColorsOutlined, FireOutlined} from '@ant-design/icons';
import {changeType, fetchFfb, getDate} from "./actions/fetchAction"
import {connect} from "react-redux";
import 'antd/dist/antd.css';

import GasChart from "./component/page/chart/GasChart";
import Humidity from "./component/page/chart/Humidity";
import TemperatureChart from "./component/page/chart/TemperatureChart";
import firebase from "firebase";
import Login from "./component/page/Login/Login";

require('dotenv').config();
const moment = require('moment')

class App extends Component {
    state = {
        type: "GAS",
        userfb: null,
    }
    setType = (type) => {
        this.setState({
            type: type
        })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                this.setState({userfb: user});
            }
            else {
                this.setState({userfb:null});
            }
        })
    }
    FbLogout = () =>{
        firebase.auth().signOut();
        console.log("logout")
    }
    render() {
        return (
            <div className="App">
                { (this.state.userfb) ? <div className="home">
                    <Menu mode="horizontal" theme='dark' activeKey="gas" defaultSelectedKeys={"gas"}>
                        <Menu.Item icon={<AlertOutlined/>} key="gas" onClick={() => {
                            this.setType("GAS");
                            this.props.changeType("GAS");
                        }}>
                            <Button>Gas</Button>
                        </Menu.Item>
                        <Menu.Item icon={<FireOutlined/>} onClick={() => {
                            this.setType("Temperatures");
                            this.props.changeType("Temperatures");
                        }}>
                            <Button>Temperature</Button>
                        </Menu.Item>

                        <Menu.Item icon={<BgColorsOutlined/>} onClick={() => {
                            this.setType("Humidity");
                            this.props.changeType("Humidity");
                        }}>
                            <Button>Humidity</Button>
                        </Menu.Item>
                        <Menu.Item onClick={()=> this.FbLogout()}>
                            <Button >Logout</Button>

                        </Menu.Item>

                    </Menu>
                    <Divider/>
                    <DatePicker defaultValue={moment(new Date(), 'YYYY-M-DD')}
                                onChange={(date, dateString) => {
                                    this.props.fetchdate(moment(date).format("YYYY-MM-DD"));
                                }}
                    />
                    {(this.state.type === "GAS") ?
                        <GasChart/> : ((this.state.type === "Temperatures") ? <TemperatureChart/> : <Humidity/>)}
                </div> : <Login/> }

            </div>


        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        date: state.fetchReducer.date,
        type: state.fetchReducer.type,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchdate: (date) => dispatch(getDate(date)),
        fetchFfb: (type, date) => dispatch(fetchFfb(type, date)),
        changeType: (type) => dispatch(changeType(type)),
        dispatch
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
