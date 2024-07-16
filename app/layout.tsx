import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientProvider from "./storeProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce-store",
  description: "E-commerce-store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
