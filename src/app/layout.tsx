import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from 'next/font/google';
import "./globals.css";

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "XporePE — El Perú en tus manos",
  description: "Turismo inteligente en Perú. Rutas personalizadas, modo sin internet, comunidad local.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bebas.variable} ${montserrat.variable} antialiased bg-bgPrimary`}
      >
        {children}
      </body>
    </html>
  );
}
