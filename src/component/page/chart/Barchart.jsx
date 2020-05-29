import React, {Component} from "react";
import Chart from "chart.js";
import {appfirebase} from "../../../firebase.config";


class BarChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {


        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Monday", "TuesDay", "WesDay", "ThurDay", "Friday", "Saturday"],
                datasets: [
                    {
                        label: "Sales",
                        data: [10 , 20 , 30 , 40 ,50 ,60],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        hoverBackgroundColor: 'red',
                        borderWidth: 1
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
        console.log("chart bar render")
        return (
            <div className="graphContainer">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        );
    }
}

export default BarChart;
