import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nigerian Soup Kitchen | Authentic Nigerian Soup Recipes",
  description:
    "Nigerian Soup Kitchen is dedicated to sharing delicious, authentic Nigerian soup recipes for families, food lovers, and cooking enthusiasts.",
  keywords: [
    "soup kitchen",
    "Nigerian soups",
    "authentic recipes",
    "African cuisine",
    "traditional Nigerian cooking",
  ],
  authors: [{ name: "Nigerian Soup Kitchen" }],
  creator: "Nigerian Soup Kitchen",
  publisher: "Nigerian Soup Kitchen",

  // Helps SEO and social sharing
  openGraph: {
    title: "Nigerian Soup Kitchen",
    description:
      "Explore authentic Nigerian soup recipes made with love and tradition.",
    url: "https://yourdomain.com", // Replace with your real domain when ready
    siteName: "Nigerian Soup Kitchen",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-default.jpg", // placeholder local image
        alt: "A bowl of authentic Nigerian soup",
      },
    ],
  },

  // Helps improve visibility on social media (default settings)
  twitter: {
    card: "summary_large_image",
    title: "Nigerian Soup Kitchen",
    description:
      "Discover authentic Nigerian soup recipes and cooking inspiration.",
    images: ["/images/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "Food & Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
