import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="headerWrap">
        <h1 className="headerLogo">
          <Link href="/">
            <img src="/img/logo.svg" alt="WAZAWAZA" />
          </Link>
        </h1>

        <nav className="gnav">
          <ul className="gnavNav">
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
              <Link href="/#contact">Contact</Link>
            </li>
            <li>
              <Link href="/line/">Line</Link>
            </li>
            <li className="insta">
              <a
                href="https://www.instagram.com/wazawaza.inc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/iconInsta.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>

        {/* ハンバーガーボタン */}
        <div className="hamburgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
