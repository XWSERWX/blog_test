import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { ThemeInitializer } from "./components/Theme/ThemeInitializer";
import { ThemeToggle } from "./components/Theme/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-gray-900 dark:bg-darkBackground dark:text-gray-100 transition-colors`}
      >
        <ThemeInitializer />
        <header className="p-4 flex justify-end container mx-auto">
          <ThemeToggle />
        </header>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
