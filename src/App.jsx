import { useState } from 'react';
import './App.css';

// 導入分拆後的各個獨立頁面檔案[cite: 9]
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs.jsx";
import NutritionEducation from './pages/NutritionEducation.jsx';
import BusinessEducation from './pages/BusinessEducation.jsx';
import Highlights from './pages/Highlights';
import MobileSimulator from './pages/MobileSimulator';

// 導入共用組件[cite: 9]
import Footer from './components/Footer.jsx'; // 👈 1. 引入全新 Footer 元件
import Modals from './components/Modals';
// import { Monitor, Smartphone } from 'lucide-react';

export default function App() {
    // const [viewMode, setViewMode] = useState('desktop');
    const viewMode = 'desktop';
    const [activeTab, setActiveTab] = useState('home');
    const [mobileTab, setMobileTab] = useState('home');

    // 全域燈箱彈窗狀態[cite: 9]
    const [playingVideo, setPlayingVideo] = useState(null);

    const closeModal = () => {
        setPlayingVideo(null);
    };

    // 👈 2. 新增：統一 Tab 切換與 Footer 的路由相容性引擎
    const handleTabChange = (tab) => {
        const mappedTab = tab === 'about' ? 'aboutUs' : tab;
        setActiveTab(mappedTab);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

            {/* 視圖控制切換列 */}
            <div className="sticky h-12 top-0 z-50 bg-[#034E72] text-white border-b border-white/10 px-4 py-2.5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2"/>
                {/*<div className="flex items-center bg-slate-900/40 p-1 rounded-xl border border-white/10">*/}
                {/*    <button onClick={() => setViewMode('desktop')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'desktop' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Monitor size={14} />桌面官網</button>*/}
                {/*    <button onClick={() => { setViewMode('mobile'); setMobileTab('home'); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'mobile' ? 'bg-[#B8D333] text-slate-950' : 'text-slate-300'}`}><Smartphone size={14} />Flutter App 模擬</button>*/}
                {/*</div>*/}
            </div>

            {/* 桌面版官網渲染路由[cite: 9] */}
            {viewMode === 'desktop' && (
                <div className="animate-fadeIn">
                    <header className="w-full bg-white/95 backdrop-blur-md sticky top-13.25 z-40 shadow-sm border-b border-slate-100 select-none">
                        <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-[1fr_auto_1fr] items-center">

                            {/* Logo[cite: 9] */}
                            <div className="flex justify-start">
                                <div
                                    onClick={() => handleTabChange('home')}
                                    className="flex items-center cursor-pointer"
                                >
                                    <img
                                        src="/CA logo landscape.png"
                                        alt="CA Network Logo"
                                        className="w-40 h-auto object-contain shrink-0 rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Tab[cite: 9] */}
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

                            {/* 右側平衡[cite: 9] */}
                            <div className="flex justify-end">
                                <div className="flex items-center gap-3" />
                            </div>

                        </div>
                    </header>

                    {/* 頁面路由分流，並將 tab 變更函式統一傳遞[cite: 9] */}
                    {activeTab === 'home' && <Home setActiveTab={handleTabChange} setPlayingVideo={setPlayingVideo} />}
                    {activeTab === 'aboutUs' && <AboutUs/>}
                    {activeTab === 'nutrition' && <NutritionEducation />}
                    {activeTab === 'business' && <BusinessEducation setPlayingVideo={setPlayingVideo} />}
                    {activeTab === 'highlights' && <Highlights setPlayingVideo={setPlayingVideo} />}

                    {/* 👈 3. 取代舊的 <footer>，渲染全新高階智能 Footer */}
                    <Footer setActiveTab={handleTabChange} />

                </div>
            )}

            {/* 手機 Flutter UI 模擬器渲染路由[cite: 9] */}
            {viewMode === 'mobile' && (
                <MobileSimulator
                    mobileTab={mobileTab} setMobileTab={setMobileTab} setPlayingVideo={setPlayingVideo}
                />
            )}

            {/* 全域共享彈出式燈箱[cite: 9] */}
            <Modals playingVideo={playingVideo} closeModal={closeModal} />

        </div>
    );
}