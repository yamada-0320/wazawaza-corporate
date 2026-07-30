"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // PHP同様、送信成功時はサンクスページへ遷移
        router.push("/thanks/");
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert("送信中にエラーが発生しました。");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="scContact" id="contact">
      <div className="wrap">
        <div className="contactText">
          <h3 className="scTitle">
            <span className="en">CONTACT</span>
            <span className="jp">ワザワザ連絡してみる</span>
          </h3>
          <p className="lead">
            こんなことやってみたい、こんな悩みがある。
            <br />
            一緒に考えさせて下さい。
            <br />
            きっと答えが見つかるはずです。
          </p>
        </div>
        <div className="formArea">
          <div className="inquiry">
            <form onSubmit={handleSubmit} method="POST">
              {/* 御社名 */}
              <dl>
                <dt>
                  <p>御社名*</p>
                </dt>
                <dd>
                  <p>
                    <input
                      size={40}
                      maxLength={400}
                      type="text"
                      name="your-company"
                      placeholder="入力してください"
                      defaultValue=""
                      required
                    />
                  </p>
                </dd>
              </dl>

              {/* 御社webサイトURL */}
              <dl>
                <dt>
                  <p>御社webサイトURL</p>
                </dt>
                <dd>
                  <p>
                    <input
                      size={40}
                      maxLength={400}
                      type="text"
                      name="your-url"
                      placeholder="入力してください"
                      defaultValue=""
                    />
                  </p>
                </dd>
              </dl>

              {/* ご担当者の お名前 */}
              <dl>
                <dt>
                  <p>
                    ご担当者の
                    <br />
                    お名前*
                  </p>
                </dt>
                <dd>
                  <p>
                    <input
                      size={40}
                      maxLength={400}
                      type="text"
                      name="your-name"
                      placeholder="入力してください"
                      defaultValue=""
                      required
                    />
                  </p>
                </dd>
              </dl>

              {/* メールアドレス */}
              <dl>
                <dt>
                  <p>メールアドレス*</p>
                </dt>
                <dd>
                  <p>
                    <input
                      size={40}
                      maxLength={400}
                      type="email"
                      name="your-email"
                      placeholder="入力してください"
                      defaultValue=""
                      required
                    />
                  </p>
                </dd>
              </dl>

              {/* お電話番号 */}
              <dl>
                <dt>
                  <p>お電話番号*</p>
                </dt>
                <dd>
                  <p>
                    <input
                      size={40}
                      maxLength={400}
                      type="tel"
                      name="your-tel"
                      placeholder="入力してください"
                      defaultValue=""
                      required
                    />
                  </p>
                </dd>
              </dl>

              {/* お問い合わせ概要 */}
              <dl className="textArea">
                <dt>
                  <p>お問い合わせ概要*</p>
                </dt>
                <dd>
                  <p>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="SES事業部 協業、情報交換に関して"
                        required
                      />
                      <span>SES事業部 協業、情報交換に関して</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="マーケティング、HP制作、運用保守に関してのご依頼"
                      />
                      <span>マーケティング、HP制作、運用保守に関してのご依頼</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="ココシカ!について"
                      />
                      <span>ココシカ!について</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="採用、求人について"
                      />
                      <span>採用、求人について</span>
                    </label>
                    <label>
                      <input type="radio" name="type" value="その他" />
                      <span>その他</span>
                    </label>
                  </p>
                </dd>
              </dl>

              {/* お問い合わせ内容 */}
              <dl className="textArea">
                <dt>
                  <p>お問い合わせ内容*</p>
                </dt>
                <dd>
                  <p>
                    <textarea
                      cols={40}
                      rows={10}
                      maxLength={2000}
                      name="your-message"
                      placeholder="入力してください"
                      required
                    ></textarea>
                  </p>
                </dd>
              </dl>

              {/* 送信ボタン */}
              <p className="submitBtn">
                <input
                  type="submit"
                  value={isSubmitting ? "送信中..." : "ワザワザ送信する"}
                  disabled={isSubmitting}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
