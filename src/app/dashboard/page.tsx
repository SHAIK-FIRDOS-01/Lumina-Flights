"use client";

import { Header } from "@/components/layout/Header";
import { Plane, Calendar, User, Settings, LogOut } from "lucide-react";

const MOCK_BOOKINGS = [
  { id: "LUM-8X912", route: "JFK → LHR", date: "Oct 12, 2026", status: "Upcoming", price: 450 },
  { id: "LUM-3V114", route: "LHR → CDG", date: "Oct 18, 2026", status: "Upcoming", price: 120 },
  { id: "LUM-9B210", route: "CDG → JFK", date: "Jan 10, 2026", status: "Completed", price: 500 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12 px-4 container mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-card border border-border rounded-xl overflow-hidden sticky top-28">
            <div className="p-6 text-center border-b border-white/10">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                JD
              </div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
            <nav className="p-2 space-y-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600/10 text-blue-400 rounded-lg">
                <Plane className="w-5 h-5" /> My Bookings
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <User className="w-5 h-5" /> Saved Passengers
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Settings className="w-5 h-5" /> Settings
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors mt-4">
                <LogOut className="w-5 h-5" /> Sign Out
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <h2 className="text-3xl font-bold mb-8">My Bookings</h2>
          
          <div className="space-y-4">
            {MOCK_BOOKINGS.map((booking) => (
              <div key={booking.id} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/30 transition-colors">
                
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className={`p-4 rounded-full ${booking.status === 'Upcoming' ? 'bg-blue-600/20 text-blue-400' : 'bg-white/5 text-muted-foreground'}`}>
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{booking.route}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" /> {booking.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground">Booking Ref</p>
                    <p className="font-mono">{booking.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'Upcoming' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-white/5 text-muted-foreground border border-white/10'}`}>
                      {booking.status}
                    </span>
                    <p className="font-bold mt-2">${booking.price}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
