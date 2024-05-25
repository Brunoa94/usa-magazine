import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/global/footer";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`flex flex-col items-center`}>
        <StoreProvider>
          <Navbar />
          <div className="w-full flex flex-col items-center">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}