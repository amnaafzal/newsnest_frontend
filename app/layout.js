import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/themeContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NewsNest",
  description: "NewsNest- All the latest news",
  icons: {
    icon: 'favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      

      </head>
      <body
     
        className={`${geistSans.variable} ${geistMono.variable} antialiased light hide-scrollbar`}
      >
        <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
