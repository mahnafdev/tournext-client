import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const CustomLineChart = ({
	width = 448,
	height = 384,
	data,
	lineType = "monotone",
	xAxisDataKey = "",
	lineDataKey = "",
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
				<LineChart
					width={width}
					height={height}
					data={data}
				>
					{/* Grid background */}
					<CartesianGrid
						strokeDasharray="1 1"
						strokeOpacity="25%"
					/>
					{/* X-axis labels */}
					<XAxis dataKey={xAxisDataKey} />
					{/* Y-axis visibility */}
					<YAxis dataKey="maxLength" />
					{/* Tooltip for each line breakpoints */}
					<Tooltip
						contentStyle={{
							backgroundColor: "var(--color-base-300)",
							borderColor: "var(--color-accent)",
							borderRadius: "0.5rem",
						}}
					/>
					{/* Each line */}
					<Line
						type={lineType}
						dataKey={lineDataKey}
						stroke="var(--color-primary)"
						strokeOpacity="80%"
						activeDot={{ r: 5, strokeWidth: 1, stroke: "var(--color-neutral)" }}
						animationDuration={1200}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CustomLineChart;
