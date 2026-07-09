import { useState } from 'react';
import './App.css';

// 導入分拆後的各個獨立頁面檔案
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs.jsx";
import NutritionEducation from './pages/nutritionEducation.jsx';
import BusinessEducation from './pages/businessEducation.jsx';
import Highlights from './pages/Highlights';
import Tool from './pages/Tool';
import MobileSimulator from './pages/MobileSimulator';

// 導入共用組件
import Modals from './components/Modals';
import { Monitor, Smartphone } from 'lucide-react';

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

  const closeModal = () => {
    setSelectedLeader(null);
    setSelectedStory(null);
    setPlayingVideo(null);
  };

  return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

        {/* 視圖控制切換列 */}
        <div className="sticky top-0 z-50 bg-[#034E72] text-white border-b border-white/10 px-4 py-2.5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"/>
          <div className="flex items-center bg-slate-900/40 p-1 rounded-xl border border-white/10">
            <button onClick={() => setViewMode('desktop')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'desktop' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Monitor size={14} />桌面官網</button>
            <button onClick={() => { setViewMode('mobile'); setMobileTab('home'); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'mobile' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Smartphone size={14} />Flutter App 模擬</button>
          </div>
        </div>

        {/* 桌面版官網渲染路由 */}
        {viewMode === 'desktop' && (
            <div className="animate-fadeIn">
              <header className="w-full bg-white/95 backdrop-blur-md sticky top-13.25 z-40 shadow-sm border-b border-slate-100 select-none">
                <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-[1fr_auto_1fr] items-center">

                  {/* Logo */}
                  <div className="flex justify-start">
                    <div
                        onClick={() => setActiveTab('home')}
                        className="flex items-center cursor-pointer"
                    >
                      <img
                          src="/CA logo landscape.png"
                          alt="CA Network Logo"
                          className="w-40 h-auto object-contain shrink-0 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Tab */}
                  <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold text-slate-500">
                    {['home', 'aboutUs', 'nutrition', 'business', 'highlights'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 relative transition-colors hover:text-[#034E72] ${activeTab === tab ? 'text-[#034E72]' : ''}`}
                        >
                          {tab === 'home' && '首頁'}
                          {tab === 'aboutUs' && '關於我們'}
                          {tab === 'nutrition' && '健康教育'}
                          {tab === 'business' && '創業教育'}
                          {tab === 'highlights' && '活動花絮'}
                          {activeTab === tab && (
                              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8D333]"></span>
                          )}
                        </button>
                    ))}
                    <a
                        href="https://canetwork.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 transition-colors hover:text-[#034E72]"
                    >
                      e-Learning
                    </a>
                  </nav>

                  {/* 右側平衡 */}
                  <div className="flex justify-end">
                    <div className="flex items-center gap-3" />
                  </div>

                </div>
              </header>

              {activeTab === 'home' && <Home setActiveTab={setActiveTab} setPlayingVideo={setPlayingVideo} setSelectedStory={setSelectedStory} setSelectedLeader={setSelectedLeader} />}
              {activeTab === 'aboutUs' && <AboutUs/>}
              {activeTab === 'nutrition' && <NutritionEducation />}
              {activeTab === 'business' && <BusinessEducation setSelectedLeader={setSelectedLeader} />}
              {activeTab === 'highlights' && <Highlights setPlayingVideo={setPlayingVideo} />}
              {activeTab === 'tool' && <Tool calcHeight={calcHeight} setCalcHeight={setCalcHeight} calcWeight={calcWeight} setCalcWeight={setCalcWeight} calcAge={calcAge} setCalcAge={setCalcAge} setActiveTab={setActiveTab} />}

              <footer className="bg-slate-50 text-[#034E72] pt-16 text-left border-t border-white">
                <div className="max-w-7xl mx-auto mb-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <div className="text-xl font-extrabold text-[#034E72]">CA Network</div>
                    <p className="text-xs leading-relaxed text-[#034E72]">
                      為您生活添色彩
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#034E72] text-xs font-bold uppercase tracking-widest mb-4">教育體系</h4>
                    <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                      <li><button onClick={() => setActiveTab('academy')} className="hover:text-white transition-colors">基礎家庭營養班</button></li>
                      <li><button onClick={() => setActiveTab('academy')} className="hover:text-white transition-colors">CA Fitness 體重管理計畫</button></li>
                      <li><button onClick={() => setActiveTab('academy')} className="hover:text-white transition-colors">心血管健康管理專題班</button></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">關於我們</h4>
                    <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                      <li><button onClick={() => setActiveTab('leaders')} className="hover:text-white transition-colors">導師名人堂</button></li>
                      <li><button onClick={() => setActiveTab('highlights')} className="hover:text-white transition-colors">活動花絮</button></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">健康宣言</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      「大健康領域不是純粹的銷售遊戲，它是對生命的關懷。我們堅信知識是改變身體唯一的鑰匙。」
                    </p>
                  </div>
                </div>

                {/* 版權宣告 */}
                <div className="mt-8 pt-4 pb-4 border-t bg-[#034E72] border-white/5 text-center text-[11px] text-slate-400">
                  <p>Copyright © {new Date().getFullYear()} CA Network Hong Kong Limited. All rights reserved</p>
                </div>
              </footer>

            </div>
        )}

        {/* 手機 Flutter UI 模擬器渲染路由 */}
        {viewMode === 'mobile' && (
            <MobileSimulator
                mobileTab={mobileTab} setMobileTab={setMobileTab}
                setSelectedStory={setSelectedStory}
                setSelectedLeader={setSelectedLeader} setPlayingVideo={setPlayingVideo}
            />
        )}

        {/* 全域共享彈出式燈箱 */}
        <Modals selectedLeader={selectedLeader} selectedStory={selectedStory} playingVideo={playingVideo} closeModal={closeModal} />

      </div>
  );
}