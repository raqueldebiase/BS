import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/organisms/Header";
import "./globals.css";
import { GalleryProvider } from "@/context/GalleryContext";
import { CartProvider } from "@/context/CartContext";
import Footer from "./components/organisms/Footer";
import ScrollToTopButton from "./components/atoms/ButtonScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlackSquare",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/backgrounds/hero.webp" as="image" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <GalleryProvider>
            <Header /> 
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton />
          </GalleryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
