import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nike Landing Page",
  description: "A simple landing page for Nike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
