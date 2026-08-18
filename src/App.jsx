import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import AboutUs from "./pages/AboutUs.jsx";
import NutritionEducation from './pages/NutritionEducation.jsx';
import BusinessEducation from './pages/BusinessEducation.jsx';
import Highlights from './pages/Highlights';

import Footer from './components/Footer.jsx';
import Modals from './components/Modals';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [playingVideo, setPlayingVideo] = useState(null);

    const closeModal = () => {
        setPlayingVideo(null);
    };

    const handleTabChange = (tab) => {
        const mappedTab = tab === 'about' ? 'aboutUs' : tab;
        setActiveTab(mappedTab);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">

            <div className="sticky h-12 top-0 z-50 bg-[#034E72] text-white border-b border-white/10 px-4 py-2.5 shadow-md flex flex-col items-center justify-between gap-3">
                <div className="flex items-center gap-2"/>
            </div>

            <div className="animate-fadeIn">

                <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 md:top-12 z-40 shadow-sm border-b border-slate-100 select-none">

                    {/* 🎯 Row 1: Logo 區域 (加入 Safe Area 與響應式 Padding) */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] h-16 md:h-20 relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-center md:justify-between">

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

                        <div className="hidden md:flex justify-end">
                            <div className="flex items-center gap-3" />
                        </div>

                    </div>

                    {/* 🎯 Row 2: 手機版 Tab Bar (加入 Safe Area Padding) */}
                    <nav
                        className="flex md:hidden items-center justify-start gap-6 text-xs font-bold text-slate-500 border-t border-slate-100 px-4 sm:px-6 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] py-2.5 overflow-x-auto whitespace-nowrap bg-white/95"
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

                {activeTab === 'home' && <Home setActiveTab={handleTabChange} setPlayingVideo={setPlayingVideo} />}
                {activeTab === 'aboutUs' && <AboutUs/>}
                {activeTab === 'nutrition' && <NutritionEducation />}
                {activeTab === 'business' && <BusinessEducation setPlayingVideo={setPlayingVideo} />}
                {activeTab === 'highlights' && <Highlights setPlayingVideo={setPlayingVideo} />}

                <Footer setActiveTab={handleTabChange} />

            </div>

            <Modals playingVideo={playingVideo} closeModal={closeModal} />

        </div>
    );
}