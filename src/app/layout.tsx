import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
      <header className="w-screen fixed z-50">
          <NavBar/>
      </header>
        {children}
      <Footer/>
      {/* <Analytics/> */}
      </body>
    </html>
  );
}