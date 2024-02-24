import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/Nav";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlexFile",
  description: "Next Js File converter app built with Yousef Tarek",
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Nav />
            <Toaster />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
