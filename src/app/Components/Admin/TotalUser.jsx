import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const TotalUser = ({ totalUsers }) => {
  const usersData = [
    { name: "01 May", value: 1840 },
    { name: "02 May", value: 120 },
    { name: "03 May", value: 1280 },
    { name: "04 May", value: 1010 },
    { name: "05 May", value: 2150 },
    { name: "06 May", value: 280 },
    { name: "07 May", value: 2456 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={usersData}>
        <Bar dataKey="value" fill="#10B981" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalUser;
