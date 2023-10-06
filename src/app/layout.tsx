import "./globals.scss";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Header } from "./components/Header";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Dev Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
