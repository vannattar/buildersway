import { Playfair_Display, Inter } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
