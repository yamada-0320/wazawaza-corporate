"use client";

import { motion } from "framer-motion";

export default function MvTitle() {
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

  return (
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
  );
}
