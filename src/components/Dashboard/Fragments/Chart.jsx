import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const labels = [...Array(10).keys()].map(() =>
	faker.date.recent().toLocaleDateString(),
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() =>
				faker.datatype.number({ min: -1000, max: 1000 }),
			),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() =>
				faker.datatype.number({ min: -1000, max: 1000 }),
			),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

const Chart = () => {
	return (
		<div className="bg-white shadow-lg rounded-md w-full">
			<div className="pt-4 pl-4">
				<h1 className="font-bold text-2xl">Chart</h1>
			</div>
			<div className="pl-4">
				<Line options={options} data={data} />;
			</div>
		</div>
	);
};

export default Chart;
