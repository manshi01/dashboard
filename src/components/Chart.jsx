"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Chart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5] }]}
      series={[{ data: [2, 5, 3, 7, 4] }]}
      width={500}
      height={200}
    />
  );
}
