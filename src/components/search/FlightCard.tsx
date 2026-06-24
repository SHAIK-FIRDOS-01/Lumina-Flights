"use client";

import { motion } from "framer-motion";
import { Plane, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface FlightCardProps {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  duration: string;
  price: number;
  stops: number;
  delay: number;
}

export function FlightCard({
  id, airline, flightNumber, departureTime, arrivalTime, origin, destination, duration, price, stops, delay
}: FlightCardProps) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/book/${id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group perspective-1000 w-full mb-6"
    >
      <div className="relative w-full transition-transform duration-700 transform-style-3d group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] bg-card border border-border rounded-2xl overflow-hidden">
        
        {/* Main Card Content */}
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Airline Info */}
          <div className="flex items-center gap-4 w-full md:w-1/4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <Plane className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{airline}</h3>
              <p className="text-sm text-muted-foreground">{flightNumber}</p>
            </div>
          </div>

          {/* Flight Times & Route */}
          <div className="flex items-center justify-between w-full md:w-1/2">
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{departureTime}</p>
              <p className="text-sm text-muted-foreground">{origin}</p>
            </div>
            
            <div className="flex flex-col items-center flex-1 px-8">
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {duration}
              </p>
              <div className="w-full flex items-center">
                <div className="h-[2px] flex-1 bg-white/10 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-blue-400 font-medium">
                    {stops === 0 ? "Direct" : `${stops} Stop${stops > 1 ? 's' : ''}`}
                  </div>
                </div>
                <Plane className="w-4 h-4 text-white/50 ml-2" />
              </div>
            </div>

            <div className="text-left">
              <p className="text-2xl font-bold text-white">{arrivalTime}</p>
              <p className="text-sm text-muted-foreground">{destination}</p>
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:items-end w-full md:w-1/4 gap-4 md:gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="text-left md:text-right">
              <p className="text-sm text-muted-foreground">Price per passenger</p>
              <p className="text-3xl font-extrabold text-white">${price}</p>
            </div>
            <Button onClick={handleSelect} className="bg-blue-600 hover:bg-blue-500 text-white w-full md:w-auto gap-2 group-hover:scale-105 transition-transform">
              Select <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
        
        {/* Subtle glowing border on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl pointer-events-none transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
