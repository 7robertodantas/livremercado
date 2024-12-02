'use client';

import 'material-icons/iconfont/material-icons.css'
import "./globals.css";

import { Poppins } from 'next/font/google'
import CartContextProvider from '@/context/CartContext';

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
  return (
    <html lang="en">      
      <body className={poppins.className}>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
