import { Poppins } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: "swap"
});

export const metadata = {
  title: {
    default: "Food Delivery App | Fast & Fresh Online Ordering",
    template: "%s | Food Delivery App",
  },
  description:
    "A production-ready full-stack food delivery application built with Next.js, MongoDB, JWT authentication, and Stripe payment integration.",
  keywords: [
    "Next.js project",
    "MERN portfolio project",
    "Food delivery app",
    "Full stack web app",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`} >
        <LenisScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
