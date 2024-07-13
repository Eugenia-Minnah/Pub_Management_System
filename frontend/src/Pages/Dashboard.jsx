import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../Styles/Dashboard.css';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const revenueData = 12000;
  const priceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [1500, 2000, 2500, 3000, 3500, 4000, 4500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const donutData = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
      {
        data: [200, 300, 500],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const customerRatingsData = {
    labels: ['Quality', 'Service', 'Delivery'],
    datasets: [
      {
        data: [85, 90, 75],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const mostOrderedFood = [
    { name: 'Pizza', orders: 120 },
    { name: 'Burger', orders: 100 },
    { name: 'Pasta', orders: 80 },
  ];

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 4500, 3000, 5000, 6000, 7000],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="top-section">
        <div className="revenue-section chart-container">
          <h2>Total Revenue: GHC {revenueData}</h2>
          <div className="chart">
            <Bar data={priceData} />
          </div>
          <button className="btn view-report">View Report</button>
        </div>

        <div className="donut-chart chart-container">
          <h2>Order Time Distribution</h2>
          <div className="chart">
            <Doughnut data={donutData} />
          </div>
        </div>
      </div>

      <div className="analytics-section">
        <div className="customer-ratings chart-container">
          <h2>Customer Ratings</h2>
          <div className="chart">
            <Doughnut data={customerRatingsData} />
          </div>
        </div>

        <div className="most-ordered-food chart-container">
          <h2>Most Ordered Food</h2>
          <ul>
            {mostOrderedFood.map((food) => (
              <li key={food.name}>
                {food.name}: {food.orders} orders
              </li>
            ))}
          </ul>
        </div>

        <div className="sales chart-container">
          <h2>Sales Overview</h2>
          <div className="chart">
            <Line data={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
