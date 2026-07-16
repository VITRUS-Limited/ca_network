import { useState } from 'react';
import './App.css';

// 導入分拆後的各個獨立頁面檔案
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs.jsx";
import NutritionEducation from './pages/NutritionEducation.jsx';
import BusinessEducation from './pages/BusinessEducation.jsx';
import Highlights from './pages/Highlights';

// 導入共用組件
import Footer from './components/Footer.jsx'; // 引入全新 Footer 元件
import Modals from './components/Modals';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    // 全域燈箱彈窗狀態
    const [playingVideo, setPlayingVideo] = useState(null);

    const closeModal = () => {
        setPlayingVideo(null);
    };

    // 統一 Tab 切換與 Footer 的路由相容性引擎
    const handleTabChange = (tab) => {
        const mappedTab = tab === 'about' ? 'aboutUs' : tab;
        setActiveTab(mappedTab);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

            {/* 視圖控制切換列：隱藏手機版 (hidden)，僅在電腦版顯示 (md:flex) */}
            <div className="sticky h-12 top-0 z-50 bg-[#034E72] text-white border-b border-white/10 px-4 py-2.5 shadow-md hidden md:flex flex-col items-center justify-between gap-3">
                <div className="flex items-center gap-2"/>
            </div>

            {/* 桌面版官網渲染路由[cite: 9] */}
            <div className="animate-fadeIn">

                {/* 🎯 Header 置頂修正：手機版置頂 top-0，電腦版因有藍色控制列，置頂於 top-12 */}
                <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 md:top-12 z-40 shadow-sm border-b border-slate-100 select-none">

                    {/* ==================== Row 1: Logo 區域 ==================== */}
                    {/* 手機版：使用 flex 置中 (justify-center) 且高度縮為 h-16 */}
                    {/* 電腦版 (md:)：還原為網格排版 (grid-cols-[1fr_auto_1fr]) 且高度為 h-20 */}
                    <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-center md:justify-between">

                        {/* Logo[cite: 9] */}
                        <div className="flex justify-center md:justify-start w-full md:w-auto">
                            <div
                                onClick={() => handleTabChange('home')}
                                className="flex items-center cursor-pointer"
                            >
                                <img
                                    src="/CA logo landscape.png"
                                    alt="CA Network Logo"
                                    className="w-36 md:w-40 h-auto object-contain shrink-0 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* 💻 電腦版導航 Tab (手機版隱藏: hidden md:flex) */}
                        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold text-slate-500">
                            {['home', 'aboutUs', 'nutrition', 'business', 'highlights'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
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

                        {/* 右側平衡容器 (僅在電腦版顯示，防止手機版置中時產生偏移) */}
                        <div className="hidden md:flex justify-end">
                            <div className="flex items-center gap-3" />
                        </div>

                    </div>

                    {/* ==================== Row 2: 📱 手機版專屬 App 風格導航 Bar ==================== */}
                    {/* 手機版顯示 (flex md:hidden)，支援水平滾動 (overflow-x-auto)，隱藏原生滾動條 (scrollbar-none) */}
                    <nav
                        className="flex md:hidden items-center justify-start gap-6 text-xs font-bold text-slate-500 border-t border-slate-100 px-6 py-2.5 overflow-x-auto whitespace-nowrap bg-white/95"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {['home', 'aboutUs', 'nutrition', 'business', 'highlights'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`pb-1.5 relative transition-colors shrink-0 ${activeTab === tab ? 'text-[#034E72] font-extrabold' : 'text-slate-400'}`}
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
                            className="pb-1.5 transition-colors shrink-0 text-slate-400"
                        >
                            e-Learning
                        </a>
                    </nav>

                </header>

                {/* 頁面路由分流，並將 tab 變更函式統一傳遞[cite: 9] */}
                {activeTab === 'home' && <Home setActiveTab={handleTabChange} setPlayingVideo={setPlayingVideo} />}
                {activeTab === 'aboutUs' && <AboutUs/>}
                {activeTab === 'nutrition' && <NutritionEducation />}
                {activeTab === 'business' && <BusinessEducation setPlayingVideo={setPlayingVideo} />}
                {activeTab === 'highlights' && <Highlights setPlayingVideo={setPlayingVideo} />}

                {/* 渲染全新高階智能 Footer */}
                <Footer setActiveTab={handleTabChange} />

            </div>


            {/* 全域共享彈出式燈箱[cite: 9] */}
            <Modals playingVideo={playingVideo} closeModal={closeModal} />

        </div>
    );
}