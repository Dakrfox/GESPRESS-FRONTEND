import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const labels = ["September"];

export const data = {
  labels,
  datasets: [
    {
      data: [100],
      label: "Incomes",
      borderColor: 'rgba(34, 197, 94, 1)',
      backgroundColor: "rgb(109, 253, 181,0.5)",
      borderWidth: 2,
    },
    {
      data: [50],
      label: "Outgoings",
      borderColor: 'rgba(239, 68, 68, 1)',
      backgroundColor: "rgb(75, 192, 192,0.5)",
      borderWidth: 2,
    },
  ],
};

export default function Barchart() {
  return (
    <div className="card w-96 glass">
      <Bar options={options} data={data} />
      <div className="card-body">
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Go To Page</button>
        </div>
      </div>
    </div>
  );
}
