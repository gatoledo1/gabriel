"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />

      <body className="dark:bg-black">
        <Providers>
          {children}
          <Footer />
          <ScrollToTop />
          <ThemeToggler />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import ThemeToggler from "@/components/Header/ThemeToggler";

