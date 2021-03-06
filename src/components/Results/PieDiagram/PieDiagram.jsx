import React from "react";
import renderLegend from "./renderLegend/renderLegend.jsx";
import { PieChart, Pie, Cell, Legend } from "recharts";

import "./PieDiagram.scss";

const DiagramPieChart = ({ result }) => {
  const diagramSize = () => {
    if (window.innerWidth < 768) {
      return { pieSize: 73, pieChartHeight: 156 };
    } else {
      return { pieSize: 143.5, pieChartHeight: 285 };
    }
  };

  const data = [
    { name: "Correct", answers: parseFloat(result.result) },
    { name: "Incorrect", answers: 100 - parseFloat(result.result) },
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
          {
            value: `${result.result || 0} correct`,
            color: "#FF6B01",
            type: "square",
          },
          {
            value: `${100 - parseFloat(result.result) || 0}% incorrect`,
            color: "#D7D7D7",
            type: "square",
          },
        ]}
      ></Legend>
      <Pie
        paddingAngle={0}
        align="center"
        data={data}
        dataKey="answers"
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
