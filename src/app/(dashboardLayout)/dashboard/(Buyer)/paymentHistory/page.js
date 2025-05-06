import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      propertyName: "Mountain Retreat Cabin",
      price: 3200,
      bedrooms: 3,
      bathrooms: 2,
      date: "2025-05-01",
      status: "Completed",
    },
    {
      id: 2,
      propertyName: "Lakeside Villa",
      price: 2800,
      bedrooms: 2,
      bathrooms: 2,
      date: "2025-04-01",
      status: "Completed",
    },
    {
      id: 3,
      propertyName: "Urban Studio",
      price: 1500,
      bedrooms: 1,
      bathrooms: 1,
      date: "2025-03-01",
      status: "Pending",
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 uppercase text-gray-800 dark:text-gray-200">
        Payment History
      </h2>
      <div className="overflow-hidden border border-gray-200 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">
              <TableHead className="border-r border-gray-300 dark:border-gray-700">Property Name</TableHead>
              <TableHead className="border-r border-gray-300 dark:border-gray-700">Price</TableHead>
              <TableHead className="border-r border-gray-300 dark:border-gray-700">Bedrooms</TableHead>
              <TableHead className="border-r border-gray-300 dark:border-gray-700">Bathrooms</TableHead>
              <TableHead className="border-r border-gray-300 dark:border-gray-700">Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow
                key={payment.id}
                className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700"
              >
                <TableCell className="border-r border-gray-300 dark:border-gray-700 font-medium">
                  {payment.propertyName}
                </TableCell>
                <TableCell className="border-r border-gray-300 dark:border-gray-700">
                  ${payment.price.toLocaleString()}
                </TableCell>
                <TableCell className="border-r border-gray-300 dark:border-gray-700">
                  {payment.bedrooms}
                </TableCell>
                <TableCell className="border-r border-gray-300 dark:border-gray-700">
                  {payment.bathrooms}
                </TableCell>
                <TableCell className="border-r border-gray-300 dark:border-gray-700">
                  {payment.date}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 text-xs font-semibold ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                    }`}
                  >
                    {payment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
