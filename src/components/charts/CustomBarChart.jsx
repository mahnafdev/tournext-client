import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const CustomBarChart = ({
	width = 448,
	height = 448,
	data,
	xAxisDataKey = "",
	barDataKey = "",
}) => {
	return (
		<div
			className="max-md:!w-88 max-md:!h-88"
			style={{
				width: width,
				height: height,
			}}
		>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<BarChart data={data}>
					{/* Grid background */}
					<CartesianGrid
						strokeDasharray="1 1"
						strokeOpacity="25%"
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
						fillOpacity="90%"
						strokeOpacity="50%"
						animationDuration={1200}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CustomBarChart;
