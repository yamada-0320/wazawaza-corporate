"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThanksPage() {
  useEffect(() => {
    // ページ表示時に表示フラグのクラスを付与してテキストを表示させる
    const pageHeadText = document.querySelector(".pageHeadText");
    if (pageHeadText) {
      pageHeadText.classList.add("on", "is-active");
    }
  }, []);

  return (
    <main>
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
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
