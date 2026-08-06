import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/contact";
import { getPosts } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ 一覧 | 株式会社WAZAWAZA",
  description: "株式会社WAZAWAZAのお知らせ一覧ページです。",
};

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

// 日付フォーマット関数 (YYYY.MM.DD)
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

// HTMLタグ除去 & 文字数制限関数
function stripTagsAndTruncate(html: string, maxLength = 120) {
  const cleanText = html.replace(/<[^>]*>/g, "");
  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.slice(0, maxLength) + "...";
}

export default async function NewsPage({ searchParams }: Props) {
  const params = await searchParams;
  const paged = Number(params.page) || 1;
  const limit = 6;
  const offset = (paged - 1) * limit;

  // microCMSから「お知らせ」カテゴリのみ取得
  const response = await getPosts("お知らせ", limit, offset);
  const posts = response.contents;
  const totalCount = response.totalCount;
  const maxPages = Math.ceil(totalCount / limit);

  return (
    <main id="pageNews" className="pageNews">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">NEWS</span>
            <br />
            <span className="jp">お知らせ</span>
          </h2>
        </div>
      </div>

      <section className="scPageContets">
        <div className="wrap">
          <div className="archive-list">
            {posts && posts.length > 0 ? (
              posts.map((post) => {
                const date = formatDate(post.publishedAt);
                const thumb = post.thumbnail?.url || "/assets/img/common/no_image.jpg";
                const rawExcerpt = post.excerpt || post.content;
                const excerpt = stripTagsAndTruncate(rawExcerpt, 120);

                return (
                  <div key={post.id} className="arichive-list-item">
                    <Link href={`/news/detail/?id=${post.id}`}>
                      <h3>{post.title}</h3>
                      <p className="time">{date}</p>

                      {post.thumbnail?.url && (
                        <div className="figure">
                          <div className="img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={thumb} alt={post.title} />
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

          {maxPages > 1 && (
            <nav className="navigation pagination">
              <div className="nav-links">
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
                      href={`/news/?page=${i}`}
                    >
                      {i}
                    </Link>
                  )
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
