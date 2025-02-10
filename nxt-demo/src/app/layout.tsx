import type { Metadata } from "next";
import { Noto_Sans_JP  } from "next/font/google";
//import "./globals.css";
import "../assets/sass/style.scss";
import { GoogleTagManager } from '@next/third-parties/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  // weight: 'variable', // default なので不要。バリアブルフォントでなければ必要
  // display: 'swap', // default なので不要
  // preload: true, // default なので不要
  // adjustFontFallback: true, // next/font/google で default なので不要
  // fallback: ['system-ui', 'arial'], // local font fallback なので不要
})

export const metadata: Metadata = {
  title: "CASPF DEMO",
  description: "CASPF DEMO SITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
