"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Contact from "@/components/contact";
import ProductSlider from "@/components/ProductSlider";
import { getRecentProducts, ProductPost } from "@/lib/microcms"; // ← ProductPost を追加

export default function Home() {
  // ↓ この1行を追加して未定義エラーを防ぐ
  const [productPosts, setProductPosts] = useState<ProductPost[]>([]);
  
  useEffect(() => {
    // メインビジュアルロゴアニメーションの発火のみ（トップページ専用）
    const logoArea = document.querySelector(".mvLogoArea");
    if (logoArea) {
      logoArea.classList.add("js-on");
    }

    // ↓ 事例データを取得してスライダーにセットする処理を追加
    getRecentProducts(8).then((res) => {
      setProductPosts(res.contents);
    });
    
  }, []);

  // 白帯のアニメーション設定
  const barAnimation = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        duration: 1.3,
        delay: 0.8,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.3,
        ease: "easeInOut",
      },
    },
  };

  const svgStyle = {
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: 35,
    strokeMiterlimit: 10,
  };

  return (
    <main className="home">
      {/* メインビジュアル */}
      <section className="scMv" style={{ display: "block" }}>
        <div className="mvWrap">
          <div className="passing-box titleArea">
            <h2 className="mvTitle">
              <div
                className="mv-passing-bar"
                style={{
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={barAnimation}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    zIndex: 2,
                  }}
                />
                <motion.span
                  className="mv-passing-txt"
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  style={{ position: "relative", zIndex: 1, display: "block" }}
                >
                  ワザワザやる
                </motion.span>
              </div>

              <br />

              <div
                className="mv-passing-bar"
                style={{
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                  marginTop: "1rem",
                }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={barAnimation}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#fff",
                    zIndex: 2,
                  }}
                />
                <motion.span
                  className="mv-passing-txt"
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  style={{ position: "relative", zIndex: 1, display: "block" }}
                >
                  ワクワクする
                </motion.span>
              </div>
            </h2>
          </div>

          <div className="mvLogoArea">
            <div className="logoLeft">
              <svg version="1.1" viewBox="0 0 484.5 232.9">
                <g>
                  <polyline
                    style={svgStyle}
                    className="st0 leftPath"
                    points="18.1,125.8 102.6,210.9 191.9,121.2 280.6,210.9 468.6,22"
                  />
                </g>
              </svg>
            </div>
            <div className="logoRight">
              <svg version="1.1" viewBox="0 0 365.1 142">
                <g>
                  <polyline
                    style={svgStyle}
                    className="st0 rightPath"
                    points="351.5,30.5 268.5,115.5 178.5,25.5 89.5,115.5 13,38.5"
                  />
                </g>
              </svg>
            </div>
            <svg
              className="logoLeftSp"
              version="1.1"
              viewBox="0 0 1406.5 232.9"
            >
              <g>
                <path
                  style={svgStyle}
                  className="st0 leftPath"
                  d="M0,124.9L940.1,125.8L1024.6,210.9L1113.9,121.2L1202.6,210.9L1390.6,22"
                ></path>
              </g>
            </svg>
            <svg
              className="logoRightSp"
              version="1.1"
              viewBox="0 0 1326.8 142"
            >
              <g>
                <path
                  style={svgStyle}
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

      {/* service */}
      <section className="scService">
        <div className="wrap">
          <div className="serviceWrap">
            <div className="serviceImg js-fadeUp">
              <img src="/img/serviceImg.jpg" alt="" />
            </div>

            <div className="serviceText">
              <h3 className="scTitle">
                <span className="num">02</span>
                <span className="en">SERVICE</span>
                <span className="jp">できること</span>
              </h3>

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

        {/* 事例スライダーエリア */}
        <ProductSlider posts={productPosts} />

        <p className="btn">
          <Link href="/product/">他の事例をみる</Link>
        </p>
      </section>

      <Contact />
    </main>
  );
}
