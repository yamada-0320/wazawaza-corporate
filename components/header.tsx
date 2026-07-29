import Link from "next/link";
import Image from "next/image";

export default function Header({ isTop = false }: { isTop?: boolean }) {
  return (
    <>
      <header id={isTop ? "homeHeader" : undefined}>
        <div className="headerWrap">
          <h1 className="siteLogo">
            <Link href="/">
              <img src="/img/logo.svg" alt="WAZAWAZA" />
            </Link>
          </h1>
          <nav className="gnav">
            <ul className="gnavMenu">
              <li>
                <Link href="/service/">Service</Link>
              </li>
              <li>
                <Link href="/product/">Product</Link>
              </li>
              <li>
                <Link href="/info/">Information</Link>
              </li>
              <li>
                <Link href="/news/">News</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link href="/line/">Line</Link>
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
          <p className="hamburgerMenu">
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
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>
      </div>
    </>
  );
}
