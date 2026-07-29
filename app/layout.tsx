import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WAZAWAZA - コーポレートサイト",
  description: "株式会社WAZAWAZAのオフィシャルサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
