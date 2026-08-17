import type { Metadata } from "next";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";

export const metadata: Metadata = {
  title: "これまでよりも素早く、便利に | LINEご依頼窓口 | 株式会社WAZAWAZA",
  description: "株式会社WAZAWAZAのLINEご依頼窓口ページです。",
};

export default function LinePage() {
  return (
    <main id="pageGeneral" className="pageService lowerPage">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">FAST AND CONVENIENT</span>
            <br />
            <span className="jp">これまでよりも素早く、便利に</span>
          </h2>
          <p className="lead">LINEご依頼窓口</p>
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
            <span>素早く、便利に</span>
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
            いつもご利用ありがとうございます。
            <br />
            株式会社WAZAWAZAです。
          </p>
          <p>
            これまで以上に素早く正確な対応を実現するため、新たにLINEご依頼窓口を設置しました！
          </p>
          <p>
            あらゆるお客様が日常的にLINEをご利用されており、使い慣れた方法でご相談いただけるようにすることで、これまでよりも気軽にご利用いただきたいとの思いです。
          </p>
          <p>
            また作業内容の確認も素早く出来るため、早く正確なデリバリーを可能にします。
          </p>
          <p>
            このページではこれまで以上に簡単になるLINEを使ったご依頼の流れと、ご依頼内容の例について解説します。
          </p>
        </div>
      </div>

      <section className="scPageContets">
        <div className="serviceContets">
          <h4 className="conTitleBox">対象となるお客様</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/2021/10/LINE−1.png" alt="対象となるお客様" />
          </div>
          <div className="conText">
            <p>
              LINEご依頼窓口は、現在弊社において以下の
              <br />
              サービスのいずれかをご利用中の方が対象となります。
              <br />
            </p>
            <p>
              ・HP制作
              <br />
              ・コンサルティング
              <br />
              ・HP運用・保守
              <br />
              ・リスティング広告
              <br />
              ・解析
              <br />
              ・Googleマイビジネス管理サポート
              <br />
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">ご利用いただけるご依頼例</h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/2021/10/pixta_82304843_M.png" alt="ご依頼例" />
          </div>
          <div className="conText">
            <p>
              LINEご依頼窓口では次のようなご依頼を行うことができます。
            </p>
            <h5 className="smallTitle">HP・LPの加筆・修正</h5>
            <p>
              「HP・LPの文言を一部変更してほしい！」など、軽微な修正のご依頼ができます。変更されたい文章や画像などご用意いただき、ご依頼フォームから送信してください。
            </p>

            <h5 className="smallTitle">ブログ・お知らせの投稿</h5>
            <p>
              医院で作成されたお知らせやブログ記事の投稿をご依頼いただけます。投稿されたい文章と画像をフォームに添付して送信してください。
            </p>

            <h5 className="smallTitle">Googleマイビジネスの修正・更新</h5>
            <p>
              Googleマイビジネスに関する営業時間、お知らせの更新、画像の追加についてご依頼いただけます。更新されたい部分の文章や画像をフォームに添付して送信してください。
            </p>
            <p>
              ※作業内容が不明な場合、事務局よりLINEでご連絡させて頂く場合がございます。
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">
            このようなご相談は担当コンサルタントへ
          </h4>
          <div className="conImg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/2021/10/pixta_77664333_M.png" alt="ご相談" />
          </div>
          <div className="conText">
            <p>
              LINEご依頼窓口は作業に関するご依頼を目的としております。
              <br />
              そのため、事務局では作業のご依頼ではないご相談はお受けできません。
              <br />
              次のようなご相談については担当コンサルタントへ直接ご相談ください。
            </p>
            <p>
              ・記事の内容から相談したい
              <br />
              ・どの様に修正すべきかを相談したい
              <br />
              ・医療広告ガイドラインのチェックをお願いしたい
              <br />
              ・ページを新しくイチから作成したい
              <br />
              ・TOPページのメニューやボタンなど、レイアウト変更が伴う大きな修正が必要
              <br />
              ・今後のサイト運用についてアイデアがほしい
              <br />
              ・分析や解析をお願いしたい
              <br />
              ・他社のサービスについて導入すべきか相談したい
              <br />
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">まずは友達登録を！</h4>
          <div className="conText">
            <p>以下のボタン、またはQRコードから友達登録をしてください！</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://lin.ee/mGrW8tg" target="_blank" rel="noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="友だち追加"
                height="36"
                style={{ border: 0 }}
              />
            </a>
          </div>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uploads/2021/10/image8.jpg"
              alt="QRコード"
              width="250"
              height="250"
            />
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">ご利用画面の説明</h4>
          <div className="conText">
            <p>
              LINEご依頼窓口のご利用について、画面からご説明していきます。
            </p>
            <p>
              ①お友達登録＆医院名・ご担当者名送信
              <br />
              メッセージにて医院名とご担当者様名の送信をお願いいたします。
            </p>
            <div style={{ textAlign: "center", margin: "15px 0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2021/10/image3.jpg"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2021/10/image5.jpg"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
            </div>

            <p>
              ②フォームからご依頼
              <br />
              下部にある「ご依頼フォーム」をクリックすると、フォーム画面に遷移します。
            </p>
            <div style={{ textAlign: "center", margin: "15px 0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2024/04/image4-1.webp"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2021/10/image7.jpg"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2021/10/image2.jpg"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
            </div>

            <p>
              ③情報を入力して送信
              <br />
              各種必要情報をご入力の上送信します。
              <br />
              ご入力頂いた内容は作業チームへと送られ、順次作業開始となります。
              <br />
              添付ファイルについては一つあたり10MBまでとなっておりますので、大きなサイズのファイルをお送りになる際は、ギガファイル便などファイル共有サービスをご利用くださせ。
            </p>
            <div style={{ textAlign: "center", margin: "15px 0" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/2021/10/image6.jpg"
                width="300"
                alt=""
                style={{ border: "solid 2px #F30100", margin: "5px" }}
              />
            </div>

            <p>
              ④必要に応じ担当からご連絡
              <br />
              修正内容について作業担当より確認が入る場合がございます。
              <br />
              その際は、ご確認・ご回答をよろしくお願いいたします。
            </p>

            <p>
              ⑤作業完了のご報告
              <br />
              作業が完了しましたら担当よりご報告いたしますので、ご確認くださいませ！
            </p>
          </div>
        </div>

        <div className="serviceContets">
          <h4 className="conTitleBox">
            ご不明な点は担当コンサルタント・または弊社事務局まで！
          </h4>
          <div className="conText">
            <p>
              LINEをご依頼フォームのご利用に際してご不明な点がございましたら、
              <br />
              貴院担当コンサルタント、または弊社事務局(050-8890-3551)までご連絡ください！
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
