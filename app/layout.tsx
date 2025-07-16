import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google'
import ResponsiveNavBar from "@/components/home/navbar/ResponsiveNavBar";


const font = Poppins({
  weight: ['100','200', '300', '400', '500', '600', '700', '800','900'],
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Travel For You - NextJS 15",
  description: "Travel Landing Page using NextJS 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNavBar />
        {children}
      </body>
    </html>
  );
}
