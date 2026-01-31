import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Ayu's Lab</h1>
        <p className="text-xl mb-4">エンジニアへの道 ＆ 競馬予想AI ＆ 英語・統計学習</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">🏇 競馬予想AI</h2>
            <p>PythonとDockerで構築する独自の勝ち馬予想システム．</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">📚 英語・統計学習</h2>
            <p>TOEIC 900点突破と統計検定の備忘録．</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">💻 Tech Blog</h2>
            <p>Next.jsやAWS，Dockerの学習記録．</p>
          </div>
        </div>
      </div>
    </main>
  );
}
