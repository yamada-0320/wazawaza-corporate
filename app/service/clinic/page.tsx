import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title: "歯科医院のみなさまへ | サービス | 株式会社WAZAWAZA",
  description:
    "株式会社WAZAWAZAの歯科医院さま向けサービス（HP制作・保守・運用支援・ココシカ！等）紹介ページです。",
};

export default function ServiceClinicPage() {
  return (
    <main id="pageGeneral" className="pageService lowerPage">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">To DENTAL</span>
            <br />
            <span className="jp">歯科医院のみなさまへ</span>
          </h2>
          <p className="lead">
            「知っていたらここへ来たのに……」を本気でなくしたい。
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
              しっくりくる出会いを
              <br />
              創出する場を
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
            患者さんにとっても歯医者さんにとっても、出会いは一期一会。
            <br />
            とってもパーソナルなことだからこそ、
            <br />
            せっかくなら一番しっくりきて欲しい。
          </p>
          <p>
            十人十色の専門家たちの、誰が自分に合っているのか。
            <br />
            WAZAWAZAは、患者さん自身が自分に必要なことを見つけ、
            <br />
            それができる先生につながる環境をご提案します。
          </p>
          <p>「知っていたらここへ来たのに……」を本気でなくしたい。</p>
          <p>大切な出会いを創出するため、私たちは考え、動きます。</p>
        </div>
      </div>

      <section className="scPageContets ">
        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">歯科医院検索サイト「ココシカ！」運営</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/2b530e80c7d0de90885e285c5d798063-11.png"
              alt="ココシカ！"
            />
          </div>
          <div className="conText">
            <p>
              症例から歯科医院を探すことができる検索サイト「ココシカ！」を運営しています。歯科医院に症例情報を掲載する場所を提供することで、歯科医院にとっては「得意な治療を発信できる場」に、患者にとっては「口コミなどではなく実績で歯科医院を選ぶことができる場」になることを目指します。
            </p>
            <p className="btn">
              <Link href="/service/clinic/coco-sika/">
                詳しくサービス内容を読む
              </Link>
            </p>
          </div>
        </div>

        <div className="serviceContets length">
          <h4 className="conTitleBox">ホームページ制作</h4>
          <div className="conImg js-fadeUp">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceProduction.jpg" alt="WAZAWAZA" />
          </div>
          <div className="conText">
            <p>
              Q.ホームページは単なるサイト？
              <br />
              A.いいえ、患者さんとの貴重なコミュニケーションの場です。
            </p>
            <p>
              貴院の特徴や治療方針などをお伺いし、弊社でコンセプトの設定や、デザインの方向性などを提案。医院のブランディングにも大きく関わる部分なので、イメージを細かくすり合わせながら方向性を決定します。
            </p>
            <p>
              構成を決定した後、デザイン、テキストを制作します。
              <br />
              制作を進め、より医院の雰囲気が伝わるサイトを構築していきます。
              <br />
              必要な場合は写真撮影などにもご対応いたします。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">保守サービス</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceMaintenance.jpg" alt="保守サービス" />
          </div>
          <div className="conText">
            <p>
              サイトは、ブラウザのアップデート状況などにより影響がある場合があります。保守サポートでは、貴院のドメインと、サイトのデータを保管するためのサーバー管理を代行。更新やサーバートラブルなどにも、おまかせで即時対応するとともに、もしものときのデータバックアップもご用意しています。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">運用支援</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="運用支援" />
          </div>
          <div className="conText">
            <p>
              サイトは一度作って終わりではありません。情勢に合わせて貴院のサービスが少しずつアップデートされていくように、サイト自体もアップデートしていく必要があります。
              運用と一言で言っても様々。弊社では下記のサービスを提供しています。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">マーケティングコンサルテーション</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="マーケティングコンサルテーション" />
          </div>
          <div className="conText">
            <p>
              弊社では毎月のデータ取得とレポート化、解説のためのフォロー、ご状況をヒアリングした上でのマーケティングコンサルテーションをご提供いたします。現代医院経営に必要なWEBマーケティングのノウハウを、最新かつ貴院に合った形でご提案いたします。また他業者からのご提案の判定などもご相談いただけますので、不要な広告投資の判断に役立ちます。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">ブログ運営</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="ブログ運営" />
          </div>
          <div className="conText">
            <p>
              患者様にとって有益となる情報のアウトプットを奨励しており、過去に治療した症例を紹介する「症例ブログ」などの運用支援を行っています。またブログ運用について、なかなかご自身で記事作成するお時間がない方、自動でサイトに記事を入れていきたい方に向けて、ご指定のテーマに沿ってライターが調査し、毎月定期でコンテンツをアップするサービスも行っています。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">
            Googleマイビジネスページの管理監視の代行
          </h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="Googleマイビジネス管理監視代行" />
          </div>
          <div className="conText">
            <p>
              貴院のGoogleマイビジネスページの管理監視を代行します。貴院代表のGoogleアカウントでオーナー権限の維持を行い、外部の事業者に渡らないようにします。
              またページの取得から立ち上げ、お写真等の設定を実施。口コミ返信のご提案やお知らせ更新のご案内をサポート担当より行います。
            </p>
          </div>
        </div>

        <div className="serviceContets js-fadeUp">
          <h4 className="conTitleBox">リスティング</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/serviceSupport.jpg" alt="リスティング" />
          </div>
          <div className="conText">
            <p>
              Google、Yahooなどの媒体でできる広告配信のプランニング、配信管理を代行。事前に決定いただいたご予算内で配信を行い、常時専任の運用担当が不要なキーワードの除外など、配信の最適化を行います。ご自身では難しい、継続的な改善を行なう広告運用がおまかせでできます。
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
