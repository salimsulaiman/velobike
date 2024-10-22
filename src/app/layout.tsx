import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

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

export const metadata: Metadata = {
  title: "VeloBike",
  description:
    "Velobike adalah toko sepeda terpercaya yang menyediakan berbagai jenis sepeda dan aksesoris berkualitas untuk memenuhi kebutuhan para penggemar sepeda, baik pemula maupun profesional. Kami menawarkan koleksi sepeda lengkap, mulai dari sepeda gunung, sepeda balap, sepeda lipat, hingga sepeda anak-anak, semuanya dari merek-merek ternama yang sudah teruji kualitasnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins bg-alabaster-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
