import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const CustomDonutPieChart = ({
	width = 384,
	height = 384,
	data = [],
	dataKey = "",
	innerRadius = 100,
	outerRadius = 140,
	circleX = "50%",
	circleY = "50%",
}) => {
	return (
		<div
			className="max-md:!h-88 max-md:!scale-90"
			style={{
				width: width,
				height: height,
			}}
		>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
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
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						fill="var(--color-primary)"
						fillOpacity="90%"
						strokeOpacity="50%"
						animationDuration={1200}
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
			</ResponsiveContainer>
		</div>
	);
};

export default CustomDonutPieChart;
