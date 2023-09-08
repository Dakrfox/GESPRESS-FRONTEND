import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Outgoings', 'Saving goals', 'investment'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(168, 85, 247, 1)',
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(168, 85, 247, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
    return (
      <div className="card w-96 glass">
        <Doughnut data={data} />
      </div>
    );
  }