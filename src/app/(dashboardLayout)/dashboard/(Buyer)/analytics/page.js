'use client';

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Property Data
const property = [
  {
    id: 1,
    beds: 5,
    baths: 3,
    sqft: 250,
    price: 5000,
  },
  {
    id: 2,
    beds: 4,
    baths: 2,
    sqft: 200,
    price: 4000,
  },
  {
    id: 3,
    beds: 3,
    baths: 2,
    sqft: 180,
    price: 3000,
  },
  {
    id: 4,
    beds: 6,
    baths: 4,
    sqft: 350,
    price: 6000,
  },
];
const chartData = property.map(item => ({
  name: `Property ${item.id}`,
  beds: item.beds,
  baths: item.baths,
  sqft: item.sqft,
  price: item.price,
}));

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Analytics = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">Property Analytics</h1>

      {/* Bar Chart */}
      <div className="dark:bg-gray-900">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="beds" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
            <Bar dataKey="baths" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[(index + 1) % colors.length]} />
              ))}
            </Bar>
            <Bar dataKey="sqft" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[(index + 2) % colors.length]} />
              ))}
            </Bar>
            <Bar dataKey="price" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[(index + 3) % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
