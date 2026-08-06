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

// Product 型
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

// Post (News / Blog) 型
export type Post = {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category?: string[] | string;
  thumbnail?: {
    url: string;
  };
  publishedAt: string;
};

/* --- Product 用関数 --- */
export async function getProducts(limit = 6, offset = 0) {
  return await client.getList<Product>({
    endpoint: "products",
    queries: { limit, offset, orders: "-publishedAt" },
  });
}

export async function getProductDetail(contentId: string) {
  try {
    return await client.getListDetail<Product>({ endpoint: "products", contentId });
  } catch {
    return null;
  }
}

export async function getRecentProducts(limit = 4) {
  return await client.getList<Product>({
    endpoint: "products",
    queries: { limit, orders: "-publishedAt" },
  });
}

/* --- News / Blog (posts) 用関数 --- */
export async function getPosts(categoryJp: string, limit = 6, offset = 0) {
  return await client.getList<Post>({
    endpoint: "posts",
    queries: {
      limit,
      offset,
      orders: "-publishedAt",
      filters: `category[contains]${categoryJp}`,
    },
  });
}

export async function getPostDetail(contentId: string) {
  try {
    return await client.getListDetail<Post>({
      endpoint: "posts",
      contentId,
    });
  } catch {
    return null;
  }
}

export async function getRecentPosts(categoryJp: string, limit = 3) {
  return await client.getList<Post>({
    endpoint: "posts",
    queries: {
      limit,
      orders: "-publishedAt",
      filters: `category[contains]${categoryJp}`,
    },
  });
}
