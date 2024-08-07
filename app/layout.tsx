import type { Metadata } from "next";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Cursor effect ",
  description: "Made With 💖",
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
