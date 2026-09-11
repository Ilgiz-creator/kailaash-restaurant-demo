import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
  title: "Кайлаас — индийский ресторан в Санкт-Петербурге",
  description:
    "Ресторан индийской кухни и банкетный зал на Народной улице, 87Б.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
