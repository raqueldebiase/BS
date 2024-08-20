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
  description: "Digital Art Commerce",
  openGraph: {
    title: "Black Square",
    description: "Digital Art Commerce",
    url: "https://blacksquare.vercel.app",
    images: [
      {
        url: "https://blacksquare.vercel.app/opengraph.jpeg",
        width: 800,
        height: 600,
        alt: "Black Square Open Graph Image",
      },
    ],
  },
  twitter: {
    title: "Black Square",
    description: "Digital Art Commerce",
    images: [
      {
        url: "https://blacksquare.vercel.app/opengraph.jpeg",
        alt: "Black Square Twitter Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Helper function to ensure all values are strings
  const toString = (value: any): string => {
    return value ? String(value) : '';
  };

  const openGraphImages = metadata.openGraph?.images;
  const twitterImages = metadata.twitter?.images;

  const getImageUrl = (images: any): string => {
    if (Array.isArray(images)) {
      return toString(images[0]?.url); // Assumes the first image if it's an array
    } else if (images && typeof images === 'object') {
      return toString(images.url); // Assumes it's a single object if not an array
    }
    return '';
  };

  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={toString(metadata.openGraph?.title)} />
        <meta property="og:description" content={toString(metadata.openGraph?.description)} />
        <meta property="og:image" content={getImageUrl(openGraphImages)} />
        <meta property="og:url" content={toString(metadata.openGraph?.url)} />
        <meta name="twitter:title" content={toString(metadata.twitter?.title)} />
        <meta name="twitter:description" content={toString(metadata.twitter?.description)} />
        <meta name="twitter:image" content={getImageUrl(twitterImages)} />
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
