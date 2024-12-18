import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "./components/home/header"



import "./globals.css";
import Script from "next/script";
import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PinTude",
  // description:"Grow Your Business Digitally for Just ₹500!",
  description:"Grow Your Business Online for Just ₹500 Per Year",
  icons: {
    icon: "/favicon.svg", // Add your favicon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        {children}

        <Script
          src="https://reportzai.com/script.js"
          data-website-id="238976fb-f3f6-48f6-b01a-f1daa2867db3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
