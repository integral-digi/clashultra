import type { Metadata } from "next";
import { Caveat, Rubik } from "next/font/google";
import { ContentProvider } from "../app/context/ContentContext";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Clash Ultra Next JS Template",
  description: "Clash Ultra Next JS Gaming Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${caveat.variable}`}>
      <body>
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
