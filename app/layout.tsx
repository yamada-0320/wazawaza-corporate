import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CommonEffects from "@/components/common-effects";
import "./globals.css";

export const metadata: Metadata = {
  title: "WAZAWAZA",
  description: "WAZAWAZA公式ウェブサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <CommonEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
