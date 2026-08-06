import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/contact";
import { getProductDetail, getRecentProducts } from "@/lib/microcms";

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ id?: string }>;
};

// 動的メタデータ生成
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  if (!params.id) {
    return { title: "実績紹介 | 株式会社WAZAWAZA" };
  }

  const post = await getProductDetail(params.id);
  if (!post) {
    return { title: "実績紹介 | 株式会社WAZAWAZA" };
  }

  const cleanContent = post.content ? post.content.replace(/<[^>]*>/g, "") : "";
  const description = cleanContent.slice(0, 120);

  return {
    title: `${post.title} | 株式会社WAZAWAZA`,
    description,
  };
}

export default async function ProductDetailPage({ searchParams }: Props) {
  const params = await searchParams;
  const postId = params.id?.trim();

  // IDがない場合は404ページへ
  if (!postId) {
    notFound();
  }

  // microCMSから事例を取得
  const post = await getProductDetail(postId);

  // 該当記事が存在しない場合は404ページへ
  if (!post) {
    notFound();
  }

  // 他の事例（最新4件）を取得
  const recentResponse = await getRecentProducts(4);
  const recentPosts = recentResponse.contents;

  // 画像準備
  const mainImg = post.main_image?.url || post.thumbnail?.url || "";
  const detailImg1 = post.detail_img1?.url || "";
  const detailImg2 = post.detail_img2?.url || "";
  const items = post.items || [];

  return (
    <main id="pageProduct" className="pageProductPost">
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
          <div className="postArea">
            <h3 className="postTitle">{post.title}</h3>

            {mainImg && (
              <div className="postMvImg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mainImg} alt={post.title} />
              </div>
            )}

            <div className="postText">
              {post.catch_phrase && (
                <div className="postCatchCopy">
                  <h4>{post.catch_phrase}</h4>
                </div>
              )}

              <div className="postDetail">
                <div
                  className="postDisc"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                {items.length > 0 && (
                  <ul className="postLabel">
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {(detailImg1 || detailImg2) && (
              <div className="postImg">
                {detailImg1 && (
                  <div className="postImgItem">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={detailImg1} alt="" />
                  </div>
                )}
                {detailImg2 && (
                  <div className="postImgItem">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={detailImg2} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {recentPosts && recentPosts.length > 0 && (
          <>
            <h3 className="titleBold">他の事例を見る</h3>
            <ul className="c-carousel">
              {recentPosts.map((recent) => {
                const recentThumb =
                  recent.thumbnail?.url || "/assets/img/common/no_image.jpg";
                return (
                  <li key={recent.id} className="c-carousel__item">
                    <Link
                      href={`/product/detail/?id=${recent.id}`}
                      className="sliderItem"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={recentThumb} alt={recent.title} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <Link href="/product/" className="btnBox">
          READ MORE
        </Link>
      </section>

      <Contact />
    </main>
  );
}
