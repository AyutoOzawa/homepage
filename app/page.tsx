import { getAllPosts } from '../lib/posts';
import Link from "next/link";
import Image from "next/image";
import ClientAnimations from "./ClientAnimations";
import AccordionSection from "./AccordionSection";

export default function Home() {
  const allPostsData = getAllPosts();
  const currentYear = new Date().getFullYear();

  return (
    <div className="wrapper">
      <ClientAnimations />

      <header className="header">
        <div className="header__inner c-inner">
          <p className="header__brand">AYUTO OZAWA</p>
          <div className="header__ticker" aria-hidden="true">
            <div className="header__ticker-track">
              <span>REGENERATIVE ENGINEERING</span>
              <span>FLUID ANALYSIS</span>
              <span>BIOREACTOR DESIGN</span>
              <span>REGENERATIVE ENGINEERING</span>
              <span>FLUID ANALYSIS</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main_content">
        <section className="mv">
          <div className="c-inner mv__container">
            <div className="mv__text-box js-fade-target">
              <p className="mv__text-box--attr">Tokyo Institute of Science / Graduate Student</p>
              <h1 className="mv__text-box--name">小澤 歩叶 / AYUTO OZAWA</h1>
              <p className="mv__lead">
                骨再生を加速させる灌流型バイオリアクタの研究開発に取り組んでいます。
                研究設計から流体解析、実装までを一貫して進めるのが強みです。
              </p>
              <div className="mv__cta">
                <Link href="#research" className="mv__cta-button is-primary">Researchを見る</Link>
                <Link href="#blog" className="mv__cta-button">Blogを見る</Link>
              </div>

              <nav className="mv__menu">
                <p className="mv__menu--title">INDEX</p>
                <ol className="mv__menu-list">
                  <li className="mv__menu-list--item">
                    <Link href="#about">
                      <p className="num">01</p>
                      <div className="text_box">
                        <p className="en">About me</p>
                        <div className="jp">
                          <p className="main">経歴・プロフィール</p>
                        </div>
                      </div>
                      <span className="arrow"></span>
                    </Link>
                  </li>
                  <li className="mv__menu-list--item">
                    <Link href="#research">
                      <p className="num">02</p>
                      <div className="text_box">
                        <p className="en">Research</p>
                        <div className="jp">
                          <p className="main">研究内容</p>
                        </div>
                      </div>
                      <span className="arrow"></span>
                    </Link>
                  </li>
                  <li className="mv__menu-list--item">
                    <Link href="#skills">
                      <p className="num">03</p>
                      <div className="text_box">
                        <p className="en">Skills & Hobby</p>
                        <div className="jp">
                          <p className="main">スキル・趣味</p>
                        </div>
                      </div>
                      <span className="arrow"></span>
                    </Link>
                  </li>
                  <li className="mv__menu-list--item">
                    <Link href="#blog">
                      <p className="num">04</p>
                      <div className="text_box">
                        <p className="en">Blog & AI</p>
                        <div className="jp">
                          <p className="main">ブログ・予想</p>
                        </div>
                      </div>
                      <span className="arrow"></span>
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>

            <div className="mv__img-box js-bounce-target">
              <div className="mv__img-frame">
                <Image
                  src="/images/profile/me.jpeg"
                  alt="Ayuto Ozawa"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="mv__img-caption">Research x Engineering x Data</div>
              </div>
            </div>
          </div>
        </section>

        <article className="box-content">
          <section className="about" id="about">
            <div className="c-inner">
              <h2 className="c-heading js-bounce-target">
                <p className="num">01</p>
                <p className="jp">わたしについて</p>
                <p className="en">ABOUT ME</p>
              </h2>
              <div className="about__container">
                <div className="about__text-box">
                  <ul className="about__attr-list js-fade-target">
                    <li className="about__attr-list--item">
                      <p className="title">所属</p>
                      <p className="content">東京科学大学 工学院 機械系</p>
                    </li>
                    <li className="about__attr-list--item">
                      <p className="title">専門</p>
                      <p className="content">再生工学 / バイオリアクタ / 流体解析</p>
                    </li>
                    <li className="about__attr-list--item">
                      <p className="title">志向</p>
                      <p className="content">研究成果を社会実装まで届けるプロダクト志向</p>
                    </li>
                  </ul>

                  <div className="about__strengths js-fade-target">
                    <article className="about__strength-card">
                      <h3>01. Research Design</h3>
                      <p>目的設定から検証設計まで、再現性を意識して研究プロセスを組み立てます。</p>
                    </article>
                    <article className="about__strength-card">
                      <h3>02. Simulation & Analysis</h3>
                      <p>流体解析と実験データ可視化を組み合わせ、意思決定につながる示唆を抽出します。</p>
                    </article>
                    <article className="about__strength-card">
                      <h3>03. Build & Iterate</h3>
                      <p>設計と実装を行き来しながら、短いサイクルで改善を積み上げます。</p>
                    </article>
                  </div>

                  <div className="c-about-container about__life js-bounce-target">
                    <h3 className="c-about-box-title">ACADEMIC HISTORY</h3>
                    <div className="c-about-box about__life-box">
                      <ul className="about__life-text-container">
                        <li className="about__life-text-box">
                          <div className="about__life-text-box--text">
                            <p className="era">2021</p>
                            <p className="content">大阪大学 入学</p>
                          </div>
                        </li>
                        <li className="about__life-text-box">
                          <div className="about__life-text-box--text">
                            <p className="era">2025</p>
                            <p className="content">東京科学大学院 入学</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="favorite" id="research">
            <div className="c-inner favorite__wrapper">
              <div className="favorite__text-container js-bounce-target">
                <h2 className="c-heading c-box">
                  <p className="num">02</p>
                  <div className="text_box">
                    <p className="jp">研究テーマ</p>
                    <p className="en">RESEARCH</p>
                  </div>
                </h2>
                <p className="favorite__intro">
                  骨再生促進を目的とした灌流型バイオリアクタの設計・評価を進めています。
                </p>
                <div className="favorite__cards js-fade-target">
                  <article className="favorite__card">
                    <h3>Purpose</h3>
                    <p>移植用組織の品質を高め、再生医療の実用化に向けた培養基盤をつくる。</p>
                  </article>
                  <article className="favorite__card">
                    <h3>Method</h3>
                    <p>灌流条件の最適化、流体シミュレーション、実験系での比較評価を統合。</p>
                  </article>
                  <article className="favorite__card">
                    <h3>Value</h3>
                    <p>生体組織培養の再現性向上と、設計指針の定量化による開発効率の改善。</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="dream" id="skills">
            <div className="c-inner">
              <h2 className="c-heading js-fade-target">
                <p className="num">03</p>
                <div className="text_box">
                  <p className="jp">スキル・趣味</p>
                  <p className="en">SKILLS & HOBBY</p>
                </div>
              </h2>
              <div className="skills__chips js-fade-target">
                <span>Python</span>
                <span>C++</span>
                <span>CFD</span>
                <span>Data Visualization</span>
                <span>AWS (Learning)</span>
                <span>English Study</span>
              </div>
              <AccordionSection />
            </div>
          </section>

          <section className="blog" id="blog">
            <div className="c-inner">
              <h2 className="c-heading js-fade-target">
                <p className="num">04</p>
                <div className="text_box">
                  <p className="jp">ブログ・予想</p>
                  <p className="en">BLOG & AI PREDICTIONS</p>
                </div>
              </h2>

              <p className="blog__intro js-fade-target">
                学習の備忘録、研究メモ、開発したAIによる競馬予想を更新しています。
                技術的な学びを実験と実装の両面から言語化して残しています。
              </p>

              <div className="blog__grid js-fade-target">
                {allPostsData.map(({ id, date, title }) => (
                  <Link href={`/posts/${id}`} key={id} className="blog__card">
                    <p className="blog__card--date">{date}</p>
                    <h3 className="blog__card--title">{title}</h3>
                    <p className="blog__card--tag">{id.includes("keiba") ? "AI Prediction" : "Learning Note"}</p>
                    <p className="blog__card--arrow">Read More →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>

        <footer className="footer">
          <div className="c-inner footer__inner">
            <div className="footer__links">
              <Link href="/english">English Notes</Link>
              <Link href="#about">About</Link>
              <Link href="#blog">Blog</Link>
            </div>
            <p className="footer__copyright">© {currentYear} Ayuto Ozawa</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
