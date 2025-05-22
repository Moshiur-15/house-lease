"use client";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  percent,
  icon,
  color,
  data,
  dataKey,
}) {
  const isPositive = percent > 0;
  console.log(dataKey);

  const colorMap = {
    green: {
      text: "text-green-600",
      bg: "bg-green-100",
      fill: "#22c55e",
    },
    orange: {
      text: "text-orange-600",
      bg: "bg-orange-100",
      fill: "#f97316",
    },
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-100",
      fill: "#3b82f6",
    },
    gray: {
      text: "text-gray-600",
      bg: "bg-gray-100",
      fill: "#6b7280",
    },
    slate: {
      text: "text-slate-600",
      bg: "bg-slate-100",
      fill: "#64748b",
    },
  };

  const selected = colorMap[color] || colorMap.green;

  return (
    <div className="bg-white p-4 rounded-tr-xl rounded-bl-4xl w-full ">
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-4">
          <div className={`p-2 rounded-md ${selected.bg} ${selected.text}`}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 group-hover:text-black group-hover:font-semibold transition">
              {title}
            </p>
            <h2 className="text-2xl font-bold">{value}</h2>
          </div>
        </section>
        <div className="flex justify-end mt-3">
          <div
            className={`flex items-center gap-1 text-xl font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={20} />
            ) : (
              <ArrowDownRight size={20} />
            )}
            {Math.abs(percent).toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="h-16 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={selected.fill}
              fill={selected.fill}
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
