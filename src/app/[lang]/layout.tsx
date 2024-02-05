import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Locale } from "@/../i18n-config";
import "./globals.scss";
import { dictionary } from "@/../translations";
import { Footer } from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {};

type RootProps = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default function RootLayout({ children, params }: RootProps) {
  const t = dictionary[params.lang];

  metadata.title = t.document.title;
  metadata.description = t.document.description;

  return (
    <html lang={params.lang}>
      <body className={RobotoMono.className}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
