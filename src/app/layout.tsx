import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cognitiflow | AI Services & Workflow Automation",
  description: "Transform your business with intelligent AI solutions. Custom AI consulting, workflow automation, and smart business tools for small and medium businesses.",
  keywords: ["AI consulting", "workflow automation", "business AI", "custom AI solutions", "small business AI"],
  openGraph: {
    title: "Cognitiflow | AI Services & Workflow Automation",
    description: "Transform your business with intelligent AI solutions.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
