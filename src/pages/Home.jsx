import { useState, useEffect, useRef } from 'react';
import { Atom, Award, ChevronRight, Activity, BookOpen, Users, TrendingUp, Play } from 'lucide-react';
import { VIDEOS } from '../data/Database.js';

// ==================== 滾動視差動畫包裹元件 ====================
const FadeUpSection = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 確保動畫只觸發一次
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px" // 當元素稍微進入視窗底部 50px 時觸發
        });

        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={`transform-gpu transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const TRUST_SLIDES = [
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS2.jpg?alt=media&token=6be0bc94-e40c-4cdd-8ac2-d7aa87a67da9",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS1.JPG?alt=media&token=d1b96e08-ebbd-4a2a-b391-40fff2355ffc",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutritionist%202020.jpeg?alt=media&token=9005a74d-3db5-4f53-843f-3b6236dca934",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAQ%20opening.jpg?alt=media&token=aafbc721-1706-4557-ad99-e8d3839297ae",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition.jpg?alt=media&token=bf6c3af8-a2c6-4633-ae3b-c725101c3a24",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.png?alt=media&token=d605da43-7769-4c63-8594-609f74f1b4c9",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Next.jpg?alt=media&token=3c230e67-6d7a-4a3f-9c9d-d17ba63bd57c",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS4.png?alt=media&token=5db4cbb1-5b37-43ae-b21e-7494b577283c",
];

export default function Home({ setActiveTab, setPlayingVideo }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % TRUST_SLIDES.length);
        }, 3000); // 每 3 秒自動切換一張
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="overflow-hidden">
            {/* ==================== HERO SECTION ==================== */}
            <section className="relative bg-[#034E72] text-white pt-16 pb-24 overflow-hidden">
                {/* Background Deco */}
                <div id="trust-pillars" className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8D333]/10 rounded-full filter blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">

                    {/* 左側：文案區 */}
                    <FadeUpSection className="lg:col-span-5 space-y-6 text-left relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                            <Award size={14} className="text-[#B8D333]" />
                            <span className="text-xs font-semibold tracking-wide text-slate-100">深耕香港 40 載 · 展望全球大健康市場</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">為您生活添色彩 <br />
                            <span className="text-[#B8D333] relative inline-block mt-2">
                                Helping people live better, healthier lives
                                <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-[#B8D333]/20 rounded"></span>
                            </span>
                        </h1>
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                            CA Network 創立四十餘年，透過豐富紮實的創富經驗和專業實用的營養知識，帶領伙伴深耕大健康市場。透過分享個人及家庭的健康改善經驗，我們共同建立一份永續、有保障及持續增長的資產性收入，同時實現財富、時間、健康自由。
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setActiveTab('nutrition')} className="bg-[#B8D333] hover:bg-[#9fb824] text-[#034E72] px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group accent-pulse">
                                <Activity size={16} className="text-[#034E72]" />
                                了解 健康教育
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => setActiveTab('business')} className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2">
                                <Atom size={16} className="text-white" />
                                了解 創業教育
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">40 年+</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">深耕健康創業教育</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">10 萬+</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">學員家人健康重塑</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">300 場+</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">每年精彩豐富活動</div>
                            </div>
                        </div>
                    </FadeUpSection>

                    {/* 右側：影片網格 */}
                    <FadeUpSection delay={150} className="lg:col-span-7">
                        <div className="grid grid-cols-12 gap-4 relative">
                            <div className="absolute inset-0 bg-radial-gradient from-[#B8D333]/15 to-transparent filter blur-2xl -z-10"></div>

                            {/* 第一影格 */}
                            <div onClick={() => setPlayingVideo(VIDEOS[0])} className="col-span-8 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 cursor-pointer overflow-hidden relative group">
                                <video
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fca_network_introduction_video.mp4?alt=media&token=dfda5eb9-81d1-4bf8-ac29-db5a77ceeb4b"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-85"
                                />
                                <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-[10px] uppercase font-bold text-white">認識 CA Network</span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 z-20">
                                    <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />
                                </div>
                            </div>

                            {/* 第二影格 */}
                            <div className="col-span-4 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20office%20small.jpg?alt=media&token=6ae1fac9-e793-40ba-b644-45753b37a3c9"
                                    alt="耀升總部開幕" className="w-full h-full object-cover opacity-85 [image-rendering:-webkit-optimize-contrast]"
                                />
                                <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100 z-10">CAQ 耀升總部啟幕</div>
                            </div>

                            {/* 第三影格 */}
                            {/*<div className="col-span-4 h-52 video-grid-card rounded-2xl shadow-xl bg-slate-800 overflow-hidden relative">*/}
                            {/*    <img*/}
                            {/*        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita-Clement%203%20small.jpg?alt=media&token=3892394b-19c4-4f09-81f4-e4d54d778eb1"*/}
                            {/*        alt="Anita-Clement FCA2015" className="w-full h-full object-cover opacity-85 [image-rendering:-webkit-optimize-contrast]"*/}
                            {/*    />*/}
                            {/*    <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100 z-10">CA Network 創辦人分享</div>*/}
                            {/*</div>*/}
                            <div className="col-span-4 h-52 video-grid-card rounded-2xl shadow-xl bg-slate-800 overflow-hidden relative">
                                {/* 💻 電腦版照片：在 md (768px) 以上顯示，小螢幕 (手機) 隱藏 */}
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita-Clement%203%20small.jpg?alt=media&token=3892394b-19c4-4f09-81f4-e4d54d778eb1"
                                    alt="Anita Clement Sharing landscape"
                                    className="hidden md:block w-full h-full object-cover"
                                />
                                {/* 📱 手機版照片：在 md 以上隱藏，小螢幕 (手機) 顯示 */}
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita%20Clement%20sharing%202.jpg?alt=media&token=74a0f619-a1c1-40e1-94d7-cacb102b908b"
                                    alt="Anita Clement Sharing portrait"
                                    className="block md:hidden w-full h-full object-cover"
                                />
                                <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100 z-10">CA Network 創辦人分享</div>
                            </div>

                            {/* 第四影格 */}
                            <div onClick={() => setPlayingVideo(VIDEOS[1])} className="col-span-8 h-52 video-grid-card rounded-2xl shadow-xl bg-slate-800 cursor-pointer overflow-hidden relative group">
                                <video
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FFCA%20Anta%20Clement%20YT.mp4?alt=media&token=0afb19eb-3d39-406c-bcd8-a4a9daa47d1d#t=8"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-85"
                                />
                                <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                                    <span className="w-2 h-2 rounded-full bg-[#B8D333] animate-pulse"></span>
                                    <span className="text-[10px] uppercase font-bold text-white">CA Network 創辦人分享</span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 z-20">
                                    <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />
                                </div>
                            </div>
                        </div>
                    </FadeUpSection>
                </div>
            </section>

            {/* ==================== TRUST SECTION ==================== */}
            <section className="relative py-24 overflow-hidden min-h-150 flex items-center">

                {/* 背景 Slideshow 容器 */}
                <div className="absolute inset-0 z-0 opacity-85">
                    {TRUST_SLIDES.map((url, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img
                                src={url}
                                className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_infinite]"
                                alt="CA History"
                            />
                        </div>
                    ))}
                    {/* 深色半透明遮罩 */}
                    <div className="absolute inset-0 bg-[#034E72]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-b from-[#034E72]/50 via-transparent to-[#034E72]/50"></div>
                </div>

                {/* 內容區塊 */}
                <div id="video-gallery" className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">

                    <FadeUpSection>
                        <div className="inline-block text-[#B8D333] font-black tracking-widest text-xs bg-white/5 backdrop-blur-lg px-4 py-1.5 rounded-full mb-6 border border-[#B8D333]/30">
                            WELLNESS & FUTURE  ‧  健康與未來
                        </div>

                        <p className="text-slate-200 mt-4 text-lg leading-relaxed max-w-7xl mx-auto drop-shadow-md">
                            讓健康成為日常，讓突破成為力量。攜手同行，活出更精彩的人生。
                        </p>
                    </FadeUpSection>

                    {/* 🎯 關鍵變更：這三個 Box 的磨砂背景、模糊和邊框預設全部隱藏 (bg-white/0 backdrop-blur-none border-transparent) */}
                    {/* 🎯 當滑鼠停上去時 (hover:)，才會優雅過渡顯現 (hover:bg-white/10 hover:backdrop-blur-md hover:border-white/15) */}
                    <FadeUpSection delay={150}>
                        <div className="grid md:grid-cols-3 gap-12 mt-16">

                            {/* 卡片 1 */}
                            <div className="p-8 rounded-3xl bg-white/0 backdrop-blur-none border border-transparent text-left space-y-4 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/15 transition-all duration-500 ease-out group cursor-pointer">
                                <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold">專業沉澱 ‧ 實踐健康</h3>
                                <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                    結合頂尖營養科學與香港在地生活習慣，我們打造出高效、易實踐的健康知識地圖。40 年來，已陪伴無數在地個案成功轉變，用真實成果印證專業。
                                </p>
                            </div>

                            {/* 卡片 2 */}
                            <div className="p-8 rounded-3xl bg-white/0 backdrop-blur-none border border-transparent text-left space-y-4 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/15 transition-all duration-500 ease-out group cursor-pointer">
                                <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold">共創 ‧ 共享 ‧ 共嬴</h3>
                                <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                    結合團隊的多元優勢與大健康市場的豐厚資源，我們共享市場資訊、技術支援與創業培訓，透過緊密的團隊協作，共同開拓市場版圖，共享回報與成果。
                                </p>
                            </div>

                            {/* 卡片 3 */}
                            <div className="p-8 rounded-3xl bg-white/0 backdrop-blur-none border border-transparent text-left space-y-4 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/15 transition-all duration-500 ease-out group cursor-pointer">
                                <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <TrendingUp size={24} />
                                </div>
                                <h3 className="text-xl font-bold">培育領袖 ‧ 助人自助</h3>
                                <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                    我們建立系統化的培訓與孵化機制，將成功的創業經驗轉化為可複製的系統，在協助夥伴提升自我能力的同時，也能帶領他人前進，實現互利共贏。
                                </p>
                            </div>

                        </div>
                    </FadeUpSection>
                </div>
            </section>
        </div>
    );
}