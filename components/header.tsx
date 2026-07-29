"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className={`headerWrap ${isOpen ? "bgBlack" : ""}`}>
        <h1 className="headerLogo">
          <Link href="/" onClick={closeMenu}>
            <img src="/img/logo.svg" alt="WAZAWAZA" />
          </Link>
        </h1>

        <nav className={`gnav ${isOpen ? "js-slide" : ""}`} style={{ display: isOpen ? "block" : "none" }}>
          <ul className="gnavNav">
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
            <li className="insta">
              <a href="https://www.instagram.com/wazawaza.inc" target="_blank" rel="noopener noreferrer">
                <img src="/img/iconInsta.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>

        {/* ハンバーガーボタン */}
        <div className={`hamburgerMenu ${isOpen ? "is-active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
