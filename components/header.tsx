"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 画面幅の監視（スマホ幅かどうかを判定）
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 834);
    };

    checkMobile(); // 初回チェック
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ハンバーガーメニューの開閉処理
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // メニュー内のリンクをクリックしたときに閉じる処理
  const closeMenu = () => {
    setIsOpen(false);
  };

  // スマホ時のみ isOpen に応じて display をインライン指定（PC時は undefined でCSSに任せる）
  const gnavStyle = isMobile
    ? { display: isOpen ? "block" : "none" }
    : undefined;

  return (
    <>
      <header>
        <div className={`headerWrap ${isOpen ? "bgBlack" : ""}`}>
          <h1 className="siteLogo">
            <Link href="/">
              <img src="/img/logo.svg" alt=" WAZAWAZA" />
            </Link>
          </h1>

          <nav
            className={`gnav ${isOpen ? "js-slide" : ""}`}
            style={gnavStyle}
          >
            <ul className="gnavMenu">
              <li>
                <Link href="/service/" onClick={closeMenu}>
                  Service
                </Link>
              </li>
              <li>
                <Link href="/product/" onClick={closeMenu}>
                  Product
                </Link>
              </li>
              <li>
                <Link href="/info/" onClick={closeMenu}>
                  Information
                </Link>
              </li>
              <li>
                <Link href="/news/" onClick={closeMenu}>
                  News
                </Link>
              </li>
              <li>
                <Link href="/blog/" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/line/" onClick={closeMenu}>
                  Line
                </Link>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/wazawaza.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="snsLink"
            >
              <img src="/img/instaIcon.svg" alt="" />
              <span>Instagram</span>
            </a>
          </nav>

          <p
            className={`hamburgerMenu ${isOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      </header>

      <div className="spFloat">
        <ul>
          <li>
            <Link href="/product/">事例を見る</Link>
          </li>
          <li>
            <Link href="/#contact">お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
