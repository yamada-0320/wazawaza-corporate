import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "404 NOT FOUND | 株式会社WAZAWAZA",
  description: "お探しのページが見つかりませんでした。",
};

export default function NotFound() {
  return (
    <main id="pageProduct" className="pageProduct">
      <section className="scPageContets">
        <div className="wrap">
          <h3 className="titleBold">
            <span>404 NOT FOUND</span>
          </h3>
          <div className="postList">
            <p style={{ lineHeight: 2 }}>
              お探しのページが見つかりませんでした。
              <br />
              <br />
              株式会社WAZAWAZAのホームページへご来訪いただきありがとうございます。大変申し訳ございません。
              <br />
              お客様のアクセスしようとしたページ、またはファイルは、下記のような理由によりご覧いただくことができません。
              <br />
              ・入力したURLが間違っているため
              <br />
              ・2021年5月のサイトリニューアルに伴い、該当するURLのページが移転し、URLが変更されたため
              <br />
              ・ページが削除されたため
              <br />
              ・現在、メンテナンス中のため一時的に表示していないため
              <br />
              ・なお、ブラウザの再読み込みを行ってもこのページが表示される場合は、
              URLをご確認いただくか、トップページを表示しメニューより目的のページをお探しください。
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
