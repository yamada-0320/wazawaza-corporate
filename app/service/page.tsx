import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title: "ワザワザができること | 株式会社WAZAWAZA",
  description: "株式会社WAZAWAZAのサービス一覧ページです。",
};

export default function ServicePage() {
  return (
    <main id="pageService" className="pageService">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">SERVICE</span>
            <br />
            <span className="jp">ワザワザができること</span>
          </h2>
          <p className="lead">
            <span className="passing-bar">
              <span className="passing-txt">「できる」</span>
            </span>
            と{" "}
            <span className="passing-bar">
              <span className="passing-txt">「ほしい」</span>
            </span>
            が繋がれば
            <br />
            小さな
            <span className="passing-bar">
              <span className="passing-txt">「幸せ」</span>
            </span>
            がもっと増えるはず
          </p>
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
              ヒトとヒトとを、
              <br />
              ワザとワザで
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
          <p>
            株式会社WAZAWAZAはあらゆる情報、物の流通を
            <br className="no-sp" />
            ヒトとヒトのコミュニケーションだと捉えています。
            <br />
            そこには必ず誰かに価値あるヒトがいて、
            <br className="no-sp" />
            それを伝えたいヒトがいて、それを欲しいヒトがいる。
            <br />
            ただ、情報が溢れコミュニケーションが手軽になった現代において、
            <br className="no-sp" />
            そのコミュニケーションはあまりにも軽薄に、
            <br className="no-sp" />
            定型的に、そして時には欺瞞に満ちています。
            <br />
            WAZAWAZAは、こうした情報の波の中で
            <br className="no-sp" />
            本当に光を当てるべき価値を、それを必要とするヒトに届ける。
            <br />
            「もっと早く出会ってたら 」を無くすため、
            <br className="no-sp" />
            WAZAWAZAは日本全国どこでもワザワザ飛び回ります。
          </p>
        </div>
      </div>

      <section className="scPageContets">
        <div className="serviceContets">
          <h4 className="conTitle">
            <span className="en">To anyone</span>
            <span className="jp">自分のビジネスでお悩みのあるみなさまへ</span>
          </h4>
          <div className="fBox">
            <div className="fBoxImg js-fadeUp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/serviceImg1.jpg" alt="WAZAWAZA" />
            </div>
            <div className="fBoxText">
              <p>
                然るべき人に然るべきサービスを届けるために、最適なコンテンツと、ソリューションを提供いたします。
              </p>
              <p className="btn">
                <Link href="/service/general/">詳しくサービス内容を読む</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitle">
            <span className="en">To dental clinic</span>
            <span className="jp">歯科医院のみなさまへ</span>
          </h4>
          <div className="fBox">
            <div className="fBoxImg js-fadeUp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/serviceImg2.jpg" alt="WAZAWAZA" />
            </div>
            <div className="fBoxText">
              <p>
                「知っていたらここへ来たのに……」を本気でなくしたい。大切な機会をいちばんにするため、私たちは考え、動きます。
              </p>
              <p className="btn">
                <Link href="/service/clinic/">詳しくサービス内容を読む</Link>
              </p>
            </div>
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
