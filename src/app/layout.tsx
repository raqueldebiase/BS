import type { Metadata } from "next";
import Head from "next/head";
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
  description: "Digital Art Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <meta property="og:title" content="Black Square" />
        <meta property="og:description" content="Digital Art Commerce" />
        <meta property="og:image" content="https://blacksquare.vercel.app/opengraph.jpeg" />
        <meta property="og:url" content="https://blacksquare.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Black Square" />
        <meta name="twitter:description" content="Digital Art Commerce" />
        <meta name="twitter:image" content="https://blacksquare.vercel.app/opengraph.jpeg" />
        </Head>
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
