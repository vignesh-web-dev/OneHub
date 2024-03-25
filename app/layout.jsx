"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { useRef, useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import Cursor from "@/components/cursor1";
import { Providers } from "./Redux/Providers";
import Chat from "@/components/chat";
import SmoothScrolling from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [innerWidth, setInnerWidth] = useState();
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <html>
        <meta property="og:title" content="One Hub gift shop • Home" />
        <meta
          property="og:description"
          content="One Hub gifting, your destination for exquisitely curated gifts that capture the essence of your special occasions, making each moment unforgettable."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/cover.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=3.0"
        />
        <meta name="msapplication-TileColor" content="#D5EDC4" />
        <meta name="theme-color" content="#F7BD58" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <title>One Hub Gift Shop</title>
      </html>
      <body className={inter.className}>
        {innerWidth < 950 ? (
          <Providers>
            <Navbar></Navbar>
            {children}
            <Chat></Chat>
          </Providers>
        ) : (
          <SmoothScrolling>
            <Providers>
              <Navbar></Navbar>
              {children}
              <Chat></Chat>
            </Providers>
          </SmoothScrolling>
        )}
      </body>
    </html>
  );
}
