import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartsHeader } from "../../components";

const Areachart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 9000,
      pv: 1398,
      amt: 4210,
    },
    {
      name: "Page C",
      uv: 1000,
      pv: 9800,
      amt: 3290,
    },
    {
      name: "Page D",
      uv: 4580,
      pv: 3908,
      amt: 5500,
    },
    {
      name: "Page E",
      uv: 9890,
      pv: 4800,
      amt: 3881,
    },
    {
      name: "Page F",
      uv: 3390,
      pv: 3800,
      amt: 7500,
    },
    {
      name: "Page G",
      uv: 7490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page H",
      uv: 9490,
      pv: 4300,
      amt: 9100,
    },
  ];
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="uv" stroke="#33cabe" fill="#33cabe" />
        <Area type="monotone" dataKey="pv" stroke="#3d5c5a" fill="#3d5c5a" />
        <Area type="monotone" dataKey="amt" stroke="#3776ba" fill="#3776ba" />
      </AreaChart>
    </div>
  );
};

export default Areachart;
