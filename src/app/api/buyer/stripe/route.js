import { NextResponse } from "next/server";
import Stripe from "stripe";
export const runtime = "nodejs";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  try {
    const body = await req.json();
    const { bookingId, propertyName, email, price } = body;

    if (price > 999999) {
      return NextResponse.json(
        {
          error: "Amount exceeds Stripe limit for BDT currency (৳999,999.99)",
        },
        { status: 400 }
      );
    }

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

export async function GET(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email query param is required" },
        { status: 400 }
      );
    }

    const payments = await stripe.paymentIntents.list({
      limit: 100,
    });

    const userPayments = payments.data.filter(
      (p) =>
        p.receipt_email === email || (p.metadata && p.metadata.email === email)
    );
    const paymentIds = userPayments.map((p) => ({
      id: p.id,
      status: p.status,
    }));
    return NextResponse.json({ data: paymentIds }, { status: 200 });
  } catch (error) {
    console.error("Stripe GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
