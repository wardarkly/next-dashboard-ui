"use client";

import Image from "next/image";
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

const data = [
  {
    month: "Oct",
    income: 4000,
    expense: 2400,
  },
  {
    month: "Nov",
    income: 3000,
    expense: 1398,
  },
  {
    month: "Dec",
    income: 2000,
    expense: 9800,
  },
  {
    month: "Jan",
    income: 2780,
    expense: 3908,
  },
  {
    month: "Feb",
    income: 1890,
    expense: 4800,
  },
  {
    month: "Mar",
    income: 2390,
    expense: 3800,
  },
  {
    month: "Apr",
    income: 3490,
    expense: 4300,
  },
  {
    month: "May",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Jun",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    month: "Sep",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src={"/moreDark.png"}
          alt="moreDarkIcon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="income" stroke="#fae27c" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#c3ebfa" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default FinanceChart;
