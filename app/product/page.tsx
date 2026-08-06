import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/contact";
import { getProducts } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "実績紹介 | 株式会社WAZAWAZA",
  description: "株式会社WAZAWAZAの実績紹介ページです。",
};

// キャッシュ設定（60秒ごとに再生成）
export const revalidate = 60;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ProductPage({ searchParams }: Props) {
  const params = await searchParams;
  const paged = Number(params.page) || 1;
  const limit = 6;
  const offset = (paged - 1) * limit;

  // microCMSから事例データを取得
  const response = await getProducts(limit, offset);
  const posts = response.contents;
  const totalCount = response.totalCount;
  const maxPages = Math.ceil(totalCount / limit);

  return (
    <main id="pageProduct" className="pageProduct">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">PRODUCT</span>
            <br />
            <span className="jp">実績紹介</span>
          </h2>
        </div>
      </div>

      <section className="scPageContets">
        <div className="wrap">
          <div className="postList">
            {posts && posts.length > 0 ? (
              posts.map((post) => {
                const thumb = post.thumbnail?.url || "/assets/img/common/no_image.jpg";
                return (
                  <Link
                    key={post.id}
                    href={`/product/detail/?id=${post.id}`}
                    className="listItem"
                  >
                    <div className="itemImg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={thumb} alt={post.title} />
                    </div>
                    <div className="itemText">
                      <h4 className="productTitle">{post.title}</h4>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="empty_list">最新情報はありません</p>
            )}
          </div>

          {maxPages > 1 && (
            <nav className="navigation pagination" aria-label=" ">
              <h2 className="screen-reader-text"> </h2>
              <div className="nav-links">
                {paged > 1 && (
                  <Link
                    className="prev page-numbers"
                    href={`/product/?page=${paged - 1}`}
                  >
                    &lt;
                  </Link>
                )}

                {Array.from({ length: maxPages }, (_, i) => i + 1).map((i) =>
                  i === paged ? (
                    <span
                      key={i}
                      aria-current="page"
                      className="page-numbers current"
                    >
                      {i}
                    </span>
                  ) : (
                    <Link
                      key={i}
                      className="page-numbers"
                      href={`/product/?page=${i}`}
                    >
                      {i}
                    </Link>
                  )
                )}

                {paged < maxPages && (
                  <Link
                    className="next page-numbers"
                    href={`/product/?page=${paged + 1}`}
                  >
                    &gt;
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </section>

      <Contact />
    </main>
  );
}
