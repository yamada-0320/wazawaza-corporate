"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CommonEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // 画面遷移後・ロード後すぐにアニメーションクラスを即時適用
    const runAnimations = () => {
      // 1. トップページ メインビジュアル（scMv）の即時発火
      document.querySelectorAll(".mv-passing-bar").forEach((el) => {
        el.classList.add("on", "move");
      });
      document.querySelectorAll(".mvLogoArea").forEach((el) => {
        el.classList.add("js-on", "on");
      });

      // 2. passing-bar（黒帯アニメーション）の即時判定・発火
      document.querySelectorAll(".passing-bar").forEach((el) => {
        el.classList.add("move");
      });

      // 3. 1文字ずつの<span>分割 ＆ タイトル演出
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

      // 4. 表示領域内（または初期表示）のタイトルアニメーション即時実行
      document.querySelectorAll(".scTitle .en, .scTitle .jp").forEach((el) => {
        animateSpans(el, 60);
      });
      document
        .querySelectorAll(".pageHeadText h2 .en, .pageHeadText h2 .jp")
        .forEach((el) => {
          animateSpans(el, 80);
        });

      // 5. フェードイン要素
      document.querySelectorAll(".js-fadeUp").forEach((el) => {
        el.classList.add("on");
      });
    };

    // 即時実行 ＋ レンダリング完了後（50ms）にも再実行
    runAnimations();
    const timer = setTimeout(runAnimations, 50);

    // スムーススクロール処理
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

    return () => {
      clearTimeout(timer);
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick as EventListener)
      );
    };
  }, [pathname]);

  return null;
}
