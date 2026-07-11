import { useState, useEffect } from 'react';
import { TrendingUp, Target, Briefcase, Award, Users, Calendar, ChevronLeft, ChevronRight, Zap, Gem } from 'lucide-react';
import { LEADERS_FACULTY } from "../data/mockData.js";

export default function BusinessEducation() {
    const [currLeader, setCurrLeader] = useState(0);
    const totalLeaders = LEADERS_FACULTY.length;

    // 領袖輪播：每 3.5 秒自動流暢切換
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrLeader((prev) => (prev + 1) % totalLeaders);
        }, 3500);
        return () => clearInterval(timer);
    }, [totalLeaders]);

    const handlePrev = () => {
        setCurrLeader((prev) => (prev - 1 + totalLeaders) % totalLeaders);
    };
    const handleNext = () => {
        setCurrLeader((prev) => (prev + 1) % totalLeaders);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-left animate-fadeIn space-y-14 bg-slate-50/30">

            {/* ==================== 頂部標題區 ==================== */}
            <div className="max-w-5xl relative">
                <span className="inline-block text-s font-black tracking-widest text-white bg-[#034E72] border-white/50 px-4 py-1.5 rounded-md uppercase shadow-sm">
                    把握現在，擁抱將來，成就非凡人生
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900! tracking-tight leading-none [webkit-text-fill-color:initial] [text-fill-color:initial]">
                    耀升大健康創業與領袖培育系統
                </h1>
                <p className="text-slate-500 text-balance md:text-lg leading-relaxed max-w-5xl">
                    選擇正確的賽道，是輕資產創業時代走向成功的關鍵第一步。CA Network 歷經 40 年的市場淬鍊，將複雜的創業流程化繁為簡，建構出成熟、穩定且可複製的「大健康輕創業系統」。多年來，藉由系統的全面支援，我們協助無數創業者告別單打獨鬥，每年都見證並培育出一批批卓越的領袖，為自己、家人乃至整個團隊，開創出更高品質的生活與事業新格局。
                </p>
            </div>

            {/* ==================== 三大核心創業課程 ==================== */}
            <div>
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative">
                        <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&q=80&w=600"
                                alt="Digital Branding"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]"></div>
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

                    {/* 課程 02：導師展業班 */}
                    <div className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative md:-translate-y-4">
                        {/* 點睛色置頂裝飾條，突出主打 */}
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#B8D333] z-20"></div>
                        <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600"
                                alt="Mentor Training"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]"></div>
                        </div>
                        <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-2">
                            <div className="space-y-3">
                                <div className="text-[12px] font-black tracking-widest text-[#034E72] uppercase bg-[#B8D333]/30 px-2.5 py-1 rounded w-fit">訂定目標 ‧ 建立團隊</div>
                                <h3 className="text-2xl font-black text-[#034E72]">達標精英班 ADD</h3>
                                <p className="text-sm text-slate-500 leading-relaxed pt-1">當身後開始有了並肩作戰的夥伴，領導的責任與榮譽便隨之而來。達標精英班旨在協助已成功起步的事業夥伴重新校準人生藍圖，訂定具體且具感召力的團隊目標。課程將專注於培育夥伴的目標感，以及學會如何用行動引領新人，從一個人前行，蛻變為攜手團隊共創大健康未來的領袖典範。</p>
                            </div>
                            <ul className="space-y-2 text-xs font-bold text-slate-600 pt-5">
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>從設定目標到完成目標</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>建立小團隊的初階領導力</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>建立團隊協作的思維和能力</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* 課程 03：系統營運官 */}
                    <div className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative">
                        <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                                alt="System Operations"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]"></div>
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

            {/* ==================== 年度大會 Highlight ==================== */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl min-h-120 flex items-center bg-slate-950 group">
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

                    <h2 className="text-3xl! md:text-4xl! mb-3! font-black tracking-tight leading-tight drop-shadow-md">
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

            {/* ==================== 動態秒轉領袖名人堂 ==================== */}
            <div className="border-t border-slate-200/60 pt-16 space-y-8 relative">
                <div className="flex justify-between items-end">
                    <div className="space-y-3">
                        <span className="inline-block text-xs font-black text-white uppercase tracking-wider bg-slate-900 px-3 py-1 rounded">
                            Elite Mentor Matrix · 創業者名人堂
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                            大健康展業全球菁英導師陣容
                        </h3>
                    </div>
                    <div className="flex gap-2.5 z-10">
                        <button onClick={handlePrev} className="p-3 rounded-full bg-slate-900 text-white hover:bg-[#034E72] transition-all shadow-md active:scale-95">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={handleNext} className="p-3 rounded-full bg-slate-900 text-white hover:bg-[#034E72] transition-all shadow-md active:scale-95">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* 輪播視窗 (全新總裁風卡片樣式) */}
                <div className="w-full overflow-hidden rounded-4xl py-4 px-1">
                    <div
                        style={{
                            transform: `translateX(calc(-1 * ${currLeader * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%))`
                        }}
                        className="flex transition-transform duration-500 ease-in-out will-change-transform"
                    >
                        {LEADERS_FACULTY.map((faculty) => (
                            <div key={faculty.id} className="w-full md:w-1/3 shrink-0 px-3">
                                <div className="bg-linear-to-b from-slate-800 via-slate-950 to-slate-900 border border-slate-800/80 rounded-[28px] p-5 flex flex-col min-h-102.5 justify-between relative group overflow-hidden transition-all duration-500 ease-out hover:border-[#B8D333]/30 hover:shadow-[0_20px_50px_rgba(3,78,114,0.25)]">

                                    <div className="w-full h-52 bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5 shrink-0 transition-colors duration-500">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transform-gpu group-hover:scale-102 transition-transform duration-700 ease-out"
                                        />

                                        <div className="absolute top-0 right-0 bg-linear-to-r from-[#034E72]/40 to-slate-950/40 backdrop-blur-md border-b border-l border-white/10 text-[10px] font-bold tracking-widest text-[#B8D333] px-3.5 py-1.5 rounded-bl-xl select-none">
                                            CORE LEADER
                                        </div>
                                    </div>

                                    {/* 📝 中間與底部：洗練的尊榮領袖矩陣 */}
                                    <div className="flex-1 flex flex-col justify-between pt-6 text-left relative z-10">

                                        {/* 名字與高亮變色 */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <h4 className="text-2xl font-black text-white tracking-tight group-hover:text-[#B8D333] transition-colors duration-300">
                                                    {faculty.name}
                                                </h4>
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8D333] shadow-[0_0_8px_#B8D333]"></span>
                                            </div>

                                            {/* 領袖身份職銜 */}
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed tracking-wide">
                                                {faculty.title.replace('註冊營養師', '頂級商業教練').replace('健康教育', '商業展業賦能')}
                                            </p>
                                        </div>

                                        {/* 🏆 底部：榮譽傳承印記（移除按鈕與數據，改為高階圖說） */}
                                        <div className="border-t border-slate-900 pt-4 mt-5 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold tracking-wider">
                                                {/* 引入象徵尊貴價值的寶石圖示 */}
                                                <Gem size={13} className="text-[#B8D333] shrink-0" />
                                                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">耀升系統決席委員會席位</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* ==================== 懸停時在卡片四周浮現的雙色極光 ==================== */}
                                    <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#B8D333]/5 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                    <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#034E72]/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==================== 5. 其它活動與支援（網格矩陣 ‧ 全維度全球展業支援） ==================== */}
            <div className="border-t border-slate-200/60 pt-16 space-y-12">
                <div className="max-w-2xl space-y-2">
                    <span className="inline-block text-xs font-bold text-slate-400 uppercase tracking-wider">Global Ecosystem Hub</span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">全方位的創業者展業與陪跑系統</h3>
                    <p className="text-xs text-slate-400">除了標準課程，我們還在各個維度為你的大健康展業注入強勁動能。</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* 支援 A */}
                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 group">
                        <div className="w-full sm:w-20 h-20 rounded-2xl bg-[#034E72]/5 text-[#034E72] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#034E72] group-hover:text-white transition-all duration-300">
                            <Briefcase size={32} />
                        </div>
                        <div className="space-y-1.5 flex flex-col justify-center text-left">
                            <h4 className="text-base font-black text-slate-900">一對一商業高階陪跑教練</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                拒絕紙上談兵！耀升系統的高階直銷領袖將親身成為你的商業導師。從第一場線下沙龍怎麼講、第一個顧客怎麼跟進，一對一覆盤指引，帶你避開所有新創深坑。
                            </p>
                        </div>
                    </div>

                    {/* 支援 B */}
                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 group">
                        <div className="w-full sm:w-20 h-20 rounded-2xl bg-[#034E72]/5 text-[#034E72] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#034E72] group-hover:text-white transition-all duration-300">
                            <Users size={32} />
                        </div>
                        <div className="space-y-1.5 flex flex-col justify-center text-left">
                            <h4 className="text-base font-black text-slate-900">城市線下商務沙龍與體驗路演</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                系統在全球各大城市核心商圈定期舉辦高規格的「大健康創客沙龍」與實體體驗展。為你搭建最高階的招商借力舞台，帶客戶來即可輕鬆促成商業結盟。
                            </p>
                        </div>
                    </div>

                    {/* 支援 C */}
                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 group">
                        <div className="w-full sm:w-20 h-20 rounded-2xl bg-[#034E72]/5 text-[#034E72] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#034E72] group-hover:text-white transition-all duration-300">
                            <Target size={32} />
                        </div>
                        <div className="space-y-1.5 flex flex-col justify-center text-left">
                            <h4 className="text-base font-black text-slate-900">跨境全球結算與數碼展業工具</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                借助直銷龍頭的全球化跨境骨幹網絡，學員可一鍵開通全球多國的業務結算。系統配備專屬的數據中心與展業 App，讓你的跨國健康生意運籌帷幄。
                            </p>
                        </div>
                    </div>

                    {/* 支援 D */}
                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 group">
                        <div className="w-full sm:w-20 h-20 rounded-2xl bg-[#034E72]/5 text-[#034E72] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#034E72] group-hover:text-white transition-all duration-300">
                            <TrendingUp size={32} />
                        </div>
                        <div className="space-y-1.5 flex flex-col justify-center text-left">
                            <h4 className="text-base font-black text-slate-900">耀升青年創客傑出表彰計畫</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                專為新生代創業者量身定制的榮譽階梯！針對 35 歲以下的卓越創客設立專屬的育成基金、海外研討會名額，以及名校大健康商學院的進修保送機會。
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}