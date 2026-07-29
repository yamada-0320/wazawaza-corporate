import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footerInner">
        <h1 className="siteLogo">
          <Link href="/">
            <img src="/img/logo.svg" alt="WAZAWAZA" />
          </Link>
        </h1>

        <ul className="footerLink">
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
      </div>
      <p className="copyright">
        <small>Copyright Wazawaza All Rights Reserved.</small>
      </p>
    </footer>
  );
}
