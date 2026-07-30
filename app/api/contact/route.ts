import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      "your-company": company,
      "your-url": site_url,
      "your-name": name,
      "your-email": email,
      "your-tel": tel,
      type: category,
      "your-message": message,
    } = body;

    // 必須入力チェック（PHP側の条件式に対応）
    if (!company || !name || !email || !tel || !category || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    // SMTPトランスポートの設定（環境変数から読み込み、無ければデフォルト）
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: Number(process.env.SMTP_PORT) || 25,
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS || "",
          }
        : undefined,
    });

    const adminEmail = "webmaster@wazawaza.work";

    // 1. 管理者宛て通知メール
    const mailOptionsAdmin = {
      from: `"WAZAWAZA WEBサイト" <${adminEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `【お問い合わせ】${company} ${name}様より`,
      text: `Webサイトよりお問い合わせがありました。

御社名: ${company}
御社webサイトURL: ${site_url || ""}
ご担当者様お名前: ${name}
メールアドレス: ${email}
お電話番号: ${tel}
お問い合わせ概要: ${category}
お問い合わせ内容:
${message}
`,
    };

    // 2. お客様宛て自動返信メール
    const mailOptionsUser = {
      from: `"株式会社WAZAWAZA" <${adminEmail}>`,
      to: email,
      replyTo: adminEmail,
      subject: "【自動返信】お問い合わせありがとうございます｜株式会社WAZAWAZA",
      text: `${company}
${name} 様

この度はお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。
内容を確認の上、担当者よりご連絡させていただきますので今しばらくお待ちください。

--------------------------------------------------
■ご入力内容
御社名: ${company}
御社webサイトURL: ${site_url || ""}
ご担当者様お名前: ${name}
メールアドレス: ${email}
お電話番号: ${tel}
お問い合わせ概要: ${category}
お問い合わせ内容:
${message}
--------------------------------------------------

※本メールは送信専用アドレスより自動送信されています。
※お急ぎの場合は、直接お電話または本メールへのご返信にてご連絡ください。

株式会社WAZAWAZA
https://wazawaza.work/
`,
    };

    // メール送信実行
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信処理に失敗しました。" },
      { status: 500 }
    );
  }
}
