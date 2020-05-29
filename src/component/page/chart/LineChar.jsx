import React, {Component} from 'react';
import Chart from "chart.js";
import {connect} from "react-redux";
import {fetchFfb} from "../../../actions/fetchAction";


class LineChar extends Component {
    chartRef = React.createRef();
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetch();
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Monday", "TuesDay", "WesDay", "ThurDay", "Friday", "Saturday"],
                datasets: [
                    {
                        label: "temporature",
                        data: [86, 67, 91, 100, 200, 150],
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
                            suggestedMax: 300
                        }
                    }],

                }
            }
        });
    }

    render() {
        console.log("chart line render")
        return (
            <div className="graphContainer">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        );
    }
}
function mapStateToProps(state , ownProps){
    return {
        list: state.fetchReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetch : ()=> dispatch(fetchFfb()),
        dispatch
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(LineChar);