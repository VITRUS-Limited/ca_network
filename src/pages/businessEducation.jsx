import { useState, useEffect } from 'react';
import { TrendingUp, Target, Briefcase, Award, Users, Calendar, ArrowUpRight, ChevronLeft, ChevronRight, Zap, Gem } from 'lucide-react';
import { NUTRITION_FACULTY } from "../data/mockData.js"; // 💡 沿用或換成您的創業導師數據

export default function BusinessEducation() {
    const [currLeader, setCurrLeader] = useState(0);
    const totalLeaders = NUTRITION_FACULTY.length;

    // 創業領袖輪播：每 4 秒自動流暢切換
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrLeader((prev) => (prev + 1) % totalLeaders);
        }, 4000);
        return () => clearInterval(timer);
    }, [totalLeaders]);

    const handlePrev = () => {
        setCurrLeader((prev) => (prev - 1 + totalLeaders) % totalLeaders);
    };
    const handleNext = () => {
        setCurrLeader((prev) => (prev + 1) % totalLeaders);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-left animate-fadeIn space-y-32 bg-slate-50/30">

            {/* ==================== 1. 頂部創業標題區（新創加速器風範） ==================== */}
            <div className="max-w-4xl space-y-6 relative">

                <span className="inline-block text-xs font-black tracking-widest text-white bg-[#034E72] px-4 py-1.5 rounded-md uppercase tracking-wider shadow-sm">
                    Empower Entrepreneurship · 商業賦能
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none [webkit-text-fill-color:initial] [text-fill-color:initial]">
                    耀升大健康創業與領袖孵化系統
                </h1>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl">
                    在輕資產創業時代，選擇比努力更重要。CA Network 40 年來建立了一套成熟的「大健康商業閉環」。我們不談空洞的財商理論，而是保姆級地輔能你從零建立個人健康 IP、裂變私域社群，並保送你對接安利全球跨境直銷大體系，協助平凡人翻轉階層，收穫終身受人尊敬的被動複利收入。
                </p>
            </div>

            {/* ==================== 2. 三大核心創業課程（階梯上升式斜角卡片） ==================== */}
            <div>
                <div className="grid md:grid-cols-3 gap-8">

                    {/* 課程 01：私域 IP 班 */}
                    <div className="bg-white border border-slate-100 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-500 ease-out flex flex-col overflow-hidden group relative">
                        {/* 頂部斜邊視覺裁切 */}
                        <div className="w-full h-48 bg-slate-950 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&q=80&w=600"
                                alt="Digital Branding"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* 幾何斜面遮罩 */}
                            <div className="absolute bottom-0 inset-x-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]"></div>
                        </div>
                        <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <div className="text-[10px] font-black tracking-widest text-[#034E72] uppercase bg-[#034E72]/5 px-2.5 py-1 rounded w-fit">Phase 01 · 起步建流</div>
                                <h3 className="text-2xl font-black text-slate-800">新創個人健康 IP 與私域班</h3>
                                <p className="text-xs text-slate-500 leading-relaxed pt-1">教你如何在自媒體與線下社區建立信任感。從一部手機的拍照打卡、飲食記錄分享，到精準獲取大健康剛需精準客戶，完成首批核心社群種子的無感裂變。</p>
                            </div>
                            <ul className="space-y-2 text-xs font-bold text-slate-600 border-t border-slate-50 pt-5">
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>個人健康人設（IP）精準定位</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>社群三餐打卡與高黏著度營運</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>微信/WhatsApp 信任鏈高效收單</span></li>
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
                        <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <div className="text-[10px] font-black tracking-widest text-[#034E72] uppercase bg-[#B8D333]/30 px-2.5 py-1 rounded w-fit">Phase 02 · 導師賦能</div>
                                <h3 className="text-2xl font-black text-[#034E72]">大健康直銷展業導師班</h3>
                                <p className="text-xs text-slate-500 leading-relaxed pt-1">學員完成健康轉化後，如何開啟商業展業？保姆級拆解安利大健康獎金制度、跨國展業工具。培育你具備一對一健康干預與小班大眾演繹能力，助人自助。</p>
                            </div>
                            <ul className="space-y-2 text-xs font-bold text-slate-600 border-t border-slate-50 pt-5">
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>安利全球市場制度與複利拆解</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>大健康工作室實體開展與拓展</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#034E72] shrink-0" /> <span>認證講師大眾演說與演繹技巧</span></li>
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
                        <div className="p-8 pt-2 relative flex-1 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <div className="text-[10px] font-black tracking-widest text-white uppercase bg-slate-900 px-2.5 py-1 rounded w-fit">Phase 03 · 系統領袖</div>
                                <h3 className="text-2xl font-black text-slate-800">領袖領導力與系統營運官</h3>
                                <p className="text-xs text-slate-500 leading-relaxed pt-1">針對中高階展業領袖，傳授大型健康社群矩陣的連鎖複製心法。打造具備高度自動運轉性的「耀升團隊副系統」，實現人在天堂、錢在銀行的終極財務自由。</p>
                            </div>
                            <ul className="space-y-2 text-xs font-bold text-slate-600 border-t border-slate-50 pt-5">
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>千人團隊巨型架構之資產管理</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>跨國跨境市場的連鎖複製機制</span></li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-[#B8D333] shrink-0" /> <span>核心骨幹培育與複製領袖梯隊</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* ==================== 3. 🎯 年度大會 Highlight（極具震撼力的殿堂級橫幅） ==================== */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl min-h-[480px] flex items-center bg-slate-950 group">
                {/* 背景巨幅大圖與深色電影感融合濾鏡 */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"
                        alt="CA Annual Convention"
                        className="w-full h-full object-cover opacity-35 transition-transform duration-1000 group-hover:scale-102"
                    />
                    {/* 紅毯/頒獎典禮感的藍金色漸層疊加 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#022336] via-[#034E72]/90 to-transparent"></div>
                </div>

                {/* 內部文案佈局 */}
                <div className="relative z-10 max-w-3xl p-8 md:p-16 space-y-6 text-white text-left">
                    <div className="inline-flex items-center gap-2 bg-[#B8D333] text-[#034E72] px-3.5 py-1.5 rounded-md text-xs font-black uppercase tracking-widest shadow-lg">
                        <Calendar size={14} />
                        <span>Annual Mega Event · 年度盛典</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
                        耀升創業年會暨全球表彰盛典
                    </h2>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                        這不只是一場大會，更是無數平凡人晉身大健康領袖的最高榮耀殿堂！年度年會匯聚全球超過十個國家地區的展業夥伴，邀請全球頂尖創業者皇冠大使親臨分享，並為當年在直銷創業路上獲得卓越晉升的夥伴舉辦數萬人紅毯表彰，用最高規格的儀式感為你的夢想加冕。
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs font-bold pt-2">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                            <Award size={15} className="text-[#B8D333]" />
                            <span>萬人體育館史詩級表彰舞台</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                            <Gem size={15} className="text-[#B8D333]" />
                            <span>創業者皇冠大使大師級商業論壇</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== 4. 動態秒轉創業者名人堂（高階商學院總裁風範） ==================== */}
            <div className="border-t border-slate-200/60 pt-16 space-y-8 relative">
                <div className="flex justify-between items-end">
                    {/* 🎯 汲取之前教訓，使用 inline-block 確保間距完美彈出 */}
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
                <div className="w-full overflow-hidden rounded-[32px] py-4 px-1">
                    <div
                        style={{
                            transform: `translateX(calc(-1 * ${currLeader * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%))`
                        }}
                        className="flex transition-transform duration-500 ease-in-out will-change-transform"
                    >
                        {NUTRITION_FACULTY.map((faculty) => (
                            <div key={faculty.id} className="w-full md:w-1/3 shrink-0 px-3">
                                {/* 🎯 總裁風外觀：滿版光影質感，文字置底沉澱 */}
                                <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 p-6 flex flex-col items-center text-center space-y-5 min-h-[360px] justify-center relative group">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-[#B8D333] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* 方中帶圓的高級幾何頭像框，徹底打破正圓形 */}
                                    <div className="w-32 h-32 rounded-[28px] overflow-hidden border-2 border-slate-700 shadow-xl shrink-0 bg-slate-900 transform group-hover:rotate-2 group-hover:scale-102 transition-all duration-500">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xl font-black text-white tracking-wide">{faculty.name}</h4>
                                        <p className="text-xs text-[#B8D333] font-bold bg-white/5 border border-white/10 px-3 py-1.5 rounded-md leading-relaxed">
                                            {faculty.title.replace('註冊營養師', '頂級商業教練').replace('健康教育', '商業賦能')}
                                        </p>
                                    </div>
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