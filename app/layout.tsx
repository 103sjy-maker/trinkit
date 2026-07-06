import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter — English copy, UI labels, buttons
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
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
    <html lang="ko" className={inter.variable}>
      <head>
        {/* Pretendard — Korean copy and body text */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
