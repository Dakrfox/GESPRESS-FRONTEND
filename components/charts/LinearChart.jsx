import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Incomes & Outgoings",
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'History Outcomes',
      data: [700, 650, 400, 400, 300, 200, 100],
      borderColor: 'rgba(239, 68, 68, 1)',
      backgroundColor: 'rgba(239, 68, 68, 1)',
    },
    {
      label: 'History Incomes',
      data: [180, 220, 350, 400, 500, 600, 700],
      borderColor: 'rgba(34, 197, 94, 1)',
      backgroundColor: 'rgba(34, 197, 94, 1)',
    },
  ],
};

        
export default function LinearChart() {
  return (
    <div className="card glass flex justify-center items-center">
      <Line options={options} data={data}  className="Initial_chart" />
    </div>
  );
}
