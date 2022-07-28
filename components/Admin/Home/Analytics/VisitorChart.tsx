import React from "react";
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Box } from "@chakra-ui/react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const data = {
    labels: labels,
    datasets: [{
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      barThickness: 3,
      
      
    }]
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
          display: false
        }
      }, 
      scales: {
        y: {
            display: false // Hide Y axis labels
        },
        x: {
            display: false // Hide X axis labels
        }
    }   
   
}
function VisitorChart() {
  return (
    <Box w={40} h={16}>
      <Bar
        data={data}
        options={options}
        />
        
      
    </Box>
  );
}

export default VisitorChart;
