import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strapi - NextJs App"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-screen-lg">
          <div className="flex min-h-screen flex-col items-center p-12 lg:p-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
