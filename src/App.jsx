import { useState } from 'react';
import './App.css'; // 關聯您的 App.css 樣式

// 導入分拆後的各個獨立頁面檔案
import Home from './pages/Home';
import Academy from './pages/Academy';
import Leaders from './pages/Leaders';
import Highlights from './pages/Highlights';
import Tool from './pages/Tool';
import MobileSimulator from './pages/MobileSimulator';

// 導入共用組件
import Modals from './components/Modals';
import { Monitor, Smartphone, Calculator, BookOpen } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('desktop');
  const [activeTab, setActiveTab] = useState('home');
  const [mobileTab, setMobileTab] = useState('home');

  // 全域燈箱彈窗狀態
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  // 計算機狀態
  const [calcHeight, setCalcHeight] = useState('');
  const [calcWeight, setCalcWeight] = useState('');
  const [calcAge, setCalcAge] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const closeModal = () => {
    setSelectedLeader(null);
    setSelectedStory(null);
    setPlayingVideo(null);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!calcHeight || !calcWeight) return;
    const heightInMeters = parseFloat(calcHeight) / 100;
    const weight = parseFloat(calcWeight);
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '健康標準', recommendProgram = '心血管健康管理專題班', advice = '保持良好生活習慣。';
    if (bmi < 18.5) { category = '體重過輕'; recommendProgram = '基礎家庭營養班'; }
    else if (bmi >= 24 && bmi < 27) { category = '過重'; recommendProgram = 'CA Fitness 體重管理計畫'; }
    else if (bmi >= 27) { category = '肥胖'; recommendProgram = 'CA Fitness 12週健康管理計畫'; advice = '建議諮詢資深直銷顧問。'; }

    setCalcResult({ bmi, category, advice, recommendProgram });
  };

  const handleResetCalculator = () => {
    setCalcHeight(''); setCalcWeight(''); setCalcAge(''); setCalcResult(null);
  };

  const handleAnswerQuiz = (option) => {
    if (showQuizResult) return;
    setSelectedAnswer(option);
    setShowQuizResult(true);
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

        {/* 視圖控制切換列 */}
        <div className="sticky top-0 z-50 bg-[#034E72] text-white border-b border-white/10 px-4 py-2.5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B8D333] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider">CA NETWORK · 模組化極簡核心</span>
          </div>
          <div className="flex items-center bg-slate-900/40 p-1 rounded-xl border border-white/10">
            <button onClick={() => setViewMode('desktop')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'desktop' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Monitor size={14} />桌面官網</button>
            <button onClick={() => { setViewMode('mobile'); setMobileTab('home'); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'mobile' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Smartphone size={14} />Flutter App 模擬</button>
          </div>
        </div>

        {/* 桌面版官網渲染路由 */}
        {viewMode === 'desktop' && (
            <div className="animate-fadeIn">
              <header className="bg-white/95 backdrop-blur-md sticky top-13.25 z-40 shadow-sm border-b border-slate-100 px-4 h-20 flex items-center justify-between">
                <div onClick={() => setActiveTab('home')} className="text-xl font-extrabold text-[#034E72] cursor-pointer">CA Network <span className="text-xs text-slate-400 block tracking-widest uppercase font-bold">Health Academy</span></div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                  {['home', 'academy', 'leaders', 'highlights', 'tool'].map(tab => (
                      <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 relative ${activeTab === tab ? 'text-[#034E72]' : ''}`}>
                        {tab === 'home' && '學院首頁'}{tab === 'academy' && '40年營養班系統'}{tab === 'leaders' && '導師名人堂'}{tab === 'highlights' && '活動花絮'}{tab === 'tool' && '智能健康評估'}
                        {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8D333]"></span>}
                      </button>
                  ))}
                </nav>
                <button onClick={() => setActiveTab('academy')} className="bg-[#034E72] text-[#B8D333] border border-[#B8D333]/30 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md">體驗免費課</button>
              </header>

              {activeTab === 'home' && <Home setActiveTab={setActiveTab} setPlayingVideo={setPlayingVideo} setSelectedStory={setSelectedStory} setSelectedLeader={setSelectedLeader} />}
              {activeTab === 'academy' && <Academy />}
              {activeTab === 'leaders' && <Leaders setSelectedLeader={setSelectedLeader} />}
              {activeTab === 'highlights' && <Highlights setPlayingVideo={setPlayingVideo} />}
              {activeTab === 'tool' && <Tool calcHeight={calcHeight} setCalcHeight={setCalcHeight} calcWeight={calcWeight} setCalcWeight={setCalcWeight} calcAge={calcAge} setCalcAge={setCalcAge} calcResult={calcResult} handleCalculate={handleCalculate} handleResetCalculator={handleResetCalculator} setActiveTab={setActiveTab} />}
            </div>
        )}

        {/* 手機 Flutter UI 模擬器渲染路由 */}
        {viewMode === 'mobile' && (
            <MobileSimulator
                mobileTab={mobileTab} setMobileTab={setMobileTab}
                selectedAnswer={selectedAnswer} showQuizResult={showQuizResult}
                handleAnswerQuiz={handleAnswerQuiz} setSelectedStory={setSelectedStory}
                setSelectedLeader={setSelectedLeader} setPlayingVideo={setPlayingVideo}
            />
        )}

        {/* 全域共享彈出式燈箱 */}
        <Modals selectedLeader={selectedLeader} selectedStory={selectedStory} playingVideo={playingVideo} closeModal={closeModal} />

      </div>
  );
}