"use client";

import { useState, use } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StripeCheckout } from "@/components/payment/StripeCheckout";
import { Plane, User, CreditCard, CheckCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingWizard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12 px-4 container mx-auto max-w-4xl">
        
        {/* Wizard Progress */}
        <div className="mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-blue-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
          
          <div className="flex justify-between relative z-10">
            {[
              { num: 1, label: "Itinerary", icon: Plane },
              { num: 2, label: "Passengers", icon: User },
              { num: 3, label: "Payment", icon: CreditCard },
              { num: 4, label: "Confirm", icon: CheckCircle }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${step >= s.num ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-card border border-white/20 text-muted-foreground'}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium ${step >= s.num ? 'text-white' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Content */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 min-h-[400px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold mb-6">Review your itinerary</h2>
                <div className="border border-white/10 rounded-xl p-6 bg-white/5 mb-8">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="font-semibold text-lg text-blue-400">Lumina Air LA-402</span>
                    <span className="text-sm">Economy Class</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold">08:00 AM</p>
                      <p className="text-muted-foreground">New York (JFK)</p>
                    </div>
                    <div className="flex-1 px-8 flex flex-col items-center">
                      <p className="text-sm text-muted-foreground mb-1">7h 30m</p>
                      <div className="w-full h-[1px] bg-white/20 relative">
                        <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">11:30 AM</p>
                      <p className="text-muted-foreground">London (LHR)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="bg-background" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input id="passport" placeholder="A12345678" className="bg-background" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold mb-6">Payment</h2>
                <div className="bg-background border border-white/10 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 text-green-400 mb-6">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-sm font-medium">Secure Checkout (Test Mode)</span>
                  </div>
                  
                  <StripeCheckout onSuccess={nextStep} />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Your flight to London is confirmed. An email with your e-ticket has been sent to your address.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl inline-block text-left mb-8">
                  <p className="text-sm text-muted-foreground mb-1">Booking Reference</p>
                  <p className="text-2xl font-mono tracking-widest text-white">LUM-8X912</p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 && step < 4 ? (
            <Button variant="outline" onClick={prevStep}>Back</Button>
          ) : <div />}
          
          {step < 4 && (
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 shadow-[0_0_15px_rgba(37,99,235,0.4)]" onClick={nextStep}>
              {step === 3 ? "Pay & Confirm" : "Continue"}
            </Button>
          )}
        </div>

      </main>
    </div>
  );
}
