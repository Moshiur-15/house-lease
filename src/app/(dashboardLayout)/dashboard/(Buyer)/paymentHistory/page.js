"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableHead as TH,
} from "@/components/ui/table";
import axios from "axios";
import { useSession } from "next-auth/react";

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [payments, setPayments] = useState([]);
  const [stripeTransition, setStripeTransition] = useState(null);
  const { data: session } = useSession();
  // Fetch payment history
  useEffect(() => {
    const fetchPayments = async () => {
      if (!session?.user?.email) return;
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/buyer/payment?email=${session.user.email}`
      );
      setPayments(response.data.data);
    };
    fetchPayments();
  }, [session?.user?.email]);

  // Fetch Stripe payment history
  useEffect(() => {
    const fetchPayments = async () => {
      if (!session?.user?.email) return;

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/buyer/stripe?email=${session.user.email}`
        );
        setStripeTransition(response.data.data);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };

    fetchPayments();
  }, [session]);

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6">
        <h2 className="text-xl md:text-3xl uppercase font-extrabold text-gray-900 dark:text-gray-100">
          Booking Payment History
        </h2>
        <input
          type="text"
          placeholder="Search by property..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 w-full max-w-[20rem] py-2 px-4 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TH className="text-center px-4 py-3">Property Name</TH>
              <TH className="text-center px-4 py-3">Price</TH>
              <TH className="text-center px-4 py-3">Payment Status</TH>
              <TH className="text-center px-4 py-3">Date</TH>
              <TH className="px-4 py-3 text-center">Transition</TH>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white dark:bg-gray-900">
            {payments.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No payments found.
                </TableCell>
              </TableRow>
            ) : (
              payments?.map((payment) => (
                <TableRow
                  key={payment._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
                >
                  <TableCell className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">
                    {payment.PropertyName}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {payment.PropertyFees}৳
                  </TableCell>
                  <TableCell
                    className={`px-4 py-3 ${
                      payment.PaymentStatus.toLowerCase() === "paid"
                        ? "text-green-600 dark:text-green-600"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stripeTransition?.map((transition) => (
                      <span key={transition.id}>{transition.status}</span>
                    ))}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 dark:text-gray-400">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-center px-4 py-3 text-gray-500 dark:text-gray-400">
                    {stripeTransition?.map((transition) => (
                      <span key={transition.id}>{transition.id}</span>
                    ))}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
