import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社WAZAWAZA",
  description: "株式会社WAZAWAZAの会社概要ページです。",
};

export default function InfoPage() {
  return (
    <main id="pageInfo" className="pageInfo">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">INFO</span>
            <br />
            <span className="jp">会社概要</span>
          </h2>
        </div>
      </div>

      <section className="scPageContets">
        <div className="wrap">
          <div className="infoContets">
            <div className="wp-block-table is-style-stripes">
              <table>
                <tbody>
                  <tr>
                    <td>社名</td>
                    <td>株式会社WAZAWAZA</td>
                  </tr>
                  <tr>
                    <td>事業所</td>
                    <td>
                      大阪本社
                      <br />
                      〒532-0011
                      <br />
                      大阪府大阪市淀川区西中島4-11-24-202
                      <br />
                      <br />
                      東京営業所
                      <br />
                      〒105-0014
                      <br />
                      東京都港区芝2-29-11
                    </td>
                  </tr>
                  <tr>
                    <td>電話番号</td>
                    <td>TEL:050-8890-3551</td>
                  </tr>
                  <tr>
                    <td>役員</td>
                    <td>代表取締役：出崎 佑弥</td>
                  </tr>
                  <tr>
                    <td>従業員数</td>
                    <td>60名(グループ合計)</td>
                  </tr>
                  <tr>
                    <td>設立</td>
                    <td>2020年4月1日</td>
                  </tr>
                  <tr>
                    <td>事業内容</td>
                    <td>
                      歯科特化型Webサイト制作
                      <br />
                      マーケティング支援
                      <br />
                      広告運用
                      <br />
                      SNS運用代行
                      <br />
                      ココシカ！
                      <br />
                      新電力販売代理店
                    </td>
                  </tr>
                  <tr>
                    <td>取引銀行</td>
                    <td>みずほ銀行 五反田支店</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
