"use client"; // 👈 これが重要

import { useState } from "react";

export default function AccordionSection() {
  return (
    <ul className="dream__accordion-container js-fade-target">
      <AccordionItem
        question="プログラミング・技術スキルは？"
        title="Python / C++ / Data Analysis"
        content="研究活動では Python を使った解析、可視化、実験ログ整理を日常的に行っています。C++ では基礎的なアルゴリズム実装を経験し、処理の安定性や読みやすさを重視して開発しています。"
      />
      <AccordionItem
        question="研究の進め方は？"
        title="Hypothesis → Simulation → Validation"
        content="まず仮説を立て、流体解析や小スケール実験で早く検証し、得られた結果をもとに次の設計に反映します。完璧さよりも検証速度を重視し、短いサイクルで改善することを意識しています。"
      />
      <AccordionItem
        question="趣味・関心領域について"
        title="Poker / English Learning / AI"
        content="趣味はポーカーで、確率思考と意思決定のトレーニングとして楽しんでいます。英語学習にも継続的に取り組んでおり、最近は AI 活用による予測モデルづくりや情報整理にも関心があります。"
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
  const answerId = `answer-${question}`;

  return (
    <li className="dream__accordion-box">
      <div className="dream__accordion-item">
        <button
          className="dream__accordion-item--question"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          {question} {isOpen ? "−" : "+"}
        </button>
        <div
          id={answerId}
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
