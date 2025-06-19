import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  try {
    const body = await req.json();
    const { bookingId, propertyName, price, email } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "bdt",
            product_data: {
              name: propertyName,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/success?bookingId=${bookingId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/myBookings`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Payment session failed" },
      { status: 500 }
    );
  }
}


// export async function GET(req) {
//   try {
//     const payments = await stripe.paymentIntents.list({
//       limit: 1,
//     });
//     console.log("Payments retrieved:", payments.data);
//     return NextResponse.json(payments.data, {
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
