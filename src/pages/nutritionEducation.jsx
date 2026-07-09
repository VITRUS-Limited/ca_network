import { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Laptop, ExternalLink } from 'lucide-react';
import { NUTRITION_FACULTY} from "../data/mockData.js";

export default function NutritionEducation() {
    const [currInstructor, setCurrInstructor] = useState(0);
    const totalLeaders = NUTRITION_FACULTY.length;

    // 讀秒自動輪播效果 (每 3 秒自動往後轉動一格)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrInstructor((prev) => (prev + 1) % totalLeaders);
        }, 3000);
        return () => clearInterval(timer); // 卸載時清除定時器，防止記憶體洩漏
    }, [totalLeaders]);

    // 手動前進與後退按鍵邏輯
    const handlePrev = () => {
        setCurrInstructor((prev) => (prev - 1 + totalLeaders) % totalLeaders);
    };
    const handleNext = () => {
        setCurrInstructor((prev) => (prev + 1) % totalLeaders);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
            {/* ==================== 頂部標題區 ==================== */}
            <div className="max-w-4xl mb-12 space-y-4">
                <span className="text-s font-black tracking-widest text-[#034E72] bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">健康需要管理，管理需要知識</span>
                <h1 className="text-4xl font-black text-slate-900! [webkit-text-fill-color:initial] [text-fill-color:initial]">
                    耀升營養健康教育系統
                </h1>
                <p className="text-slate-500 text-base leading-relaxed">
                    健康是夢想的起點。一旦失去，找回健康就成了唯一的追求。40年來，我們堅持推動生活化的健康教育，用最日常、易實踐的方式分享營養知識，陪伴大家改善體質、強身健體，甚至逆齡抗衰老。面對現代生活的挑戰，健康需要主動爭取——主動學習、主動實踐，將健康的掌控權握回自己手中，這正是現代人送給自己最棒的生活技能。
                </p>
            </div>

            {/* ==================== 三大核心課程 ==================== */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden animate-fadeIn">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.png?alt=media&token=d605da43-7769-4c63-8594-609f74f1b4c9"
                             alt="CA Nutrition Class"
                            className="w-full h-full object-cover opacity-95"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#034E72]"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">改變一生的營養課程</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">耀升基礎營養班</h3>
                        <p className="text-xs text-slate-500 mb-4">CA Network 高瞻遠矚，40年前已創辦實用營養班，從未間斷授課，受惠人數超過10萬人。耀升更設立營養師考牌制度，讓有志人士可以成為認證營養師和營養講師。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 營養學基礎</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 不同社群的營養實踐</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 慢性炎症的營養調理</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAF%20small.jpg?alt=media&token=a4ae635d-a9b4-4c30-8d21-db3213beabf4"
                            alt="CA Fitness"
                            className="w-full h-full object-cover opacity-95"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#B8D333]"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">標準化、科學化、人性化的體重管理方法</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">CA Fitness 體重管理課程</h3>
                        <p className="text-xs text-slate-500 mb-4">你需要的不是一張餐單，而是一種生活態度。CA Fitness 源自1971年美國南加州，並經持續改進及實踐，合計已成功幫助學員減去數以噸計的脂肪，重拾健康與身形。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 增肌減脂重塑身形</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 優化細胞提升代謝</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 永不反彈的塑形秘訣</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class%20Speakers%20small.jpeg?alt=media&token=81f48a31-5878-423e-9bc0-64157232a4fe"
                            alt="CA Nutrition Class Speakers"
                            className="w-full h-full object-cover opacity-95"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">終生受用的健康管理技能</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">耀升營養專題分享</h3>
                        <p className="text-xs text-slate-500 mb-4">除了基礎營養學課程，CA Network 的健康教育系統亦加入各種中醫和自然療法的導師分享授課，擴闊學員眼界，裝備更多健康管理的技能和能力。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 耳穴療法舒緩痛症</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 手診面診初探健康狀況</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 結合中醫營養學相輔相成</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ==================== 進階核心功能 ==================== */}
            <div className="bg-white border border-slate-100 rounded-4xl shadow-sm overflow-hidden grid md:grid-cols-2 min-h-95">
                {/* 左側：滿版大圖 */}
                <div className="bg-slate-900 relative min-h-62.5 md:min-h-full">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutritionist%202020.jpeg?alt=media&token=9005a74d-3db5-4f53-843f-3b6236dca934"
                        alt="大健康創業"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/20" />
                </div>
                {/* 右側：文案說明區 */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
                    <div className="absolute top-0 left-0 h-2 w-full md:h-full md:w-2 bg-[#034E72]"></div>
                    <div>
                        <span className="text-xs font-bold text-[#B8D333] bg-[#034E72] px-3 py-1 rounded-md uppercase tracking-wider">
                            專業認證
                        </span>
                        <h2 className="text-2xl font-black text-[#034E72]! mt-3! mb-4">學員考取國家註冊公共營養師</h2>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            學員完成指定學分，並達標包括營養諮詢個案數等要求後，CA Network 會保送學員分別考取中國營養學會頒發的註冊營養師證，以及華西醫學院營養課程證書，以認證畢業生的專業能力，讓他們有更多機會支援大健康市場的發展。
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                        <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl">
                            <CheckCircle2 size={14} className="text-[#B8D333] shrink-0" />
                            <span>中國營養學界最高認證</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl">
                            <CheckCircle2 size={14} className="text-[#B8D333] shrink-0" />
                            <span>接軌「健康中國」國策發展</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== 動態秒轉導師名人堂選單 ==================== */}
            <div className="border-t border-slate-100 pt-16 space-y-8 relative">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-[#034E72] uppercase tracking-wider">Faculty Hall · 師資矩陣</span>
                        <h3 className="text-2xl font-black text-slate-900">耀升國際營養師團隊</h3>
                    </div>
                    {/* 左右手動按鍵控制控制組 */}
                    <div className="flex gap-2 z-10">
                        <button onClick={handlePrev} className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 transition-colors shadow-xs">
                            <ChevronLeft size={18} />
                        </button>
                        <button onClick={handleNext} className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 transition-colors shadow-xs">
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* 輪播視窗遮罩 */}
                <div className="w-full overflow-hidden rounded-3xl py-2 px-1">
                    <div
                        style={{
                            '--translate-mobile': `${currInstructor * 100}%`,
                            '--translate-desktop': `${currInstructor * 33.333}%`
                        }}
                        className="flex transition-transform duration-500 ease-in-out transform-[translateX(calc(-1*var(--translate-mobile)))] md:transform-[translateX(calc(-1*var(--translate-desktop)))]"
                    >
                        {NUTRITION_FACULTY.map((faculty) => (
                            <div
                                key={faculty.id}
                                className="w-full md:w-1/3 shrink-0 px-3 transition-all duration-300"
                            >
                                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center space-y-4 min-h-[340px] justify-center">
                                    {/* 導師頭像 */}
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-50 shadow-inner shrink-0 bg-slate-50">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transform-gpu"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-black text-slate-800 tracking-wide">{faculty.name}</h4>
                                        <p className="text-xs text-[#034E72] font-semibold px-2">{faculty.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==================== 進階教練及講師培訓 ==================== */}
            <div className="border-t border-slate-100 pt-16">
                <div className="max-w-2xl mb-6">
                    <h3 className="text-xl font-black text-slate-900">成為耀升營養導師及講師</h3>
                    <p className="text-xs text-slate-400 mt-2">除了基礎應用課程，我們還提供進階級導師認證課程。</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* 線上自主學習生態 */}
                    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-50 hover:shadow-md transition-shadow">
                        <div className="w-48 h-26 rounded-xl bg-[#034E72]/5 flex items-center justify-center text-[#034E72] shrink-0">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fe%20learning%20nutrition%20small.png?alt=media&token=658b8a95-38c2-4919-ada8-00d7b9653e01"
                                alt="CA Nutrition Class Speakers"
                                className="w-full h-full object-cover opacity-95"
                            />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-base font-bold text-slate-800">24/7 全天候雲端 e-Learning 平台</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                打破時間與地域限制，系統內建精準營養與健康管理影音課程，讓學員隨時隨地利用碎片化時間精進自我。
                            </p>
                        </div>
                    </div>

                    {/* 新增介紹 B：全球化跨境大健康體系 */}
                    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-50 hover:shadow-md transition-shadow">
                        <div className="w-48 h-26 rounded-xl bg-[#034E72]/5 flex items-center justify-center text-[#034E72] shrink-0">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class%20Speakers%20small.jpeg?alt=media&token=81f48a31-5878-423e-9bc0-64157232a4fe"
                                alt="CA Nutrition Class Speakers"
                                className="w-full h-full object-cover opacity-95"
                            />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-base font-bold text-slate-800">耀升認證營養講師培訓</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                CA Network 每年均挑選優秀學員，予以進階培訓為認證營養講師，並持續更新我們的營養班師資及豐富內容。除此之外，導師們亦積極參與各社區的營養傳播活動，回饋社會。
                            </p>
                        </div>
                    </div>

                    {/* 新增介紹 C：學員實踐追蹤保障 */}
                    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-50 hover:shadow-md transition-shadow">
                        <div className="w-48 h-26 rounded-xl bg-[#034E72]/5 flex items-center justify-center text-[#034E72] shrink-0">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Fitness%20TTT%20small.jpg?alt=media&token=5414151a-2327-441f-85ab-1d3e4c45ed90"
                                alt="CA Nutrition Class Speakers"
                                className="w-full h-full object-cover opacity-95"
                            />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-base font-bold text-slate-800">CA Fitness 體重管理教練</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                成功修畢 CA Fitness 體重管理課程的學員，在成功實踐增肌減脂，或有足夠的成功案例後，可再考取體重管理教練資格。
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-50 hover:shadow-md transition-shadow">
                        <div className="w-48 h-26 rounded-xl bg-[#034E72]/5 flex items-center justify-center text-[#034E72] shrink-0">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20HMC%20small.jpeg?alt=media&token=4dfb2f63-f4e8-4bf5-b889-2596b38fb614"
                                alt="CA Nutrition Class Speakers"
                                className="w-full h-full object-cover opacity-95"
                            />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-base font-bold text-slate-800">HMC 耀升健康管理教練</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                除了保送考取國家級認證之營養師資格，CA Network 亦提供專門的健康管理技能培訓，並認證通過考核的學員為健康管理教練 Health Management Coach (HMC)。
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ==================== 耀升雲端系統入口 ==================== */}
            <div className="bg-[#034E72] rounded-4xl text-white p-8 mt-8 md:p-12 relative overflow-hidden shadow-xl transform-gpu border border-white/5">
                {/* 裝飾性炫光背景 */}
                <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#B8D333]/15 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute -left-16 -top-16 w-60 h-60 bg-white/5 rounded-full filter blur-2xl"></div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                    {/* 【左側】文案與按鈕區 */}
                    <div className="lg:col-span-6 space-y-6 flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-[#B8D333]">
                            <Laptop size={14} />
                            <span>Digital Ecosystem · 智慧數碼輔能</span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-black tracking-wide">
                                24/7 全天候雲端 e-Learning 平台
                            </h3>
                            <p className="text-slate-200 text-sm md:text-base leading-relaxed pt-2">
                                我們將 40 年來的實體教育資產，完美注入尖端數字化雲端系統。打破時間與地域限制，系統內建精準營養與健康管理影音課程，讓學員隨時隨地利用碎片化時間精進自我，全方位輔能夥伴無縫進行跨境大健康展業。
                            </p>
                        </div>

                        <div className="pt-2 w-full sm:w-auto">
                            <a
                                href="https://canetwork.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#B8D333] hover:bg-[#9fb824] text-[#034E72] font-black text-sm px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 accent-pulse group w-full sm:w-auto"
                            >
                                <span>即刻進入線上學習系統</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* 圖片展示 */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end w-full mt-6 lg:mt-0">
                        <div className="relative w-full max-w-105 lg:max-w-none md:aspect-video lg:aspect-video bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 group">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fe%20learning%20nutrition.png?alt=media&token=96e6dbe7-42fc-4bf3-93fe-a0aeb12745cd"
                                alt="CA E-Learning Nutrition Class"
                                className="w-full h-full object-cover opacity-90 [image-rendering:-webkit-optimize-contrast] transform-gpu group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* 鏡面光澤疊加層 */}
                            {/*<div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>*/}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}