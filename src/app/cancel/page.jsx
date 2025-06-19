'use client';

import { useRouter } from 'next/navigation';

export default function Cancel() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">❌ Payment Cancelled</h1>
      <p className="mb-6">Your payment was not completed. You can try again anytime.</p>
      <button
        onClick={() => router.push('/dashboard/myBookings')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
  );
}
