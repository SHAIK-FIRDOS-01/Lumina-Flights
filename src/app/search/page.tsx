"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { FlightCard } from "@/components/search/FlightCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox"; // Wait, I didn't install checkbox, let me use a native one or a switch for now or just generic UI
import { Switch } from "@/components/ui/switch";
import { Filter, SlidersHorizontal } from "lucide-react";

// Mock Data
const MOCK_FLIGHTS = [
  { id: "f1", airline: "Lumina Air", flightNumber: "LA-402", departureTime: "08:00 AM", arrivalTime: "11:30 AM", origin: "JFK", destination: "LHR", duration: "7h 30m", price: 450, stops: 0 },
  { id: "f2", airline: "AeroGlobal", flightNumber: "AG-105", departureTime: "10:15 AM", arrivalTime: "02:45 PM", origin: "JFK", destination: "LHR", duration: "8h 30m", price: 380, stops: 1 },
  { id: "f3", airline: "SkyLink", flightNumber: "SL-992", departureTime: "02:00 PM", arrivalTime: "09:00 PM", origin: "JFK", destination: "LHR", duration: "7h 00m", price: 620, stops: 0 },
  { id: "f4", airline: "Lumina Air", flightNumber: "LA-405", departureTime: "06:30 PM", arrivalTime: "01:00 AM", origin: "JFK", destination: "LHR", duration: "7h 30m", price: 410, stops: 0 },
  { id: "f5", airline: "Oceanic", flightNumber: "OC-815", departureTime: "09:00 PM", arrivalTime: "06:00 AM", origin: "JFK", destination: "LHR", duration: "9h 00m", price: 320, stops: 1 },
];

export default function SearchResults() {
  const [priceRange, setPriceRange] = useState([800]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
            <div className="flex items-center gap-2 font-semibold text-lg mb-6 pb-4 border-b border-white/10">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4 flex justify-between">
                Max Price <span>${priceRange[0]}</span>
              </h4>
              <Slider 
                defaultValue={[800]} 
                max={1000} 
                step={10} 
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>

            {/* Stops */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4">Stops</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Direct</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">1 Stop</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">2+ Stops</span>
                  <Switch />
                </div>
              </div>
            </div>
            
          </div>
        </aside>

        {/* Results */}
        <section className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">New York (JFK) to London (LHR)</h2>
            <p className="text-muted-foreground text-sm">{MOCK_FLIGHTS.length} flights found</p>
          </div>

          <div className="space-y-4">
            {MOCK_FLIGHTS.filter(f => f.price <= priceRange[0]).map((flight, idx) => (
              <FlightCard key={flight.id} {...flight} delay={idx} />
            ))}
            
            {MOCK_FLIGHTS.filter(f => f.price <= priceRange[0]).length === 0 && (
              <div className="text-center py-20 border border-dashed border-white/20 rounded-xl">
                <Filter className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium">No flights found matching your filters.</p>
                <p className="text-sm text-muted-foreground mt-2">Try adjusting the price range.</p>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
