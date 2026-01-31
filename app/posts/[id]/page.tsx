import { getPostData } from '../../../lib/posts';
import Link from "next/link";

// URLのパラメータを受け取る設定
export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div className="wrapper">
      {/* 1. 共通ヘッダー（トップページと同じもの） */}
      <header className="header">
        <div className="header__text-wrapper">
          <div className="header__text-box">
            <span className="header__text-box--item">AYUTO OZAWA PORTFOLIO 2025 - REGENERATIVE ENGINEERING - </span>
            <span className="header__text-box--item">AYUTO OZAWA PORTFOLIO 2025 - REGENERATIVE ENGINEERING - </span>
          </div>
        </div>
      </header>

      <main className="main_content">
        {/* 2. 記事の表示エリア */}
        <div className="c-inner" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
          
          {/* 戻るボタン */}
          <div style={{ marginBottom: "20px" }}>
            <Link href="/" className="text-blue-600 font-bold hover:underline">
               ← TOPへ戻る
            </Link>
          </div>

          {/* 3. 白いカード（トップページのデザインを踏襲） */}
          <article 
            style={{ 
              background: "#fff", 
              border: "1px solid #333", 
              borderRadius: "16px", 
              padding: "40px", /* スマホなら20pxくらいがいいかも */
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            {/* 記事タイトルエリア */}
            <div style={{ borderBottom: "1px solid #eee", paddingBottom: "20px", marginBottom: "40px" }}>
              <p style={{ color: "#888", fontSize: "1.4rem", marginBottom: "10px", fontWeight: "bold" }}>
                {postData.date}
              </p>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.4" }}>
                {postData.title}
              </h1>
            </div>

            {/* Markdown本文 */}
            <div 
              className="prose prose-blue max-w-none"
              // proseのデフォルトスタイルを少し上書きしてサイトに合わせる
              style={{ fontSize: "1.6rem", lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
          </article>
        </div>

        {/* 4. フッター */}
        <footer className="footer">
          <div className="c-inner">
            <p className="footer__copyright">© 2026 Ayuto Ozawa</p>
          </div>
        </footer>
      </main>
    </div>
  );
}