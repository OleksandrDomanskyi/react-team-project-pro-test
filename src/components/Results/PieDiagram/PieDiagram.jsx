import React from "react";
import renderLegend from "./renderLegend/renderLegend.jsx";
import { PieChart, Pie, Cell, Legend } from "recharts";

import "./PieDiagram.scss";

const DiagramPieChart = () => {
  const diagramSize = () => {
    if (window.innerWidth < 768) {
      return { pieSize: 73, pieChartHeight: 156 };
    } else {
      return { pieSize: 143.5, pieChartHeight: 285 };
    }
  };

  const data = [
    { name: "Correct", students: 10 },
    { name: "Incorrect", students: 3 },
  ];
  const COLORS = [" #FF6B01", "#D7D7D7"];

  return (
    <PieChart
      align="center"
      width={window.innerWidth > 768 ? 600 : 258}
      height={diagramSize().pieChartHeight}
    >
      <Legend
        className="legend"
        width={55}
        iconType="square"
        iconSize="14px"
        align="right"
        verticalAlign="middle"
        height={36}
        layout="vertical"
        content={renderLegend}
        payload={[
          { value: "correct", color: "#FF6B01", type: "square" },
          { value: "incorrect", color: "#D7D7D7", type: "square" },
        ]}
      ></Legend>
      <Pie
        align="center"
        data={data}
        dataKey="students"
        legendType="square"
        fill="green"
        outerRadius={diagramSize().pieSize}
        cx="50%"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          ></Cell>
        ))}
      </Pie>
    </PieChart>
  );
};

export default DiagramPieChart;
