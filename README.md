# Lumina Flights ✈️🌍

A premium, 3D immersive Online Travel Agency web application built with Next.js 15, React Three Fiber, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **3D Engine:** Three.js + React Three Fiber (@react-three/fiber, @react-three/drei)
- **Animations:** Framer Motion + GSAP
- **Database:** Prisma ORM + SQLite
- **Authentication:** NextAuth.js
- **Payments:** Stripe Elements (Test Mode)

## 🛠️ Local Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Ensure you have an `.env` file in the root directory. If not, copy the `.env.example` or create one:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-super-secret-nextauth-key-12345"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="sk_test_placeholder"
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_placeholder"
   ```

3. **Database Setup (Prisma)**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔄 Switching from Mock to Real Amadeus API

Currently, the application uses a mock API for flight searches located in `src/app/api/flights/search/route.ts`. 

To switch to the real Amadeus API:
1. Sign up at [Amadeus for Developers](https://developers.amadeus.com/) and get your API keys.
2. Install the Amadeus Node.js SDK: `npm install amadeus`
3. Add your keys to `.env`:
   ```env
   AMADEUS_CLIENT_ID="your_client_id"
   AMADEUS_CLIENT_SECRET="your_client_secret"
   ```
4. Update `src/app/api/flights/search/route.ts` to instantiate the Amadeus client and fetch real `Flight Offers Search` data instead of returning the hardcoded `mockFlights` array.

## ☁️ Deployment Guide (Vercel)

1. Push your code to a GitHub repository.
2. Import the project into [Vercel](https://vercel.com/new).
3. In the Vercel dashboard, add all the environment variables from your `.env` file.
   - *Note:* If deploying to production, consider switching from SQLite to a PostgreSQL database (like Vercel Postgres or Supabase) by updating the provider in `prisma/schema.prisma` and updating your `DATABASE_URL`.
4. Click **Deploy**.

## 🎥 Loom Screencast Script (Demo Walkthrough)

**1. Homepage (0:00 - 0:15)**
"Welcome to Lumina Flights. Notice the immersive 3D globe hero section built with React Three Fiber. You can rotate it, and the flight arcs dynamically orbit the earth. It sets a premium, futuristic tone."

**2. Search (0:15 - 0:30)**
"Here is the streamlined search interface. I'll search for a flight from New York to London and hit Search." *(Click Search)*

**3. Results (0:30 - 0:45)**
"We're taken to the results page. The UI features smooth entrance animations via Framer Motion. The sticky sidebar filters let me adjust maximum price or number of stops instantly." *(Click 'Select' on a flight)*

**4. Booking Wizard & Payment (0:45 - 1:10)**
"Now we enter the seamless Booking Wizard. Step 1 shows the itinerary. Step 2 collects passenger details. Step 3 is the secure Stripe Checkout integration. Let's process the payment..." *(Click Pay)*

**5. Confirmation & Support (1:10 - 1:30)**
"Payment is successful, and we land on the confirmation screen with our Booking Reference. Also, note the floating AI Support Widget in the bottom right corner, ready to assist customers 24/7. Finally, logged-in users can view all these details in their personalized Dashboard."
