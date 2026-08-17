import type { Metadata } from "next";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title:
    "自分のビジネスでお悩みのあるみなさまへ | サービス | 株式会社WAZAWAZA",
  description:
    "株式会社WAZAWAZAの一般企業・事業者さま向けサービス紹介ページです。",
};

export default function ServiceGeneralPage() {
  return (
    <main id="pageGeneral" className="pageService lowerPage">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">TO ANYONE</span>
            <br />
            <span className="jp">自分のビジネスでお悩みのあるみなさまへ</span>
          </h2>
          <p className="lead">ピッタリのコンテンツと、ソリューションを</p>
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
            <span>
              時代のニーズを
              <br />
              敏感に汲み取る
            </span>
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
          <p>WEBサイトは一度作って終わりではありません。</p>
          <p>
            その時の事業規模や各事業フェーズでの優先課題によって
            <br />
            打ち出すべきものは変わってくる他、
            <br />
            時代のニーズによっても求められることは変化していきます。
          </p>
          <p>
            然るべき人に、然るべきサービスを届けるために、
            <br />
            適切なコンテンツと、ソリューションを提供いたします。
          </p>
        </div>
      </div>

      <section className="scPageContets">
        <div className="serviceContets length">
          <h4 className="conTitleBox">ホームページ制作</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceProduction.jpg" alt="WAZAWAZA" />
          </div>
          <div className="conText">
            <p>
              コーポレートサイトや、商品紹介ページなど
              <br />
              お客様のご要望に応じてWEBページを制作します。
            </p>
            <p>
              御社の強みや、特徴、押し出したいコンテンツをお伺いするのはもちろん、「何を目的でサイトを作るのか」「最終的な着地点はどこなのか」を確認することで、より御社に寄り添った提案を行います。
            </p>
            <p>
              言われたことをただ遂行するだけでなく、時には「本当にそれをやる意味があるのか」というお話をさせていただく場合も。
            </p>
            <p>
              弊社の強みが「本当に意味があるものを作る」ことだからこそ、お客様と対話を重ね、最適な見せ方を探っていきます。
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">保守サービス</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceMaintenance.jpg" alt="保守サービス" />
          </div>
          <div className="conText">
            <p>
              WEBサイトは、ブラウザのアップデート状況などにより影響がある場合があります。保守サポートでは、貴社サイトのデータを弊社で常時バックアップ。もしもシステム面で問題があった場合は随時対応いたします。
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">運用支援</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="運用支援" />
          </div>
          <div className="conText">
            <p>
              サイトは一度作って終わりではありません。会社の動きにあわせて、サイト自体もアップデートしていく必要があります。
            </p>
            <p>
              そのほか実績や、貴社の業務にまつわるノウハウ記事など、フックとなるコンテンツを蓄積することで、サービスを必要としているクライアント様との出会いのきっかけ作りのお手伝いをさせていただきます。
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">冊子・パンフレット作成</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/servicePamphlet.jpg" alt="冊子・パンフレット作成" />
          </div>
          <div className="conText">
            <p>
              企業広報で使用する冊子や、製品パンフレットなどの紙媒体の制作を行います。
            </p>
          </div>
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
