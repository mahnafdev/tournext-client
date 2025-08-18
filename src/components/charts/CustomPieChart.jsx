import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

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
		<div
			className="max-md:!scale-100"
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

export default CustomPieChart;
