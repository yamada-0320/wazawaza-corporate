"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CommonEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. タイトルテキストの1文字ずつ<span>分割処理
    const titleTargets = document.querySelectorAll(
      ".scTitle .en, .scTitle .jp, .pageHeadText h2 .en, .pageHeadText h2 .jp"
    );

    titleTargets.forEach((el) => {
      if (!el.classList.contains("js-split")) {
        const text = el.textContent || "";
        el.innerHTML = text
          .split("")
          .map((char) => (char.trim() === "" ? " " : `<span>${char}</span>`))
          .join("");
        el.classList.add("js-split");
      }
    });

    // 2. 文字アニメーション関数
    const animateSpans = (el: Element, speed: number) => {
      if (el.classList.contains("js-animated")) return;
      el.classList.add("js-animated");
      const spans = el.querySelectorAll("span");
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("active");
        }, index * speed);
      });
    };

    // 3. スクロール ＆ ロード時判定（passing-bar, フェードイン, 文字演出）
    const handleScrollAndLoad = () => {
      const windowHeight = window.innerHeight;
      const scroll = window.scrollY;

      document
        .querySelectorAll(".pageHeadText h2 .en, .pageHeadText h2 .jp")
        .forEach((el) => {
          animateSpans(el, 100);
        });

      // passing-bar
      document.querySelectorAll(".passing-bar").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const imgPos = rect.top + scroll;
        if (scroll > imgPos - windowHeight + windowHeight / 4) {
          el.classList.add("move");
        }
      });

      // scTitle (.en, .jp)
      document.querySelectorAll(".scTitle .en, .scTitle .jp").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elemPos = rect.top + scroll;
        if (scroll > elemPos - windowHeight + 70) {
          animateSpans(el, 60);
        }
      });

      // js-fadeUp
      document.querySelectorAll(".js-fadeUp").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elemPos = rect.top + scroll;
        if (scroll > elemPos - windowHeight + 80) {
          el.classList.add("on");
        }
      });

      // spFloat (800pxスクロールで表示制御)
      const spFloat = document.querySelector(".spFloat") as HTMLElement;
      if (spFloat) {
        if (scroll > 800) {
          spFloat.style.display = "block";
          spFloat.style.opacity = "1";
        } else {
          spFloat.style.display = "none";
          spFloat.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScrollAndLoad);

    // 50ms後に初回アニメーション判定を実行（span分割完了待ち）
    const timer = setTimeout(() => {
      handleScrollAndLoad();
    }, 50);

    // 4. 同一ページ内のスムーススクロール処理
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && (href.startsWith("#") || href.includes("/#"))) {
        const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
        if (!hash || hash === "#") return;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          e.preventDefault();
          const isDesktop = window.innerWidth > 834;
          const headerOffset = isDesktop ? 140 : 60;
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // モバイルメニューが開いている場合のクローズ処理
          const headerWrap = document.querySelector(".headerWrap");
          if (headerWrap && headerWrap.classList.contains("bgBlack")) {
            headerWrap.classList.remove("bgBlack");
            const gnav = document.querySelector(".gnav");
            if (gnav) {
              gnav.classList.remove("js-slide");
            }
            const hamburger = document.querySelector(".hamburgerMenu");
            if (hamburger) {
              hamburger.classList.remove("is-active");
            }
          }

          history.pushState(null, "", hash);
        }
      }
    };

    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) =>
      link.addEventListener("click", handleAnchorClick as EventListener)
    );

    // 5. 内部リンク別ページ（URLにハッシュが含まれる場合の着地処理）
    if (window.location.hash) {
      const urlHash = window.location.hash;
      window.scrollTo(0, 0);
      setTimeout(() => {
        const target = document.querySelector(urlHash);
        if (target) {
          const isSp = window.matchMedia("(max-width: 639px)").matches;
          const headerOffset = isSp ? 70 : 140;
          const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;
          window.scrollTo({
            top: position,
            behavior: "smooth",
          });
        }
      }, 100);
    }

    // クリーンアップ関数
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScrollAndLoad);
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick as EventListener)
      );
    };
  }, [pathname]);

  return null;
}
