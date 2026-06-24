import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatWidget } from "@/components/support/ChatWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Flights | Premium 3D Travel Booking",
  description: "Experience the future of flight booking with our immersive 3D platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
