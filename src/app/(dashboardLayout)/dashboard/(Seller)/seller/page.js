"use client";
import StatCard from "@/app/Components/seller/StatCard";
import {
  ShoppingBag,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";

const chartData = [
  { booking: 10, Rent: 20, PaidOrders: 10, sale: 10 },
  { booking: 15, Rent: 25, PaidOrders: 14, sale: 18 },
  { booking: 18, Rent: 20, PaidOrders: 20, sale: 22 },
  { booking: 20, Rent: 28, PaidOrders: 15, sale: 25 },
  { booking: 42, Rent: 35, PaidOrders: 30, sale: 8 },
  { booking: 25, Rent: 28, PaidOrders: 34, sale: 30 },
  { booking: 38, Rent: 40, PaidOrders: 36, sale: 10 },
];

export default function SellerDashboard() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 bg-blue-50">
      <StatCard
        title="Total Booking"
        value="34,945"
        percent={1.56}
        icon={<ShoppingBag className="w-6 h-6" />}
        color="green"
        data={chartData}
        dataKey="booking"
      />
      <StatCard
        title="Total Rent"
        value="$37,802"
        percent={-1.56}
        icon={<DollarSign className="w-6 h-6" />}
        color="orange"
        data={chartData}
        dataKey="Rent"
      />
      <StatCard
        title="Orders Paid"
        value="34,945"
        percent={0.0}
        icon={<FileText className="w-6 h-6" />}
        color="gray"
        data={chartData}
        dataKey="PaidOrders"
      />
      <StatCard
        title="For sale"
        value="34,945"
        percent={1.56}
        icon={<Users className="w-6 h-6" />}
        color="blue"
        data={chartData}
        dataKey="sale"
      />
    </div>
  );
}
