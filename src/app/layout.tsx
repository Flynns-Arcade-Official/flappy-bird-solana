import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flappy Bird",
  description: "Flappy Bird Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Flappy Bird" />
        <meta property="og:description" content="Flappy Bird Game" />
        <meta property="og:site_name" content="FlappyBird" />
      </head>
      <body className={inter.className}>
        <link rel="icon" href="/Bonk.png" />
        {children}
      </body>
    </html>
  );
}
