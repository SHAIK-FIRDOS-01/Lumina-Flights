'use client';

import React, { useState } from 'react';
import { Plane, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// 3D Globe Component (simulated for now)
function GlobeScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#334455_0.8px,transparent_1px)] bg-[length:4px_4px]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[620px] h-[620px] rounded-full border border-[#334455] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-[15%] border border-cyan-400/20 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
            <path d="M100 200 Q300 100 500 250" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="8 4" className="animate-pulse" />
            <path d="M150 450 Q350 300 480 420" fill="none" stroke="#67e8f9" strokeWidth="1" strokeDasharray="6 6" className="animate-pulse" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-75"></div>
        </div>
      </div>
    </div>
  );
}

export default function LuminaFlights() {
  const [tripType, setTripType] = useState<'round' | 'oneway' | 'multi'>('round');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Searching flights... Prototype ready for client demo!');
  };

  return (
    <div className="min-h-screen bg-[#05060f] text-white relative overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#05060f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <span className="text-2xl font-semibold tracking-tighter">Lumina</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#" className="hover:text-cyan-400 transition-colors">Explore</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Deals</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all">Sign In</button>
            <button className="px-8 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2">
              Book Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <GlobeScene />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs uppercase tracking-[3px] font-mono">Immersive 3D Experience</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Next?</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
              Experience the future of travel with our immersive 3D platform.
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto">
            <div className="bg-zinc-950/70 border border-white/10 backdrop-blur-3xl rounded-3xl p-2 shadow-2xl">
              <div className="flex border-b border-white/10 mb-6 px-6 pt-6">
                {['Round Trip', 'One Way', 'Multi City'].map((type) => (
                  <button key={type} onClick={() => {}} className="px-8 py-3 text-sm font-medium transition-all rounded-t-2xl text-white border-b-2 border-cyan-400">
                    {type}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSearch} className="px-8 pb-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Form fields matching screenshot */}
                <div className="md:col-span-5">
                  <div className="relative">
                    <MapPin className="absolute left-5 top-4 text-cyan-400" />
                    <input type="text" placeholder="Where from?" className="w-full bg-zinc-900 border border-white/10 pl-14 py-4 rounded-2xl text-lg" />
                  </div>
                </div>
                <div className="md:col-span-5 relative">
                  <div className="relative">
                    <MapPin className="absolute left-5 top-4 text-cyan-400" />
                    <input type="text" placeholder="Where to?" className="w-full bg-zinc-900 border border-white/10 pl-14 py-4 rounded-2xl text-lg" />
                  </div>
                </div>
                <button type="submit" className="md:col-span-4 mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-4 rounded-2xl">
                  Search Flights
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
