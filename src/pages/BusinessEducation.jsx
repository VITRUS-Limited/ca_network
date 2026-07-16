import { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Zap, Gem, Laptop, ExternalLink } from 'lucide-react';
// import { LEADERS_FACULTY } from "../data/Database.js";
// import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
// import { VIDEOS } from "../data/Database.js"

// ==================== 新增：滾動視差動畫包裹元件 ====================
// 這個元件會偵測自己是否進入視窗範圍，進入後自動加上向上浮現的 Tailwind Class
const FadeUpSection = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // 當元素進入畫面 15% 時觸發動畫
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 觸發後解除觀察，確保只彈出一次
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px" // 讓元素稍微進入畫面底部多一點才觸發，視覺效果更好
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

// export default function BusinessEducation({ setPlayingVideo }) {
    // const [currLeader, setCurrLeader] = useState(0);
    // const totalLeaders = LEADERS_FACULTY.length;
    //
    // // 領袖輪播：每 3.5 秒自動流暢切換
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrLeader((prev) => (prev + 1) % totalLeaders);
    //     }, 3500);
    //     return () => clearInterval(timer);
    // }, [totalLeaders]);
    //
    // const handlePrev = () => {
    //     setCurrLeader((prev) => (prev - 1 + totalLeaders) % totalLeaders);
    // };
    // const handleNext = () => {
    //     setCurrLeader((prev) => (prev + 1) % totalLeaders);
    // };

export default function BusinessEducation() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-left space-y-14 bg-slate-50/30 overflow-hidden">

            {/* ==================== 01. 頂部標題區 ==================== */}
            <FadeUpSection>
                <div className="max-w-5xl relative">
                    <span className="inline-block text-s font-black tracking-widest text-white bg-[#034E72] border-white/50 px-4 py-1.5 rounded-md uppercase shadow-sm">
                        把握現在，擁抱將來，成就非凡人生
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900! tracking-tight leading-none [webkit-text-fill-color:initial] [text-fill-color:initial] mt-4">
                        耀升大健康創業與領袖培育系統
                    </h1>
                    <p className="text-slate-500 text-balance md:text-lg leading-relaxed max-w-5xl mt-6">
                        選擇正確的賽道，是輕資產創業時代走向成功的關鍵第一步。CA Network 歷經 40 年的市場淬鍊，將複雜的創業流程化繁為簡，建構出成熟、穩定且可複製的「大健康輕創業系統」。多年來，藉由系統的全面支援，我們協助無數創業者告別單打獨鬥，每年都見證並培育出一批批卓越的領袖，為自己、家人乃至整個團隊，開創出更高品質的生活與事業新格局。
                    </p>
                </div>
            </FadeUpSection>

            {/* ==================== 02. 三大核心創業課程 ==================== */}
            <FadeUpSection delay={100}>
                <div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* PTC 卡片 */}
                        <div id="ptc-course" className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative">
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#034E72] z-20"></div>
                            <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FLogo-PTC.jpg?alt=media&token=1c81b1b5-4904-4d64-9c69-b977388e0133"
                                    alt="PTC"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_101%,101%_101%,101%_0)]"></div>
                            </div>
                            <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="space-y-3">
                                    <div className="text-[12px] font-black tracking-widest text-[#034E72] uppercase bg-[#034E72]/5 px-2.5 py-1 rounded w-fit">思維認知 ‧ 核心技能</div>
                                    <h3 className="text-2xl font-black text-slate-800">專業培訓班 PTC</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1"> 最好的創業，是把熱愛的事情做到極致。專業培訓班協助學員裝備必備的創業思維與實操技能，讓建立事業的過程變得自然且豐盛。透過學習前人累積的成功流程，融入溫暖且具凝聚力的創辦人理念，我們不再是單打獨鬥。一起把對健康的追求，化為建立個人事業、成就美好生活的起點！</p>
                                </div>
                                <ul className="space-y-2 text-xs font-bold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>創業思維與心法</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>成功流程與實操技能</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>融入團隊和公司文化理念</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* ADD 卡片 */}
                        <div id="add-course" className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative md:-translate-y-4">
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#B8D333] z-20"></div>
                            <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FLogo-ADD.jpg?alt=media&token=c2aa6421-4c3a-4133-9309-0547ed9be1c2"
                                    alt="ADD"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_101%,101%_101%,101%_0)]"></div>
                            </div>
                            <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="space-y-3">
                                    <div className="text-[12px] font-black tracking-widest text-[#034E72] uppercase bg-[#B8D333]/30 px-2.5 py-1 rounded w-fit">訂定目標 ‧ 建立團隊</div>
                                    <h3 className="text-2xl font-black text-slate-800">達標精英班 ADD</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1">當身後開始有了並肩作戰的夥伴，領導的責任與榮譽便隨之而來。達標精英班旨在協助已成功起步的事業夥伴重新校準人生藍圖，訂定具體且具感召力的團隊目標。課程將專注於培育夥伴的目標感，以及學會如何用行動引領新人，從一個人前行，蛻變為攜手團隊共創大健康未來的領袖典範。</p>
                                </div>
                                <ul className="space-y-2 text-xs font-bold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>從設定目標到完成目標</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>建立小團隊的初階領導力</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>建立團隊協作的思維和能力</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* LTC 卡片 */}
                        <div id="ltc-course" className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative">
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-slate-950 z-20"></div>
                            <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FLogo-LTC.jpg?alt=media&token=350ba4d8-5b40-4267-9fa2-e813e7c483d6"
                                    alt="LTC"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_101%,101%_101%,101%_0)]"></div>
                            </div>
                            <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="space-y-3">
                                    <div className="text-[12px] font-black tracking-widest text-white uppercase bg-slate-900 px-2.5 py-1 rounded w-fit">培育領袖 ‧ 提升格局</div>
                                    <h3 className="text-2xl font-black text-slate-800">領導力培訓課程 LTC</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1">站在穩健發展的事業新高點，下一步的卓越在於「裂變與複製」。領導力培訓課程致力於培育具備全面統籌能力的領袖，聚焦於人才發掘與梯隊建構，讓潛力種子蛻變為未來的領袖。課程深化學員「以身作則，以行克難」的觀念，將個人的願景轉化為整個團隊不懈追求並誓必達成的共同目標。</p>
                                </div>
                                <ul className="space-y-2 text-xs font-bold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>建立團隊核心領導力</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>從個人目標邁向團隊目標</span></li>
                                    <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>以身作則成為團隊的榜樣和希望</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeUpSection>

            {/* ==================== 03. 年度大會 Highlight ==================== */}
            <FadeUpSection delay={150}>
                <div id="mega-event" className="relative rounded-[40px] overflow-hidden shadow-2xl min-h-120 flex items-center bg-slate-950 group">
                    <div className="absolute inset-0">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FMUS2.jpg?alt=media&token=6be0bc94-e40c-4cdd-8ac2-d7aa87a67da9"
                            alt="CA Annual Convention"
                            className="w-full h-full object-cover opacity-35 transition-transform duration-1000 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#022336] via-[#034E72]/90 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl p-8 md:p-16 space-y-6 text-white text-left">
                        <div className="inline-flex items-center gap-2 bg-[#B8D333] text-[#034E72] px-3.5 py-1.5 rounded-md text-xs font-black uppercase tracking-widest shadow-lg">
                            <Calendar size={14} />
                            <span>Annual Mega Event · 年度盛典</span>
                        </div>

                        <h2 className="text-3xl! md:text-4xl! mb-3! font-bold text-white tracking-tight leading-tight drop-shadow-md">
                            耀升年度盛典 Moving Up Seminar
                        </h2>

                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            時代的風口由強者定義，改變的契機由智者把握。耀升年度盛典匯聚全港最具前瞻性的事業夥伴，更邀請耀升核心領袖陣容與海外星級嘉賓親臨現場。這是一場智慧與榮譽的交織，您將親眼見證一個又一個透過平台改寫人生軌跡、實現豐盛生活的真實傳奇。在這裡，我們看見榜樣的力量；在別人的故事裡找到屬於自己的事業啟示與破局信心。我們汲取前行最堅實的底氣與信心，看清大健康產業的宏大未來，並在這場盛宴中，定位下一個領袖座標。
                        </p>

                        <div className="flex flex-wrap gap-4 text-xs font-bold pt-6">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                                <Award size={15} className="text-[#B8D333]" />
                                <span>匯聚星級智慧，見證成就非凡</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                                <Gem size={15} className="text-[#B8D333]" />
                                <span>點燃心中夢想，跨越領袖格局</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUpSection>

            {/*/!* ==================== 04. 動態秒轉領袖名人堂 ==================== *!/*/}
            {/*<FadeUpSection delay={150}>*/}
            {/*    <div id="biz-mentors" className="border-t border-slate-200/60 pt-16 space-y-8 relative">*/}
            {/*        <div className="flex justify-between items-end">*/}
            {/*            <div className="space-y-3">*/}
            {/*                <span className="inline-block text-xs font-black text-white uppercase tracking-wider bg-slate-900 px-3 py-1 rounded">*/}
            {/*                    Elite Mentor Matrix · 優秀導師矩陣*/}
            {/*                </span>*/}
            {/*                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">*/}
            {/*                    耀升系統菁英導師團*/}
            {/*                </h3>*/}
            {/*            </div>*/}
            {/*            <div className="flex gap-2.5 z-10">*/}
            {/*                <button onClick={handlePrev} className="p-3 rounded-full bg-slate-900 text-white hover:bg-[#034E72] transition-all shadow-md active:scale-95">*/}
            {/*                    <ChevronLeft size={16} />*/}
            {/*                </button>*/}
            {/*                <button onClick={handleNext} className="p-3 rounded-full bg-slate-900 text-white hover:bg-[#034E72] transition-all shadow-md active:scale-95">*/}
            {/*                    <ChevronRight size={16} />*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="w-full overflow-hidden rounded-4xl py-4 px-1">*/}
            {/*            <div*/}
            {/*                style={{*/}
            {/*                    transform: `translateX(calc(-1 * ${currLeader * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%))`*/}
            {/*                }}*/}
            {/*                className="flex transition-transform duration-500 ease-in-out will-change-transform"*/}
            {/*            >*/}
            {/*                {LEADERS_FACULTY.map((faculty) => (*/}
            {/*                    <div key={faculty.id} className="w-full md:w-1/3 shrink-0 px-3">*/}
            {/*                        <div className="bg-linear-to-b from-slate-800 via-slate-800 to-slate-950 border border-slate-800/80 rounded-[28px] p-5 flex flex-col min-h-102.5 justify-between relative group overflow-hidden transition-all duration-500 ease-out hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.25)]">*/}

            {/*                            <div className="w-full h-52 bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5 shrink-0 transition-colors duration-500">*/}
            {/*                                <img*/}
            {/*                                    src={faculty.image}*/}
            {/*                                    alt={faculty.name}*/}
            {/*                                    className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transform-gpu group-hover:scale-102 transition-transform duration-700 ease-out"*/}
            {/*                                />*/}
            {/*                            </div>*/}

            {/*                            <div className="flex-1 flex flex-col justify-between pt-6 text-left relative z-10">*/}
            {/*                                <div className="space-y-3">*/}
            {/*                                    <div className="flex items-center gap-3">*/}
            {/*                                        <h4 className="text-2xl font-black text-white tracking-tight group-hover:text-[#B8D333] transition-colors duration-300">*/}
            {/*                                            {faculty.name}*/}
            {/*                                        </h4>*/}
            {/*                                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8D333] shadow-[0_0_8px_#B8D333]"></span>*/}
            {/*                                    </div>*/}

            {/*                                    <p className="text-xs text-slate-400 font-medium leading-relaxed tracking-wide">*/}
            {/*                                        {faculty.title.replace('註冊營養師', '頂級商業教練').replace('健康教育', '商業展業賦能')}*/}
            {/*                                    </p>*/}
            {/*                                </div>*/}

            {/*                                <div className="border-t border-slate-900 pt-4 mt-5 flex items-center justify-between">*/}
            {/*                                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold tracking-wider">*/}
            {/*                                        <Gem size={13} className="text-[#B8D333] shrink-0" />*/}
            {/*                                        <span className="text-slate-400 group-hover:text-slate-300 transition-colors"></span>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}

            {/*                            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#B8D333]/5 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>*/}
            {/*                            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#034E72]/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</FadeUpSection>*/}

            {/*/!* ==================== 05. 市場分眾矩陣 ==================== *!/*/}
            {/*<FadeUpSection delay={150}>*/}
            {/*    <div id="market-segments" className="pt-8 space-y-8">*/}
            {/*        <div className="max-w-3xl space-y-3">*/}
            {/*            <span className="inline-block text-xs font-black text-[#B8D333] uppercase tracking-widest bg-[#034E72] px-3 py-1 rounded">*/}
            {/*                Market Segmentation · 精準市場引流*/}
            {/*            </span>*/}
            {/*            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">*/}
            {/*                全域圈層精準覆蓋，引爆大健康商業複利*/}
            {/*            </h3>*/}
            {/*        </div>*/}

            {/*        <div className="grid md:grid-cols-2 gap-8">*/}

            {/*            <div className="bg-linear-to-br from-slate-700 via-slate-900 to-slate-800 border border-slate-800/60 rounded-4xl p-6 flex flex-col justify-between min-h-115 group transition-all duration-500 hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.2)]">*/}
            {/*                <div className="space-y-5">*/}
            {/*                    <div onClick={() => setPlayingVideo(VIDEOS[2])} className="cursor-pointer w-full h-96 bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5 shrink-0 select-none">*/}
            {/*                        <img*/}
            {/*                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Elite.jpeg?alt=media&token=b6be2be3-04d2-4ddc-9ca5-d1e9ce261f3c"*/}
            {/*                            alt="CA Elite"*/}
            {/*                            className="w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-700 ease-out"*/}
            {/*                        />*/}
            {/*                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">*/}
            {/*                            <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <div className="space-y-2 text-left">*/}
            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <h4 className="text-xl font-black text-white group-hover:text-[#B8D333] transition-colors">CA ELITE 中產精英會</h4>*/}
            {/*                            <span className="text-[12px] font-bold bg-[#034E72] text-slate-300 px-2 py-0.5 rounded border border-white/5">高淨值商務</span>*/}
            {/*                        </div>*/}
            {/*                        <p className="text-xs text-slate-400 leading-relaxed">*/}
            {/*                            CA Elite 是專為企業高管、商界精英及專業人士例如醫生、律師、會計師等打造的高端商務圈層。我們對接全球大健康平台，將專業閱歷轉化為輕資產創業機會，助您在收穫健康的同時，建立被動複利收入，贏回真正陪伴家庭的時間主權。*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[12px] font-bold tracking-wider text-slate-500">*/}
            {/*                    <span>品味生活 ‧ 財富翻轉</span>*/}
            {/*                    <span className="font-serif italic text-slate-700 group-hover:text-[#B8D333]/30 transition-colors">Elite Prestige</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="bg-linear-to-br from-slate-700 via-slate-900 to-slate-800 border border-slate-800/60 rounded-4xl p-6 flex flex-col justify-between min-h-115 group transition-all duration-500 hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.2)]">*/}
            {/*                <div className="space-y-5">*/}
            {/*                    <div onClick={() => setPlayingVideo(VIDEOS[3])} className="cursor-pointer w-full h-96 bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5 shrink-0 select-none">*/}
            {/*                        <img*/}
            {/*                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Next.jpg?alt=media&token=3c230e67-6d7a-4a3f-9c9d-d17ba63bd57c"*/}
            {/*                            alt="Young Entrepreneurs Next Club"*/}
            {/*                            className="w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-700 ease-out"*/}
            {/*                        />*/}
            {/*                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">*/}
            {/*                            <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                    <div className="space-y-2 text-left">*/}
            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <h4 className="text-xl font-black text-white group-hover:text-[#B8D333] transition-colors">CA NEXT 年輕創玩家</h4>*/}
            {/*                            <span className="text-[12px] font-bold bg-[#B8D333]/15 text-[#B8D333] px-2 py-0.5 rounded border border-[#B8D333]/20">創業生活化</span>*/}
            {/*                        </div>*/}
            {/*                        <p className="text-xs text-slate-400 leading-relaxed">*/}
            {/*                            CA NEXT 是專為 U35 及 Z 世代打造的輕資產創業加速器。融合多種運動與興趣的社群，將增肌減脂的健康生活轉化為自媒體 IP，無感裂變私域流量。背靠全球跨境大健康體系，一部手機即可啟動國際生意、翻轉薪水，助年輕人贏回人生的終極自主權！*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[12px] font-bold tracking-wider text-slate-500">*/}
            {/*                    <span>熱血創客 ‧ 自主人生</span>*/}
            {/*                    <span className="font-serif italic text-slate-700 group-hover:text-[#B8D333]/30 transition-colors">Future Shapers</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="bg-linear-to-br from-slate-700 via-slate-900 to-slate-800 border border-slate-800/60 rounded-4xl p-6 flex flex-col justify-between min-h-115 group transition-all duration-500 hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.25)]">*/}
            {/*                <div className="space-y-5">*/}
            {/*                    <img*/}
            {/*                        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Mum.jpg?alt=media&token=ee3260d3-3cc2-4782-970e-91fc6fb5975e"*/}
            {/*                        alt="CA Mumtrepreneur"*/}
            {/*                        className="w-full h-96 object-cover opacity-60 group-hover:scale-101 transition-transform duration-700"*/}
            {/*                    />*/}

            {/*                    <div className="space-y-2 text-left">*/}
            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <h4 className="text-xl font-black text-white group-hover:text-[#B8D333] transition-colors">CA Mumtrepreneur 創業媽媽群</h4>*/}
            {/*                            <span className="text-[12px] font-bold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-white/5">家庭支柱</span>*/}
            {/*                        </div>*/}
            {/*                        <p className="text-xs text-slate-400 leading-relaxed">*/}
            {/*                            CA Mumtrepreneur 是專為全職與職場母親打造的家庭事業孵化器。我們以精準營養與產後修復為核心，培育媽媽成為全家健康的守門員。提供低風險、時間彈性的展業舞台，讓女性在全心守護家庭的同時，也能透過一部手機輕資產創業、重拾個人事業尊嚴，優雅綻放自我價值！*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[12px] font-bold tracking-wider text-slate-500">*/}
            {/*                    <span>守護家庭 ‧ 綻放自我</span>*/}
            {/*                    <span className="font-serif italic text-slate-700 group-hover:text-[#B8D333]/30 transition-colors">Empowered Moms</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="bg-linear-to-br from-slate-700 via-slate-900 to-slate-800 border border-slate-800/60 rounded-4xl p-6 flex flex-col justify-between min-h-115 group transition-all duration-500 hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.25)]">*/}
            {/*                <div className="space-y-5">*/}
            {/*                    <img*/}
            {/*                        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20VAP.png?alt=media&token=fcef61b4-729e-47c9-b7e5-def316be6d3d"*/}
            {/*                        alt="CA VAP"*/}
            {/*                        className="w-full h-96 object-cover opacity-60 group-hover:scale-101 transition-transform duration-700"*/}
            {/*                    />*/}

            {/*                    <div className="space-y-2 text-left">*/}
            {/*                        <div className="flex items-center gap-2">*/}
            {/*                            <h4 className="text-xl font-black text-white group-hover:text-[#B8D333] transition-colors">CA VAP 金融保險精英</h4>*/}
            {/*                            <span className="text-[12px] font-bold bg-[#034E72] text-slate-300 px-2 py-0.5 rounded border border-white/5">戰略合作</span>*/}
            {/*                        </div>*/}
            {/*                        <p className="text-xs text-slate-400 leading-relaxed">*/}
            {/*                            CA VAP 是專為金融保險精英打造的「大健康 1+1」增值系統。我們將客戶的「風險保障」延伸至「主動健康管理」。背靠全球跨境大健康體系與專業營養師團隊陪跑，無需專業隔閡，助您在保留本業的同時，一鍵開啟國際健康生意，創造第二條跨越經濟週期的被動複利收入，實現事業雙軌共贏！*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[12px] font-bold tracking-wider text-slate-500">*/}
            {/*                    <span>精英匯聚 ‧ 強強聯手</span>*/}
            {/*                    <span className="font-serif italic text-slate-700 group-hover:text-[#B8D333]/30 transition-colors">Wealth Catalysts</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</FadeUpSection>*/}

            {/* ==================== 06. 耀升雲端系統入口 ==================== */}
            <FadeUpSection delay={150}>
                <div id="learning" className="bg-linear-to-br from-[#034E72] to-[#023752] rounded-[40px] text-white p-8 mt-12 md:p-14 relative overflow-hidden shadow-xl border border-white/10 transform-gpu">
                    <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#B8D333]/10 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full filter blur-2xl"></div>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                        <div className="lg:col-span-6 space-y-6 flex flex-col items-start text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-[#B8D333]">
                                <Laptop size={14} />
                                <span>Digital Ecosystem · 智慧數碼輔能</span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-black tracking-wide leading-tight">
                                    24/7 全天候雲端 e-Learning 平台
                                </h3>
                                <p className="text-slate-200/90 text-sm md:text-base leading-relaxed pt-2">
                                    我們將 40 年來的實體教育資產，完美注入尖端數字化雲端系統。打破時間與地域限制，系統內建專門錄製的PTC線上影音課程及耀升各個大型會議的重點精華節錄，讓學員隨時隨地利用碎片化時間精進自我，全方位輔能夥伴無無縫進行跨境大健康展業。
                                </p>
                            </div>

                            <div className="pt-2 w-full sm:w-auto">
                                <a
                                    href="https://canetwork.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#B8D333] hover:bg-[#9fb824] text-[#034E72] font-black text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 accent-pulse group w-full sm:w-auto"
                                >
                                    <span>即刻進入線上學習系統</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full mt-6 lg:mt-0">
                            <div className="relative w-full max-w-115 lg:max-w-none md:aspect-video lg:aspect-video bg-slate-950/40 p-1.5 border border-white/15 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 group">
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fe-learning%20business.png?alt=media&token=59b3881e-5590-4079-ab04-ce7dfe11ce9b"
                                        alt="CA E-Learning Nutrition Class"
                                        className="w-full h-full object-cover opacity-95 [image-rendering:-webkit-optimize-contrast] transform-gpu group-hover:scale-103 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUpSection>

        </div>
    );
}