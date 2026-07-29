import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "WAZAWAZA - コーポレートサイト",
  description: "株式会社WAZAWAZAのコーポレートサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {/* 全ページ共通ヘッダー */}
        <Header />

        {/* ページごとのメインコンテンツ（page.tsxなど） */}
        {children}

        {/* 全ページ共通フッター */}
        <Footer />
      </body>
    </html>
  );
}
