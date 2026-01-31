import { getAllPosts } from '../lib/posts';
import Link from "next/link";
import Image from "next/image";
import ClientAnimations from "./ClientAnimations"; // さっき作ったファイルを読み込む
import AccordionSection from "./AccordionSection"; // さっき作ったファイルを読み込む

export default function Home() {
  const allPostsData = getAllPosts();

  return (
    <div className="wrapper">
      {/* アニメーション用コンポーネント */}
      <ClientAnimations />

      <header className="header">
        <div className="header__text-wrapper">
          <div className="header__text-box">
            <span className="header__text-box--item">AYUTO OZAWA PORTFOLIO 2025 - REGENERATIVE ENGINEERING - </span>
            <span className="header__text-box--item">AYUTO OZAWA PORTFOLIO 2025 - REGENERATIVE ENGINEERING - </span>
          </div>
        </div>
      </header>

      <main className="main_content">
        <section className="mv">
          <div className="c-inner mv__container">
            <div className="mv__text-box js-fade-target">
              <p className="mv__text-box--attr">Tokyo Tech Graduate Student</p>
              <h1 className="mv__text-box--name">
                <p className="jp">小澤 歩叶</p>
                <p className="en">AYUTO OZAWA</p>
              </h1>

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
              <div style={{ 
                position: "relative", 
                width: "100%", 
                height: "100%", 
                minHeight: "400px", 
                borderRadius: "16px", 
                border: "1px solid #333", 
                overflow: "hidden" // 角丸からはみ出さないように
              }}>
                <Image
                  src="/images/profile/me.jpeg" // publicフォルダからのパス
                  alt="Ayuto Ozawa"
                  fill // 親要素(div)いっぱいに広げる魔法
                  style={{ objectFit: "cover" }} // 写真が歪まないように自動トリミング
                  priority // メインビジュアルなので優先的に読み込む
                />
              </div>
            </div>
          </div>
        </section>

        <article className="box-content">
          {/* 01. About */}
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
                                <p className="content">東京科学大学 工学院機械系</p>
                            </li>
                            <li className="about__attr-list--item">
                                <p className="title">専門</p>
                                <p className="content">再生工学 / バイオリアクタ / 流体解析</p>
                            </li>
                        </ul>
                         <div className="c-about-container about__life js-bounce-target" style={{marginTop:'40px'}}>
                            <h3 className="c-about-box-title" style={{fontWeight: "bold", marginBottom: "15px"}}>ACADEMIC HISTORY</h3>
                            <div className="c-about-box about__life-box">
                                <ul className="about__life-text-container">
                                    <li className="about__life-text-box">
                                        <div className="about__life-text-box--text"><p className="era">2021</p><p className="content">大阪大学 入学</p></div>
                                    </li>
                                    <li className="about__life-text-box">
                                        <div className="about__life-text-box--text"><p className="era">2025</p><p className="content">東京科学大学院 入学</p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </section>

          {/* 02. Research */}
          <section className="favorite" id="research">
             <div className="c-inner favorite__wrapper">
                 <div className="favorite__text-container js-bounce-target" style={{ width: "100%" }}>
                    <h2 className="c-heading c-box">
                        <p className="num">02</p>
                        <div className="text_box"><p className="jp">研究テーマ</p><p className="en">RESEARCH</p></div>
                    </h2>
                    <div style={{ marginBottom: "40px", lineHeight: "1.8" }}>
                        <p><strong>「骨再生促進を目的とした灌流型バイオリアクタ」</strong>の開発を行っています。</p>
                    </div>
                 </div>
             </div>
          </section>

          {/* 03. Skills */}
          <section className="dream" id="skills">
             <div className="c-inner">
                 <h2 className="c-heading js-fade-target">
                    <p className="num">03</p>
                    <div className="text_box"><p className="jp">スキル・趣味</p><p className="en">SKILLS & HOBBY</p></div>
                 </h2>
                 {/* 切り出したアコーディオンコンポーネントを使用 */}
                 <AccordionSection />
             </div>
          </section>

          {/* 04. BLOG & PREDICTIONS */}
          <section className="blog" id="blog">
            <div className="c-inner">
              <h2 className="c-heading js-fade-target">
                <p className="num">04</p>
                <div className="text_box">
                  <p className="jp">ブログ・予想</p>
                  <p className="en">BLOG & AI PREDICTIONS</p>
                </div>
              </h2>
              
              <p className="js-fade-target">
                学習の備忘録や、開発したAIによる週末の競馬予想を更新しています。
              </p>

              <div className="blog__grid js-fade-target">
                {allPostsData.map(({ id, date, title }) => (
                  <Link href={`/posts/${id}`} key={id} className="blog__card">
                    <p className="blog__card--date">{date}</p>
                    <h3 className="blog__card--title">{title}</h3>
                    <p className="blog__card--arrow">Read More →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </article>

        <footer className="footer">
          <div className="c-inner">
            <p className="footer__copyright">© 2026 Ayuto Ozawa</p>
          </div>
        </footer>
      </main>
    </div>
  );
}