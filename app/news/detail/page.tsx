import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/contact";
import { getPostDetail, getRecentPosts } from "@/lib/microcms";

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ id?: string }>;
};

// 日付フォーマット関数 (YYYY.MM.DD)
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

// メタデータ生成
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  if (!params.id) {
    return { title: "お知らせ | 株式会社WAZAWAZA" };
  }

  const post = await getPostDetail(params.id);
  if (!post) {
    return { title: "お知らせ | 株式会社WAZAWAZA" };
  }

  const cleanContent = post.content ? post.content.replace(/<[^>]*>/g, "") : "";
  const description = cleanContent.slice(0, 120);

  return {
    title: `${post.title} | 株式会社WAZAWAZA`,
    description,
  };
}

export default async function NewsDetailPage({ searchParams }: Props) {
  const params = await searchParams;
  const postId = params.id?.trim();

  if (!postId) {
    notFound();
  }

  // 該当記事を取得
  const post = await getPostDetail(postId);

  if (!post) {
    notFound();
  }

  // 最近の投稿（最新3件）を取得
  const recentResponse = await getRecentPosts("お知らせ", 3);
  const recentPosts = recentResponse.contents;

  const date = formatDate(post.publishedAt);

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
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>

          <p className="btn">
            <Link href="/news/">一覧に戻る</Link>
          </p>

          {recentPosts && recentPosts.length > 0 && (
            <div className="newpost">
              <h3 className="newpost-title">最近の投稿</h3>
              {recentPosts.map((item) => (
                <div key={item.id} className="newpost-item">
                  <Link href={`/news/detail/?id=${item.id}`}>
                    <div className="content">
                      <div className="title">{item.title}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Contact />
    </main>
  );
}
