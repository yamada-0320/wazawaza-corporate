import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      "your-company": company,
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

    // ============================================================
    // 【テストモード】
    // SMTPパスワード設定前のため、メール送信処理は一時スキップします。
    // 後ほど Google Workspace のアプリパスワードが用意でき次第、
    // 本番用のメール送信ロジックに戻します。
    // ============================================================

    console.log("【フォーム受信テスト】", body);

    // 成功レスポンスを返し、contact.tsx 側で /thanks/ へ遷移させる
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("送信テストエラー:", error);
    return NextResponse.json(
      { error: "処理中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
