"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";

export function HeroSearchForm() {
  const router = useRouter();
  const [tripType, setTripType] = useState("round-trip");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-5xl mx-auto bg-background/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-10"
    >
      <Tabs defaultValue="round-trip" onValueChange={setTripType} className="mb-6">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="round-trip" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Round Trip</TabsTrigger>
          <TabsTrigger value="one-way" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">One Way</TabsTrigger>
          <TabsTrigger value="multi-city" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Multi City</TabsTrigger>
        </TabsList>
      </Tabs>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
        
        {/* Origin / Destination */}
        <div className="flex-1 flex flex-col relative w-full group">
          <div className="flex bg-black/40 rounded-xl border border-white/10 p-1 group-hover:border-blue-500/50 transition-colors">
            <div className="flex-1 relative flex items-center px-4 py-2 border-r border-white/10">
              <MapPin className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
              <div className="flex flex-col w-full">
                <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">From</label>
                <input 
                  type="text" 
                  placeholder="Where from?" 
                  className="bg-transparent border-none outline-none text-white font-semibold placeholder:font-normal placeholder:text-white/30 truncate"
                  required
                />
              </div>
            </div>
            
            <button type="button" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1.5 z-10 shadow-lg hover:bg-blue-500 transition-transform hover:scale-110">
              <ArrowRightLeft className="w-4 h-4 text-white" />
            </button>

            <div className="flex-1 relative flex items-center px-4 py-2 pl-6">
              <MapPin className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
              <div className="flex flex-col w-full">
                <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">To</label>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="bg-transparent border-none outline-none text-white font-semibold placeholder:font-normal placeholder:text-white/30 truncate"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="w-full md:w-[280px] bg-black/40 rounded-xl border border-white/10 p-3 hover:border-blue-500/50 transition-colors flex items-center px-4">
          <Calendar className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
          <div className="flex flex-col w-full">
            <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Dates</label>
            <input 
              type="text" 
              placeholder="Select dates" 
              className="bg-transparent border-none outline-none text-white font-semibold placeholder:font-normal placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="w-full md:w-[200px] bg-black/40 rounded-xl border border-white/10 p-3 hover:border-blue-500/50 transition-colors flex items-center px-4">
          <Users className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
          <div className="flex flex-col w-full">
            <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Travelers</label>
            <input 
              type="text" 
              placeholder="1 Passenger" 
              defaultValue="1 Passenger"
              className="bg-transparent border-none outline-none text-white font-semibold placeholder:font-normal placeholder:text-white/30"
              readOnly
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full md:w-auto h-[60px] rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold px-8 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </form>
    </motion.div>
  );
}
