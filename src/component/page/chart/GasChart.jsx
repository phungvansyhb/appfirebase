import React, {Component} from 'react';
import Chart from "chart.js";
import {connect} from "react-redux";
import { fetchFfb} from "../../../actions/fetchAction";

class GasChart extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        this.props.fetchFfb(this.props.date , this.props.type);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.date !== this.props.date){
            this.componentDidMount()
        }
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        label: "Gas",
                        data: this.props.lists,
                        backgroundColor: [

                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor:"red",
                        hoverBackgroundColor: 'red',
                        borderWidth: 3,

                    },

                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 100
                        }
                    }],

                }
            }
        });
    }

    render() {
        console.log("chart temperature render")
        return (
            <div className="graphContainer">
                <canvas id="myChart"  ref={this.chartRef} />
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        date: state.fetchReducer.date ,
        type : state.fetchReducer.type,
        lists : state.fetchReducer.listData,
        labels : state.fetchReducer.listLabel,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFfb: (date, type) => dispatch( fetchFfb(date, type) ),
        dispatch
    }
}
export default connect (mapStateToProps , mapDispatchToProps) (GasChart);