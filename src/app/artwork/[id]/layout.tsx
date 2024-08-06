// src/app/artwork/[id]/layout.tsx

import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artwork Details",
  description: "Details of a specific artwork.",
};

export default function ArtworkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}
