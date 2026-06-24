import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get("origin") || "JFK";
  const destination = searchParams.get("destination") || "LHR";

  // Mocking Amadeus Flight Offers Search API Response
  const mockFlights = [
    { id: "f1", airline: "Lumina Air", flightNumber: "LA-402", departureTime: "08:00 AM", arrivalTime: "11:30 AM", origin, destination, duration: "7h 30m", price: 450, stops: 0 },
    { id: "f2", airline: "AeroGlobal", flightNumber: "AG-105", departureTime: "10:15 AM", arrivalTime: "02:45 PM", origin, destination, duration: "8h 30m", price: 380, stops: 1 },
  ];

  return NextResponse.json({ data: mockFlights });
}
