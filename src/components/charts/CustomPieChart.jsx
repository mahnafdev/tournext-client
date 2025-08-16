import { Pie, PieChart, Tooltip } from "recharts";

const CustomPieChart = ({
	width = 448,
	height = 448,
	data = [],
	dataKey = "",
	outerRadius = 100,
	circleX = "50%",
	circleY = "50%",
}) => {
	return (
		<PieChart
			width={width}
			height={height}
		>
			{/* Pie */}
			<Pie
				data={data}
				dataKey={dataKey}
				cx={circleX}
				cy={circleY}
				outerRadius={outerRadius}
				fill="var(--color-primary)"
				fillOpacity="75%"
				strokeOpacity="50%"
				label={{
					fontSize: "large",
				}}
			/>
			{/* Tooltip for each pieces */}
			<Tooltip
				contentStyle={{
					paddingBlock: "0.3rem",
					backgroundColor: "var(--color-base-300)",
					borderColor: "var(--color-accent)",
					borderRadius: "0.4rem",
				}}
				itemStyle={{ color: "var(--color-neutral)" }}
			/>
		</PieChart>
	);
};

export default CustomPieChart;
