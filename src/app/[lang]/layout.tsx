import "./globals.scss";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Locale } from "../../../i18n-config";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Dev Portfolio",
  description: "My personal portfolio",
};

type RootProps = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default function RootLayout({ children, params: { lang } }: RootProps) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
