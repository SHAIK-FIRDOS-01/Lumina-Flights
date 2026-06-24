import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { flightId, passengers, paymentToken } = body;

    // Here we would integrate with Stripe using the paymentToken
    // const charge = await stripe.charges.create({ ... })

    // If payment is successful, create booking in DB
    const booking = await prisma.booking.create({
      data: {
        userId: "1", // Mock user ID for now
        flightNumber: "LA-402",
        origin: "JFK",
        destination: "LHR",
        departureTime: "08:00 AM",
        price: 450,
        status: "CONFIRMED"
      }
    });

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Booking failed" }, { status: 500 });
  }
}
