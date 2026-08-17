import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/contact";
import { getPostDetail, getRecentPosts } from "@/lib/microcms";

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ id?: string }>;
};

// メタデータ動的生成
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const id = params.id;
  if (!id) return { title: "ブログ | 株式会社WAZAWAZA" };

  try {
    const post = await getPostDetail(id);
    if (!post) return { title: "ブログ | 株式会社WAZAWAZA" };

    return {
      title: `${post.title} | 株式会社WAZAWAZA`,
      description: post.excerpt || post.title,
    };
  } catch {
    return { title: "ブログ | 株式会社WAZAWAZA" };
  }
}

// 日付フォーマット関数 (YYYY.MM.DD)
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

export default async function BlogDetailPage({ searchParams }: Props) {
  const params = await searchParams;
  const id = params.id;

  if (!id) {
    notFound();
  }

  let post;
  try {
    post = await getPostDetail(id);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  // 最新のブログ記事3件を取得
  const recentPostsResponse = await getRecentPosts("ブログ", 3);
  const recentPosts = recentPostsResponse?.contents || [];

  const date = formatDate(post.publishedAt);

  return (
    <main id="pageNews" className="pageNews">
      <div className="PageHead">
        <div className="pageHeadText" style={{ opacity: 1 }}>
          <h2>
            <span className="en">BLOG</span>
            <br />
            <span className="jp">ブログ</span>
          </h2>
        </div>
      </div>

      <section className="scPageContets">
        <div className="wrap">
          <div className="post-inner">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-date">更新日：{date}</p>

            {post.thumbnail?.url && (
              <div className="post-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.thumbnail.url} alt={post.title} />
              </div>
            )}

            <div
              className="post-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <p className="btn">
            <Link href="/blog/">一覧に戻る</Link>
          </p>

          <div className="newpost">
            <h3 className="newpost-title">最近の投稿</h3>
            {recentPosts.length > 0 ? (
              recentPosts.map((item) => (
                <div key={item.id} className="newpost-item">
                  <Link href={`/blog/detail/?id=${item.id}`}>
                    <div className="content">
                      <div className="title">{item.title}</div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>最近の投稿はありません。</p>
            )}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
