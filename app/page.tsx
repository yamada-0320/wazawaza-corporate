"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // 1. メインビジュアルのアニメーション発火用クラス
    const logoArea = document.querySelector(".mvLogoArea");
    if (logoArea) logoArea.classList.add("js-on");

    const titleArea = document.querySelector(".titleArea");
    if (titleArea) titleArea.classList.add("move");

    // 2. スクロール時の要素アニメーション発火用クラス
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on", "active", "move");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(
      ".js-fadeUp, .scTitle .en span, .scTitle .jp span, .passing-bar"
    );
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">
      <section className="scMv">
        <div className="mvWrap">
          <div className="passing-box titleArea">
            <h2 className="mvTitle">
              <span className="mv-passing-bar">
                <span className="mv-passing-txt">ワザワザやる</span>
              </span>
              <span className="mv-passing-bar">
                <span className="mv-passing-txt">ワクワクする</span>
              </span>
            </h2>
          </div>

          <div className="mvLogoArea">
            <div className="logoLeft">
              <svg
                version="1.1"
                id="レイヤー_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 484.5 232.9"
                xmlSpace="preserve"
              >
                <style type="text/css">
                  {`.st0{fill:none;stroke:#FFFFFF;stroke-width:35;stroke-miterlimit:10;}`}
                </style>
                <g>
                  <polyline
                    className="st0 leftPath"
                    points="18.1,125.8 102.6,210.9 191.9,121.2 280.6,210.9 468.6,22"
                  />
                </g>
              </svg>
            </div>

            <div className="logoRight">
              <svg
                version="1.1"
                id="レイヤー_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 365.1 142"
                xmlSpace="preserve"
              >
                <style type="text/css">
                  {`.st0{fill:none;stroke:#FFFFFF;stroke-width:35;stroke-miterlimit:10;}`}
                </style>
                <g>
                  <polyline
                    className="st0 rightPath"
                    points="351.5,30.5 268.5,115.5 178.5,25.5 89.5,115.5 13,38.5"
                  />
                </g>
              </svg>
            </div>

            <svg
              className="logoLeftSp"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1406.5 232.9"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st0{fill:none;stroke:#FFFFFF;stroke-width:35;stroke-miterlimit:10;}`}
              </style>
              <g>
                <path
                  className="st0 leftPath"
                  d="M0,124.9L940.1,125.8L1024.6,210.9L1113.9,121.2L1202.6,210.9L1390.6,22"
                ></path>
              </g>
            </svg>

            <svg
              className="logoRightSp"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1326.8 142"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st0{fill:none;stroke:#FFFFFF;stroke-width:35;stroke-miterlimit:10;}`}
              </style>
              <g>
                <path
                  className="st0 rightPath"
                  d="M1326.8,29.5L351.5,30.5L268.5,115.5L178.5,25.5L89.5,115.5L13,38.5"
                ></path>
              </g>
            </svg>

            <p className="logoText">
              <img src="/img/logoText.svg" alt="" />
            </p>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="scAbout">
        <div className="wrap">
          <h3 className="scTitle">
            <span className="num">01</span>
            <span className="en">ABOUT</span>
            <span className="jp">自己紹介</span>
          </h3>
          <div className="aboutText">
            <p>
              たまたま、でもなく。
              <br />
              なんとなく、でもなく。
              <br />
              <span className="passing-bar">
                <span className="passing-txt">わざわざ</span>
              </span>
              、訪れたくなる。
              <br className="u-sp" />
              体験したくなる。
            </p>
            <p>
              わざわざ、
              <br />
              対話を重ねて。手間ひまかけて。
              <br />
              大抵のことがテクノロジーで
              <br />
              解決できてしまう時代に、
              <br />
              あえて
              <span className="passing-bar">
                <span className="passing-txt">ヒューマンな関わり合い</span>
              </span>
              を<br />
              大切にしながら
              <br />
              お客様の成功まで伴走していきたい。
            </p>
          </div>
        </div>
      </section>

      <section className="bgArea">
        <h3 className="bgTitle">ITは人の手で作る</h3>
      </section>

      <section className="scService">
        <div className="wrap">
          <div className="serviceText">
            <h3 className="scTitle">
              <span className="num">02</span>
              <span className="en">SERVICE</span>
              <span className="jp">できること</span>
            </h3>

            <div className="serviceImg js-fadeUp">
              <img src="/img/serviceImg.jpg" alt="" />
            </div>

            <p className="lead">
              <span className="passing-bar">
                <span className="passing-txt">技ｘ技</span>
              </span>
              <br />
              自分たちの特技や
              <br />
              ノウハウだけに閉じこもらず、
              <br />
              世の中の様々な人や組織が持つ
              <br />
              技能を掛け合わせ、混ぜ合わせることで、
              <br />
              前例のないサービスを創造したい。
            </p>

            <p className="btn">
              <Link href="/service/">詳しくサービス内容を読む</Link>
            </p>
          </div>
        </div>
      </section>

      {/* product */}
      <section className="scProduct">
        <div className="wrap">
          <div className="productText">
            <h3 className="scTitle">
              <span className="num">03</span>
              <span className="en">PRODUCT</span>
              <span className="jp">つくったもの</span>
            </h3>
            <p className="leed">
              ワイワイ、賑わう医院や店舗を。
              <br />
              ワザワザ、世の中を揺さぶるものを。
              <br />
              <span className="passing-bar">
                <span className="passing-txt">
                  ワクワク、期待せずにはいられない未来を。
                </span>
              </span>
              <br />
              WAZAWAZAとぜひご一緒に。
            </p>
          </div>
        </div>

        {/* スライダー */}
        <div className="productSider">
          <p className="empty_list">事例はありません</p>
        </div>

        <p className="btn">
          <Link href="/product/">他の事例をみる</Link>
        </p>
      </section>

      {/* contact */}
      <section className="scContact" id="contact">
        <div className="wrap">
          <div className="contactText">
            <h3 className="scTitle">
              {/* <span className="num">05</span> */}
              <span className="en">CONTACT</span>
              <span className="jp">ワザワザ連絡してみる</span>
            </h3>
            <p className="lead">
              こんなことやってみたい、こんな悩みがある。
              <br />
              一緒に考えさせて下さい。
              <br />
              きっと答えが見つかるはずです。
            </p>
          </div>
          <div className="formArea">
            <div className="inquiry">
              <form action="" method="POST">
                {/* 御社名 */}
                <dl>
                  <dt>
                    <p>御社名*</p>
                  </dt>
                  <dd>
                    <p>
                      <input
                        size={40}
                        maxLength={400}
                        type="text"
                        name="your-company"
                        placeholder="入力してください"
                        defaultValue=""
                        required
                      />
                    </p>
                  </dd>
                </dl>

                {/* 御社webサイトURL */}
                <dl>
                  <dt>
                    <p>御社webサイトURL</p>
                  </dt>
                  <dd>
                    <p>
                      <input
                        size={40}
                        maxLength={400}
                        type="text"
                        name="your-url"
                        placeholder="入力してください"
                        defaultValue=""
                      />
                    </p>
                  </dd>
                </dl>

                {/* ご担当者の お名前 */}
                <dl>
                  <dt>
                    <p>
                      ご担当者の
                      <br />
                      お名前*
                    </p>
                  </dt>
                  <dd>
                    <p>
                      <input
                        size={40}
                        maxLength={400}
                        type="text"
                        name="your-name"
                        placeholder="入力してください"
                        defaultValue=""
                        required
                      />
                    </p>
                  </dd>
                </dl>

                {/* メールアドレス */}
                <dl>
                  <dt>
                    <p>メールアドレス*</p>
                  </dt>
                  <dd>
                    <p>
                      <input
                        size={40}
                        maxLength={400}
                        type="email"
                        name="your-email"
                        placeholder="入力してください"
                        defaultValue=""
                        required
                      />
                    </p>
                  </dd>
                </dl>

                {/* お電話番号 */}
                <dl>
                  <dt>
                    <p>お電話番号*</p>
                  </dt>
                  <dd>
                    <p>
                      <input
                        size={40}
                        maxLength={400}
                        type="tel"
                        name="your-tel"
                        placeholder="入力してください"
                        defaultValue=""
                        required
                      />
                    </p>
                  </dd>
                </dl>

                {/* お問い合わせ概要 */}
                <dl className="textArea">
                  <dt>
                    <p>お問い合わせ概要*</p>
                  </dt>
                  <dd>
                    <p>
                      <label>
                        <input
                          type="radio"
                          name="type"
                          value="SES事業部 協業、情報交換に関して"
                          required
                        />
                        <span>SES事業部 協業、情報交換に関して</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="type"
                          value="マーケティング、HP制作、運用保守に関してのご依頼"
                        />
                        <span>
                          マーケティング、HP制作、運用保守に関してのご依頼
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="type"
                          value="ココシカ!について"
                        />
                        <span>ココシカ!について</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="type"
                          value="採用、求人について"
                        />
                        <span>採用、求人について</span>
                      </label>
                      <label>
                        <input type="radio" name="type" value="その他" />
                        <span>その他</span>
                      </label>
                    </p>
                  </dd>
                </dl>

                {/* お問い合わせ内容 */}
                <dl className="textArea">
                  <dt>
                    <p>お問い合わせ内容*</p>
                  </dt>
                  <dd>
                    <p>
                      <textarea
                        cols={40}
                        rows={10}
                        maxLength={2000}
                        name="your-message"
                        placeholder="入力してください"
                        required
                      ></textarea>
                    </p>
                  </dd>
                </dl>

                {/* 送信ボタン */}
                <p className="submitBtn">
                  <input type="submit" value="ワザワザ送信する" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
