import { Link } from "react-router-dom";

function BeautySalonLP() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← ホームに戻る
      </Link>
      <h1 className="text-3xl font-bold mb-6">飲食店向けLP</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">概要</h2>
        <p className="mb-4">
          このランディングページは、飲食店の魅力を最大限に伝えるために設計されています。
          高品質な料理の写真、店内の雰囲気、特別なメニューなどを効果的に紹介します。
        </p>
        <h2 className="text-2xl font-semibold mb-4">特徴</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>美しい写真ギャラリー</li>
          <li>オンライン予約システム</li>
          <li>メニューの詳細表示</li>
          <li>アクセス情報の地図表示</li>
        </ul>
      </div>
    </div>
  );
}

export default BeautySalonLP;