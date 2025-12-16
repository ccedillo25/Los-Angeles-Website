import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Los Angeles Landscaping | Family-Owned for Over 30 Years",
  description:
    "Family-owned Los Angeles landscaping for 30+ years. Weekly maintenance, cleanups, irrigation, tree trimming. Free estimates.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
