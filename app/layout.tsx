import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const sentinel = localFont({
  src: [
    {
      path: "./fonts/Sentinel-Screen-Smart-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Sentinel-Screen-Smart-Semi-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Sentinel-Screen-Smart-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "trinkit — Little things. Memorable moments.",
  description: "일상의 작은 행복을 더하는 굿즈. Premium lifestyle goods designed for everyday beauty.",
  openGraph: {
    title: "trinkit",
    description: "Little things. Memorable moments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sentinel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
