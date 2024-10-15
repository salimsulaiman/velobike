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
    "Velobike adalah toko sepeda terpercaya yang menyediakan berbagai jenis sepeda dan aksesoris berkualitas untuk memenuhi kebutuhan para penggemar sepeda, baik pemula maupun profesional. Kami menawarkan koleksi sepeda lengkap, mulai dari sepeda gunung, sepeda balap, sepeda lipat, hingga sepeda anak-anak, semuanya dari merek-merek ternama yang sudah teruji kualitasnya. \n Selain sepeda, Velobike juga menyediakan beragam aksesoris yang akan menunjang kenyamanan dan keamanan Anda saat bersepeda, seperti helm, sarung tangan, lampu sepeda, botol minum, kunci pengaman, serta perlengkapan perawatan sepeda. Kami berkomitmen untuk memberikan pelayanan terbaik dan membantu Anda menemukan sepeda yang sesuai dengan kebutuhan serta gaya bersepeda Anda. \n Kunjungi Velobike untuk mendapatkan pengalaman bersepeda yang lebih menyenangkan dan maksimal. Nikmati perjalanan bersama sepeda pilihan Anda dengan aksesoris lengkap hanya di Velobike!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins bg-alabaster-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
