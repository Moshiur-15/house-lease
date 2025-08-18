import React from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const TotalProperty = ({ property = [] }) => {
  const propertiesData = property.map((p) => ({
    name: p.title,
    PropertyPrice: p.price || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={propertiesData}>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="PropertyPrice"
          stroke="#3B82F6"
          fill="#3B82F6"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TotalProperty;
