import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import LimitContainer from "@/components/sections/LimitContainer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neyo",
  description:
    "Neyo is a powerful AI image generator that turns your ideas into stunning visuals. Create unique art, illustrations, and designs from simple text prompts. Fast, smart, and ideal for creators, marketers, and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-primary-black antialiased`}
        data-new-gr-c-s-check-loaded="14.1243.0"
        data-gr-ext-installed=""
      >
        <LimitContainer>
          <Header />
          {children}
        </LimitContainer>
      </body>
    </html>
  );
}
