import { Geist, Geist_Mono, Nunito, Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";
import { ThemeProvider } from "next-themes";
import { UserContextProvider } from "@/context/UserContextProvider";
import { IdeasContextProvider } from "@/context/IdeasContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
});
export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <UserContextProvider>
            <IdeasContextProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </IdeasContextProvider>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
