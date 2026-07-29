"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // 1. トップページのMV/ロゴアニメーション用クラス付与
    const logoArea = document.querySelector(".mvLogoArea");
    if (logoArea) {
      logoArea.classList.add("js-on");
    }

    const titleArea = document.querySelector(".titleArea");
    if (titleArea) {
      titleArea.classList.add("move");
    }

    // 2. スクロール時の要素フェードイン（js-fadeUp など）
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
    <main>
      {/* メインビジュアル */}
      <section className="scMv" style={{ display: "block" }}>
        <div className="mvWrap">
          <div className="mvTitle">
            <div className="titleArea">
              <div className="mv-passing-box">
                <div className="mv-passing-bar">
                  <span className="mv-passing-txt">WHY WHY</span>
                </div>
              </div>
              <div className="mv-passing-box">
                <div className="mv-passing-bar">
                  <span className="mv-passing-txt">WAZAWAZA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mvLogoArea">
            <div className="logoLeft">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 484.5 232.9"
                xmlSpace="preserve"
              >
                <path
                  className="leftPath"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="18"
                  strokeMiterlimit="10"
                  d="M10.1,10.2l111,212.5l115.8-212.5l112,212.5L474.3,10.2"
                />
              </svg>
            </div>
            <div className="logoRight">
              <svg
                version="1.1"
                id="レイヤー_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 365.1 142"
                xmlSpace="preserve"
              >
                <path
                  className="rightPath"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="18"
                  strokeMiterlimit="10"
                  d="M10.2,131.8L121.2,10.2l112,121.6L355,10.2"
                />
              </svg>
            </div>
            <p className="logoText">
              <img src="/img/mvText.svg" alt="WAZAWAZA" />
            </p>
          </div>
        </div>
      </section>

      {/* 01 ABOUT 自己紹介 */}
      <section className="scAbout wrap">
        <div className="scTitle js-fadeUp">
          <span className="num">01</span>
          <span className="en">ABOUT</span>
          <span className="jp">自己紹介</span>
        </div>
        <div className="aboutText js-fadeUp">
          <p>
            たまたま、でもなく。
            <br />
            なんとなく、でもなく。
            <br />
            わざわざ、訪れたくなる。
            <br className="u-sp" />
            体験したくなる。
          </p>
          <p>
            わざわざ、対話を重ねて。
            <br />
            手間ひまかけて。
            <br />
            大抵のことがテクノロジーで
            <br />
            解決できてしまう時代に、
            <br />
            あえてヒューマンな関わり合いを
            <br />
            大切にしながらお客様の成功まで
            <br />
            伴走していきたい。
          </p>
        </div>
      </section>

      {/* 中間キャッチ */}
      <div className="bgArea js-fadeUp">
        <h2 className="bgTitle">ITは人の手で作る</h2>
      </div>

      {/* 02 SERVICE */}
      <section className="scService">
        <div className="wrap">
          <div className="serviceText js-fadeUp">
            <div className="scTitle">
              <span className="num">02</span>
              <span className="en">SERVICE</span>
              <span className="jp">できること</span>
            </div>
            <p className="lead">
              技ｘ技 自分たちの特技や
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
          <div className="serviceImg js-fadeUp">
            <img src="/img/serviceImg.jpg" alt="SERVICE" />
          </div>
        </div>
      </section>

      {/* 03 PRODUCT */}
      <section className="scProduct">
        <div className="wrap js-fadeUp">
          <div className="productText">
            <div className="scTitle">
              <span className="num">03</span>
              <span className="en">PRODUCT</span>
              <span className="jp">つくったもの</span>
            </div>
            <p className="leed">
              ワイワイ、賑わう医院や店舗を。
              <br />
              ワザワザ、世の中を揺さぶるものを。
              <br />
              ワクワク、期待せずにはいられない未来を。
              <br />
              WAZAWAZAとぜひご一緒に。
            </p>
          </div>
        </div>
        <div className="productSider js-fadeUp">
          <div className="sliderItem">
            <img src="/img/mv.jpg" alt="事例" />
          </div>
        </div>
        <p className="btn js-fadeUp">
          <Link href="/product/">他の事例をみる</Link>
        </p>
      </section>
    </main>
  );
}
