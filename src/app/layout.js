import { Geist, Geist_Mono, Nunito,Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const nunito = Nunito({
  weight:["400","500","600","700"]
})
export const poppins = Poppins({
  weight:["400","500","600","700"]

})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
