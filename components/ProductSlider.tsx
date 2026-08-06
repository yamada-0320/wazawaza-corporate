"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Product } from "@/lib/microcms";

// Swiperの標準CSSを読み込み
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  posts: Product[];
};

export default function ProductSlider({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <p className="empty_list">事例はありません</p>;
  }

  return (
    <div className="productSider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        style={{ width: "100%", paddingBottom: "20px" }}
      >
        {posts.map((item) => {
          const thumb =
            item.thumbnail?.url || "/assets/img/common/no_image.jpg";
          return (
            <SwiperSlide key={item.id}>
              <Link
                href={`/product/detail/?id=${item.id}`}
                className="sliderItem"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb} alt={item.title} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
