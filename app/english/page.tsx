import Link from "next/link";

export default function EnglishPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f6f7f2", padding: "120px 0 80px" }}>
      <div
        style={{
          width: "min(840px, 92vw)",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #d2d9df",
          borderRadius: "18px",
          padding: "36px",
        }}
      >
        <p style={{ fontSize: "1.2rem", letterSpacing: "0.1em", color: "#5b6572", marginBottom: "10px" }}>
          ENGLISH NOTES
        </p>
        <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>英語学習の記録</h1>
        <p style={{ lineHeight: "1.9", color: "#5b6572", marginBottom: "18px" }}>
          TOEIC 900点を目指して、語彙・リーディング・リスニングの学習ログをまとめています。
        </p>
        <ul style={{ paddingLeft: "18px", lineHeight: "2" }}>
          <li>毎週の学習時間と振り返り</li>
          <li>使っている教材の要点メモ</li>
          <li>改善したい弱点の整理</li>
        </ul>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "24px",
            textDecoration: "none",
            border: "1px solid #d2d9df",
            borderRadius: "999px",
            padding: "8px 14px",
          }}
        >
          ← トップへ戻る
        </Link>
      </div>
    </main>
  );
}
