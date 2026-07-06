import { useState, useEffect } from 'react';
import { Atom, Award, ChevronRight, Activity, BookOpen, Users, TrendingUp, ArrowUpRight, Play } from 'lucide-react';
import { SUCCESS_STORIES, HIGHLIGHTS } from '../data/mockData.js';

const TRUST_SLIDES = [
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS2.jpg?alt=media&token=49e38b20-2915-4ec2-b242-3665549599d2",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS3.JPG?alt=media&token=fca92ee4-684c-4437-aa26-198688867b80",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAQ%20opening.jpg?alt=media&token=aafbc721-1706-4557-ad99-e8d3839297ae",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition.jpg?alt=media&token=bf6c3af8-a2c6-4633-ae3b-c725101c3a24",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20class%201.JPG?alt=media&token=9171698d-687f-48f3-8c86-2dc6dc695bc4",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.png?alt=media&token=d605da43-7769-4c63-8594-609f74f1b4c9",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Next%20Beach.jpg?alt=media&token=8554df80-70b5-4d5e-ae31-a537d0b75aa8",
    "https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Elite.jpg?alt=media&token=35434884-ef58-400d-a072-583f2479c388",

];

export default function Home({ setActiveTab, setPlayingVideo, setSelectedStory }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % TRUST_SLIDES.length);
        }, 3000); // 每 3 秒自動切換一張
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative bg-[#034E72] text-white pt-16 pb-24 overflow-hidden">
                {/* Background Deco */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8D333]/10 rounded-full filter blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6 text-left relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                            <Award size={14} className="text-[#B8D333]" />
                            <span className="text-xs font-semibold tracking-wide text-slate-100">深耕香港 40 載 · 展望全球大健康市場</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            為您生活添色彩 <br />
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
                    </div>

                    {/* 右側影片網格 */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
                        <div className="absolute inset-0 bg-radial-gradient from-[#B8D333]/15 to-transparent filter blur-2xl -z-10"></div>
                        <div onClick={() => setPlayingVideo(HIGHLIGHTS[0])} className="col-span-8 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 cursor-pointer animate-fadeIn">
                            <video
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fca_network_introduction_video.mp4?alt=media&token=dfda5eb9-81d1-4bf8-ac29-db5a77ceeb4b" //
                                autoPlay      // 自動播放
                                muted         // 必須靜音，否則會被瀏覽器封鎖
                                loop          // 無限循環播放
                                playsInline   // 防止 iPhone/iOS 自動彈出全螢幕播放，維持在格子內
                                className="w-full h-full object-cover opacity-75"
                            />
                            {/*<div className="absolute inset-0 bg-gradient-to-t from-[#034E72]/85 to-transparent"></div>*/}
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[10px] uppercase font-bold text-white bg-[#034E72]/60 px-2 py-0.5 rounded backdrop-blur-sm">關於我們</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
                                <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />
                            </div>
                        </div>
                        <div className="col-span-4 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20office.jpg?alt=media&token=3a535bab-5b9f-4b0f-a08f-bdeda38d9f01" alt="耀升總部開幕" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100">CAQ 耀升總部啟幕</div>
                        </div>
                        <div className="col-span-4 h-56 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Next.jpg?alt=media&token=3c230e67-6d7a-4a3f-9c9d-d17ba63bd57c" alt="年輕團隊" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100">CA Next 年輕團隊</div>
                        </div>
                        <div className="col-span-8 h-56 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCANA.jpg?alt=media&token=1100222c-b04a-4348-869a-2920dd84d07c" alt="耀升國際營養師聯會" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span className="text-[10px] font-bold text-slate-100">CANA 耀升國際營養師聯會</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="relative py-24 overflow-hidden min-h-150 flex items-center">

                {/* 背景 Slideshow 容器 */}
                <div className="absolute inset-0 z-0">
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
                    {/* 🎯 關鍵：深色半透明遮罩，確保上方白色文字清晰可讀 */}
                    <div className="absolute inset-0 bg-[#034E72]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-linear-to-b from-[#034E72]/50 via-transparent to-[#034E72]/50"></div>
                </div>

                {/* 內容區塊 (需設定 z-10 以浮在背景之上) */}
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
                    <div className="inline-block text-[#B8D333] font-black tracking-widest text-xs bg-white/5 backdrop-blur-lg px-4 py-1.5 rounded-full mb-6 border border-[#B8D333]/30">
                        THE LEGACY & TRUST · 傳承與信任
                    </div>

                    <p className="text-slate-200 mt-4 text-lg leading-relaxed max-w-7xl mx-auto drop-shadow-md">
                        在過去的 40 年間，我們透過分享健康創富的經驗，凝聚社會各階層，激勵大家相信和突破自己，創造更美好的優質生活。
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-left space-y-4 hover:bg-white/20 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold">40年教案打磨</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                融合頂尖營養學與香港在地飲食習慣，發展出具備高度執行性的知識地圖。
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-left space-y-4 hover:bg-white/20 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold">小班督導共學機制</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                學員在直銷導師引導下組成群組拍照打卡，完成知行合一的日常飲食健康習慣。
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-left space-y-4 hover:bg-white/20 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-[#B8D333] flex items-center justify-center text-[#034E72] shadow-lg group-hover:scale-110 transition-transform">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-bold">專業導師商業賦能</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                當您重塑自己的健康，團隊系統能輔能您開啟終身受人尊敬的大健康展業之路。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CA FITNESS STORIES SECTION */}
            <section className="py-20 bg-slate-50 border-t border-slate-100 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div className="space-y-2">
                            <div className="inline-block text-[#034E72] font-black text-xs bg-[#B8D333]/30 px-3 py-1 rounded-full">FLAGSHIP PROGRAM · 皇牌體重管理</div>
                            <h2 className="text-3xl font-black text-slate-900">CA Fitness 體重管理：科學控體，找回自信</h2>
                        </div>
                        <button onClick={() => setActiveTab('academy')} className="text-[#034E72] font-extrabold text-sm hover:text-[#B8D333] transition-colors flex items-center gap-1.5">
                            查看健康班簡介 <ChevronRight size={16} />
                        </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {SUCCESS_STORIES.map((story) => (
                            <div key={story.id} onClick={() => setSelectedStory(story)} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
                                <img src={story.image} alt={story.name} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-[#034E72] bg-[#034E72]/5 px-2.5 py-1 rounded-full">{story.period}</span>
                                        <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#B8D333] transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                                    <p className="text-xs text-[#034E72] font-semibold">「{story.quote}」</p>
                                    <p className="text-xs text-slate-500 line-clamp-2">{story.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}