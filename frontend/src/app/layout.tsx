'use client';

import 'material-icons/iconfont/material-icons.css'
import "./globals.css";

import { Poppins } from 'next/font/google'
import CartContextProvider from '@/context/CartContext';
import MainLayout from '@/layouts/MainLayout';
import { useEffect } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    document.title = "Livre Mercado";
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartContextProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </CartContextProvider>
      </body>
    </html>
  );
}
