import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROMO Furnishers | B2B Wholesale Curtains & Cushions",
  description: "Wholesale sourcing for furnishing stores and showroom dealers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-[#F5F2EB] text-[#2B2C2A]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}