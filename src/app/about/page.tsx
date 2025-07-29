export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
          <p className="text-gray-700 mb-4">
            
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>名前 : 皆川 諒</li>
            <li>所属 : 京都大学大学院 情報学研究科 非線形物理学講座 理論神経科学・非平衡数理グループ</li>
            <li>学士(工学)</li>
            <li>研究テーマ: テンソルネットワークと動的低ランク近似</li>
            <li>使用言語: Python</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">経歴</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>2015/4~2020/3 : 国立木更津工業高等専門学校 電気電子工学科</li>
            <li>2021/4~2024/3 : 京都大学 工学部 情報学科 数理工学コース</li>
            <li>2024/4~2026/3(予定) : 京都大学大学院 情報学研究科 先端数理科学コース</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>GitHub: <a href="https://github.com/Saten0" className="text-blue-500 underline">@Saten0</a></li>
            <li>
                Email:
                <a href="mailto:mail@saten-res.com" className="text-blue-500 underline">mail@saten-res.com</a>
            </li>
          </ul>
          
        </div>
        
      </main>
    );
  }