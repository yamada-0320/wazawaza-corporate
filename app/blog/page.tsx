import Link from "next/link";
import Contact from "@/components/contact";
import { getPosts } from "@/lib/microcms";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  // クエリパラメータからページ番号を取得（デフォルトは 1）
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const limit = 6;
  const offset = (currentPage - 1) * limit;

  // microCMSから「ブログ」カテゴリの投稿のみを取得
  const response = await getPosts({
    limit,
    offset,
    filters: "category[contains]ブログ",
  });

  const posts = response?.contents || [];
  const totalCount = response?.totalCount || 0;
  const maxPages = Math.ceil(totalCount / limit);

  return (
    <main id="pageNews" className="pageNews">
      <div className="PageHead">
        <div className="pageHeadText">
          <h2>
            <span className="en">BLOG</span>
            <br />
            <span className="jp">ブログ</span>
          </h2>
        </div>
      </div>

      <section className="scPageContets">
        <div className="wrap">
          <div className="archive-list">
            {posts.length > 0 ? (
              posts.map((post) => {
                // 日付の整形 (例: 2024.01.01)
                const date = post.publishedAt
                  ? new Date(post.publishedAt)
                      .toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\//g, ".")
                  : "";

                // 本文からタグを除去して抜粋を作成
                const rawContent = post.content || "";
                const cleanText = rawContent.replace(/<[^>]*>?/gm, "");
                const excerpt =
                  cleanText.length > 120
                    ? cleanText.substring(0, 120) + "..."
                    : cleanText;

                return (
                  <div key={post.id} className="arichive-list-item">
                    <Link href={`/blog/detail/?id=${post.id}`}>
                      <h3>{post.title}</h3>
                      <p className="time">{date}</p>

                      {post.thumbnail?.url && (
                        <div className="figure">
                          <div className="img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={post.thumbnail.url} alt={post.title} />
                          </div>
                        </div>
                      )}

                      <div className="excerpt">{excerpt}</div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>現在、投稿はありません。</p>
            )}
          </div>

          {/* ページネーション */}
          {maxPages > 1 && (
            <nav className="navigation pagination">
              <div className="nav-links">
                {Array.from({ length: maxPages }, (_, i) => i + 1).map(
                  (pageNum) => {
                    if (pageNum === currentPage) {
                      return (
                        <span
                          key={pageNum}
                          aria-current="page"
                          className="page-numbers current"
                        >
                          {pageNum}
                        </span>
                      );
                    }
                    return (
                      <Link
                        key={pageNum}
                        className="page-numbers"
                        href={`/blog/?page=${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    );
                  }
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
