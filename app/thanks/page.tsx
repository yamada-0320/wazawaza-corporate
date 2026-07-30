import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "送信完了 | 株式会社WAZAWAZA",
  description: "お問い合わせありがとうございました。",
};

export default function ThanksPage() {
  return (
    <main>
      <div className="PageHead">
        <div className="pageHeadText">
          <h2>
            <span className="en">THANKS</span>
            <br />
            <span className="jp">お問い合わせありがとうございました。</span>
          </h2>
          <p className="btn">
            <Link href="/">トップへ戻る</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
