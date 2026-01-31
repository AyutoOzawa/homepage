"use client"; // 👈 これが重要

import { useState } from "react";

export default function AccordionSection() {
  return (
    <ul className="dream__accordion-container js-fade-target">
      <AccordionItem
        question="プログラミング・技術スキルは？"
        title="Python / C++ / Data Science"
        content="研究活動ではPythonを用いたデータ解析や可視化を行っています。C++を用いた開発経験もあり、論理的なアルゴリズム構築が得意です。現在はクラウド技術（AWS）やDXコンサルティング領域にも学習範囲を広げています。"
      />
      <AccordionItem
        question="趣味について"
        title="Poker Strategy"
        content="趣味はポーカーです。大会に出場するほど熱中しており、不完全情報ゲームにおける確率論と心理戦の駆け引きを楽しんでいます。この「限られた情報から最適解を導く」プロセスは、研究やビジネスにも通じると感じています。"
      />
    </ul>
  );
}

// 小さな部品なので同じファイル内でOK
function AccordionItem({
  question,
  title,
  content,
}: {
  question: string;
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="dream__accordion-box">
      <div className="dream__accordion-item">
        <button
          className="dream__accordion-item--question"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
        </button>
        <div
          className={`dream__accordion-item--answer ${isOpen ? "is-open" : ""}`}
        >
          <div className="answer-inner">
            <p className="title">{title}</p>
            <p className="content">{content}</p>
          </div>
        </div>
      </div>
    </li>
  );
}