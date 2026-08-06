import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Product = {
  id: string;
  title: string;
  catch_phrase?: string;
  content?: string;
  thumbnail?: {
    url: string;
  };
  main_image?: {
    url: string;
  };
  detail_img1?: {
    url: string;
  };
  detail_img2?: {
    url: string;
  };
  items?: string[];
  publishedAt?: string;
};

// 一覧取得
export async function getProducts(limit = 6, offset = 0) {
  return await client.getList<Product>({
    endpoint: "products",
    queries: {
      limit,
      offset,
      orders: "-publishedAt",
    },
  });
}

// 単一詳細取得
export async function getProductDetail(contentId: string) {
  try {
    return await client.getListDetail<Product>({
      endpoint: "products",
      contentId,
    });
  } catch {
    return null;
  }
}

// 最新4件取得（「他の事例を見る」用）
export async function getRecentProducts(limit = 4) {
  return await client.getList<Product>({
    endpoint: "products",
    queries: {
      limit,
      orders: "-publishedAt",
    },
  });
}
