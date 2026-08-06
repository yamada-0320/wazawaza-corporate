"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Product } from "@/lib/microcms";

// Swiper基本スタイルの読み込み
import "swiper/css";

type Props = {
  posts: Product[];
};

export default function ProductSlider({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <p className="empty_list">事例はありません</p>;
  }

  // ループ動作を安定させるため、投稿数が少ない場合は配列を複製
  const displayPosts =
    posts.length < 6 ? [...posts, ...posts, ...posts] : posts;

  return (
    <div className="productSider" style={{ width: "100%", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1.3}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3.2, // 表示数を抑えて画像を大きく表示
            centeredSlides: false,
          },
        }}
        style={{ width: "100%", padding: "10px 0" }}
      >
        {displayPosts.map((item, index) => {
          const thumb =
            item.thumbnail?.url || "/assets/img/common/no_image.jpg";
          return (
            <SwiperSlide key={`${item.id}-${index}`}>
              <Link
                href={`/product/detail/?id=${item.id}`}
                className="sliderItem"
                style={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumb}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
