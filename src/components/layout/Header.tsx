"use client";

import Link from "next/link";
import { Plane, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tighter">
          <Plane className="w-8 h-8 text-blue-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Lumina
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/explore" className="text-foreground/80 hover:text-white transition-colors">Explore</Link>
          <Link href="/deals" className="text-foreground/80 hover:text-white transition-colors">Deals</Link>
          <Link href="/about" className="text-foreground/80 hover:text-white transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex gap-2 border-white/20 hover:bg-white/10">
            <User className="w-4 h-4" />
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
