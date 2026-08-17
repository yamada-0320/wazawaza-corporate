import type { Metadata } from "next";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title: "歯科医院検索サイト「ココシカ！」 | サービス | 株式会社WAZAWAZA",
  description:
    "株式会社WAZAWAZAが運営する、症例から探せる歯科医院検索プラットフォーム「ココシカ！」の紹介ページです。",
};

export default function ServiceCocoSikaPage() {
  return (
    <main id="pageServicecocoshika" className="pageService">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">SERVICE</span>
            <br />
            <span className="jp">歯科医院検索サイト「ココシカ！」</span>
          </h2>
        </div>
      </div>

      <div className="pageLead">
        <div className="wrap">
          <h3 className="pageLeadTitle">
            <span className="titleLeft">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 102.83 15.07"
                xmlSpace="preserve"
              >
                <g id="グループ_65" transform="translate(0.631 1.395)">
                  <path
                    style={{
                      fill: "none",
                      stroke: "#1C1C1C",
                      strokeWidth: 2,
                    }}
                    className="titlelineLeft"
                    d="M-0.01,7.04l6.46,5.26L17.66,0l14.19,12.3L46.01,0l10.32,8.01h45.87"
                  />
                </g>
              </svg>
            </span>
            <span>ココシカ！とは？</span>
            <span className="titleRight">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 102.83 15.07"
                xmlSpace="preserve"
              >
                <g transform="translate(0 1.395)">
                  <path
                    style={{
                      fill: "none",
                      stroke: "#1C1C1C",
                      strokeWidth: 2,
                    }}
                    className="titlelineRight"
                    d="M102.2,7.04l-6.46,5.26L84.53,0L70.34,12.3L56.18,0L45.86,8.01H0"
                  />
                </g>
              </svg>
            </span>
          </h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/2b530e80c7d0de90885e285c5d798063-11.png"
            alt="ココシカ！概要"
          />
          <p>
            ココシカ！は歯科医院に約10年携わってきたWAZAWAZAが展開し、
            <br />
            運営するプラットフォーム。
            <br />
            「歯科医院の実績となる『症例情報』を公開することで、
            <br />
            歯科医院の強みや特徴を伝えることができる新しい集患方法になるのではないか？」
            <br />
            という観点から企画がスタートし、約3年の構想期間を経て実現しました。
          </p>
        </div>
      </div>

      <section className="scPageContets">
        <div className="serviceContets wrap">
          <h4 className="conTitle">
            <span className="jp">ココシカ！でやりたいこと</span>
          </h4>

          <p>
            ココシカ！では、「歯科医院の得意」と「患者の欲しい」をつなげたいと考えています。
            その架け橋として活用するのが症例情報です。
          </p>
          <h5>【症例情報を活用しようと思った理由】</h5>
          <p>
            現在、WEB上で「どんな歯科医院なのか」を知ろうとしたときに、主に見られているのが医院サイトと口コミです。ただ私達は、患者からは「本当に信用できるのか」という不安を、先生からは「口コミに翻弄されたくない」「文字だけで強みなどを打ち出せない」という悩みをお伺いしてきました。
          </p>
          <p>
            その課題を解決する方法として、「信頼できる情報」「分かりやすく判断基準がある」「口コミに頼らない」という視点から症例情報の活用にたどり着きました。
          </p>
          <h5>【症例を活用した事例】</h5>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/c8856789ec11ab8b1013037cef6929f9-6.png"
            alt="症例を活用した事例"
          />
          <p>
            弊社ではココシカ！リリース前の約3年間、弊社クライアント医院と連携し、各医院ホームページに症例情報を掲載。様々な結果を得ることができています。
          </p>
          <ul>
            <li>症例を医院ホームページに掲載して約16倍のアクセス数に</li>
            <li>
              クライアント医院のサイト内、年間ページビューランキング上位に症例記事が多数入るなど検索されるコンテンツに
            </li>
            <li>自費率の向上</li>
          </ul>
        </div>

        <div className="serviceContets wrap">
          <h4 className="conTitle">
            <span className="jp">ココシカ！でできること</span>
          </h4>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/3a4f695a458cb0ac0aceaa2eb13ac2dd-5.png"
            alt="ココシカ！でできること"
          />
          <h5>【歯科医院】</h5>
          <ul>
            <li>
              歯科医院で提供している治療を求めている患者さんにアプローチできる可能性が高まるので集患に役立てることができます。
            </li>
            <li>
              ココシカ！からのリンクで自医院ホームページのSEO向上によるアクセス数の増加が見込めます。
            </li>
            <li>
              患者さんの事前理解により、説明時間などチェアタイムの短縮が見込めます。
            </li>
            <li>
              患者さんの事前理解が得られるので、誤解などによるトラブル率の低減を見込めます。
            </li>
          </ul>
          <h5>【患者】</h5>
          <ul>
            <li>
              症例実績を見ることでより信頼度の高い情報を得ることができます。
            </li>
            <li>
              悩みからも症例情報を探すことができるので、治療方法などがわからなくても検索することが可能です。
            </li>
            <li>写真を掲載するので視覚的に治療例を把握することができます。</li>
          </ul>
          <h5>【基本機能】</h5>
          <ul>
            <li>
              3つの検索方法（症例を探す／医院を探す／フリーワード検索）
            </li>
            <li>医院情報の掲載</li>
            <li>医院情報に紐付いた症例情報の掲載</li>
            <li>医院のホームページやWEB予約ページにリンク</li>
          </ul>
        </div>

        {/* 共通の事例スライダーパーツを呼び出し */}
        <div className="productArea">
          <h4 className="conTitle">
            <span className="en">Product</span>
            <span className="jp">まずは事例をみたいみなさまへ</span>
          </h4>
          <ProductSlider />
        </div>
      </section>

      <Contact />
    </main>
  );
}
