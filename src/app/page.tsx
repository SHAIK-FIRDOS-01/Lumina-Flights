import { Scene } from "@/components/3d/Scene";
import { Header } from "@/components/layout/Header";
import { HeroSearchForm } from "@/components/home/HeroSearchForm";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      
      {/* 3D Background */}
      <Scene />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20 px-4 pointer-events-none">
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Where to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Next?</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium drop-shadow">
            Experience the future of travel. Discover, explore, and book your next adventure with our immersive 3D platform.
          </p>
        </div>

        {/* Enable pointer events only for the form */}
        <div className="w-full pointer-events-auto">
          <HeroSearchForm />
        </div>

      </div>

      {/* Overlay gradient to blend scene with the rest of the page (if we scroll down) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </main>
  );
}
