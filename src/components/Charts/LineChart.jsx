import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineCharts = () => {
  const data = [
    {
      name: "Page A",
      uv: 1500,
      pv: 1000,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 2400,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 4000,
      pv: 3500,
      amt: 3290,
    },
    {
      name: "Page D",
      uv: 4780,
      pv: 3908,
      amt: 3900,
    },
    {
      name: "Page E",
      uv: 5890,
      pv: 4800,
      amt: 5781,
    },
    {
      name: "Page F",
      uv: 6390,
      pv: 3800,
      amt: 6900,
    },
    {
      name: "Page G",
      uv: 7490,
      pv: 8900,
      amt: 10000,
    },
  ];
  return (
    <LineChart width={800} height={420} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line dataKey="pv" stroke="#444445" activeDot={{ r: 8 }} />
      <Line dataKey="uv" stroke="#42cec3" />
      <Line dataKey="amt" stroke="#357cd2" />
    </LineChart>
  );
};

export default LineCharts;
