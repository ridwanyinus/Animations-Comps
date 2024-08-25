import type { Metadata } from "next";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Animations and Effects collections ",
  description: "Made With 💖.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">{children}</body>
    </html>
  );
}
