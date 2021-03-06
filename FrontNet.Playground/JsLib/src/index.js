import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';

const defaultColors = [
    '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6',
    '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11',
    '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'
];

const getColorsSet = () => defaultColors;

export const charts = {
    drawChart: (canvasElement, type, { data = [], labels = [] }) => {
        const canvas = canvasElement.getContext('2d');

        new Chart(canvas, {
            type,
            data: {
                labels,
                datasets: [{
                    backgroundColor: getColorsSet(),
                    data
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right'
                },
                plugins: {
                    labels: {
                        render: 'value',
                        fontColor: 'white',
                        fontSize: 18,
                        fontStyle: 'bold'
                    }
                }
            }
        });
    }
};