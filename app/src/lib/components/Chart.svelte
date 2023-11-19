<script lang="ts">
    import ChartJS from 'chart.js/auto'
    import  * as Utils from '$lib/chart/utils'
	import { onMount } from 'svelte';

    const DATA_COUNT = 12;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100, decimals: 0};
    export let graphType: string = "bar";
    const labels = Utils.months({count: 3});
    const data = {
        labels: labels,
        datasets: [
        {
            label: 'Tristeza',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
            label: 'Preocupado',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        },
        {
            label: 'Indiferente',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
        },
        {
            label: 'Tranquilo',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
        },
        {
            label: 'Optimista',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple, 0.5),
        }
        ]
    };
    const actions = [
        {
            name: 'Randomize',
            handler(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
            });
            chart.update();
            }
        },
        {
            name: 'Add Dataset',
            handler(chart) {
            const data = chart.data;
            const dsColor = Utils.namedColor(chart.data.datasets.length);
            const newDataset = {
                label: 'Dataset ' + (data.datasets.length + 1),
                backgroundColor: Utils.transparentize(dsColor, 0.7),
                borderColor: dsColor,
                borderWidth: 1,
                data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),
            };
            chart.data.datasets.push(newDataset);
            chart.update();
            }
        },
        {
            name: 'Add Data',
            handler(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
                data.labels = Utils.months({count: data.labels.length + 1});

                for (let index = 0; index < data.datasets.length; ++index) {
                data.datasets[index].data.push(Utils.rand(-100, 100));
                }

                chart.update();
            }
            }
        },
        {
            name: 'Remove Dataset',
            handler(chart) {
            chart.data.datasets.pop();
            chart.update();
            }
        },
        {
            name: 'Remove Data',
            handler(chart) {
            chart.data.labels.splice(-1, 1); // remove the label first

            chart.data.datasets.forEach(dataset => {
                dataset.data.pop();
            });

            chart.update();
            }
        }
    ];
    let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const config = {
        type: graphType,
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Valorizaciones vs Tiempo'
                }
            }
        },
    };
let cha;

let ctx;
let chartCanvas: any;
onMount( () => {
    ctx = chartCanvas.getContext('2d');
    const c = new ChartJS(
        ctx,
        {...config},
    );
    return () => {}
});
 

</script>


<canvas bind:this={chartCanvas} id="chart_ex" height="500"></canvas>