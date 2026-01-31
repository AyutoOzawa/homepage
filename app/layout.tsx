import type { Metadata } from "next";
// Google Fonts からフォントを読み込む
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// フォントの設定
const zenFont = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayu's Portfolio",
  description: "Ayuto Ozawa Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* bodyにフォントクラスを適用 */}
      <body className={zenFont.className}>
        {/* ヘッダー・フッターは page.tsx 側で制御するため、ここは children のみにします */}
        {children}
      </body>
    </html>
  );
}