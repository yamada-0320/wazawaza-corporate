import { getRecentProducts } from "@/lib/microcms";
import ProductSliderClient from "./ProductSliderClient";

export default async function ProductSlider() {
  // サーバー側で安全に microCMS からデータを取りに行く
  const response = await getRecentProducts(8);
  const posts = response?.contents || [];

  // Swiperのアニメーション部分（Client）に取得したデータを渡す
  return <ProductSliderClient posts={posts} />;
}
