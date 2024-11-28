import { Inter, Poppins } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Livre Mercado",
  description: "O lugar onde tudo se encontra!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
