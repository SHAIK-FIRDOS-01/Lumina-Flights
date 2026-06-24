"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Initialize Stripe with placeholder key - replace with real key in .env
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    // This is a mocked flow since we don't have a real clientSecret yet
    // In production, fetch clientSecret from /api/create-payment-intent
    setTimeout(() => {
      setLoading(false);
      onSuccess(); // Mock successful payment
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#ffffff',
                '::placeholder': { color: '#aab7c4' },
                iconColor: '#38bdf8',
              },
              invalid: { color: '#ef4444', iconColor: '#ef4444' },
            },
          }} 
        />
      </div>
      
      {error && <div className="text-red-500 text-sm">{error}</div>}
      
      <Button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
        {loading ? "Processing..." : "Pay $450.00"}
      </Button>
    </form>
  );
}

export function StripeCheckout({ onSuccess }: { onSuccess: () => void }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onSuccess={onSuccess} />
    </Elements>
  );
}
