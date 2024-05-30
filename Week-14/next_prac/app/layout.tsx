import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SignInButtonComponent } from "@/components/SignInButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Init Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {` ${inter.className}`}>
        <div className="p-3 border-b-4 border-black font-extrabold flex justify-between">
          <div className=" self-center text-2xl">Nextjs</div>
          <SignInButtonComponent />
        </div>
        {children}
        </body>
    </html>
  );
}
