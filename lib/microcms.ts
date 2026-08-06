import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// microCMSクライアント作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 型定義
export type Product = {
  id: string;
  title: string;
  thumbnail?: {
    url: string;
  };
  publishedAt?: string;
};

// 記事一覧取得用関数
export async function getProducts(limit = 6, offset = 0) {
  const response = await client.getList<Product>({
    endpoint: "products",
    queries: {
      limit,
      offset,
      orders: "-publishedAt",
    },
  });
  return response;
}
