import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const CustomBarChart = ({
	width = 448,
	height = 448,
	data,
	xAxisDataKey = "",
	barDataKey = "",
}) => {
	return (
		<BarChart
			width={width}
			height={height}
			data={data}
		>
			{/* Grid background */}
			<CartesianGrid
				strokeDasharray="1 1"
				strokeOpacity="20%"
			/>
			{/* X-axis labels */}
			<XAxis dataKey={xAxisDataKey} />
			{/* Y-axis visibility */}
			<YAxis />
			{/* Tooltip for each Bars */}
			<Tooltip
				contentStyle={{
					backgroundColor: "var(--color-base-300)",
					borderColor: "var(--color-accent)",
					borderRadius: "0.5rem",
				}}
			/>
			{/* Each bar */}
			<Bar
				dataKey={barDataKey}
				fill="var(--color-primary)"
				fillOpacity="75%"
				strokeOpacity="50%"
			/>
		</BarChart>
	);
};

export default CustomBarChart;
