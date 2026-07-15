import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Laptop, ExternalLink, GraduationCap, Award, ShieldCheck, Users } from 'lucide-react';
import { NUTRITION_FACULTY } from "../data/Database.js";

// ==================== 滾動視差動畫包裹元件 ====================
const FadeUpSection = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 觸發後解除觀察，確保只彈出一次
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

export default function NutritionEducation() {
    const [currInstructor, setCurrInstructor] = useState(0);
    const totalLeaders = NUTRITION_FACULTY.length;

    // 讀秒自動輪播效果 (每 3.5 秒自動往後轉動一格)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrInstructor((prev) => (prev + 1) % totalLeaders);
        }, 3500);
        return () => clearInterval(timer);
    }, [totalLeaders]);

    const handlePrev = () => {
        setCurrInstructor((prev) => (prev - 1 + totalLeaders) % totalLeaders);
    };
    const handleNext = () => {
        setCurrInstructor((prev) => (prev + 1) % totalLeaders);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-left space-y-14 bg-slate-50/50 overflow-hidden">

            {/* ==================== 01. 頂部標題區 ==================== */}
            <FadeUpSection>
                <div className="max-w-5xl relative">
                    <span className="inline-block text-s font-black tracking-widest text-[#034E72] bg-[#B8D333]/25 px-4 py-1.5 rounded-full uppercase border border-[#B8D333]/20">
                        健康需要管理，管理需要知識
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900! tracking-tight leading-none [webkit-text-fill-color:initial] [text-fill-color:initial] mt-4">
                        耀升營養健康教育系統
                    </h1>
                    <p className="text-s text-slate-500 text-balance md:text-lg leading-relaxed max-w-5xl mt-6">
                        健康是夢想的起點。一旦失去，找回健康就成了唯一的追求。40年來，我們堅持推動生活化的健康教育，用最日常、易實踐的方式分享營養知識，陪伴大家改善體質、強身健體，甚至逆齡抗衰老。面對現代生活的挑戰，健康需要主動爭取——主動學習、主動實踐，將健康的掌控權握回自己手中，這正是現代人送給自己最棒的生活技能。
                    </p>
                </div>
            </FadeUpSection>

            {/* ==================== 02. 三大核心課程 ==================== */}
            <FadeUpSection delay={100}>
                <div>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div id="basic-nutrition" className="bg-white border border-slate-100 rounded-[28px] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col overflow-hidden group">
                            <div className="w-full h-56 bg-slate-900 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.png?alt=media&token=d605da43-7769-4c63-8594-609f74f1b4c9"
                                    alt="CA Nutrition Class"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-8 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#034E72]"></div>
                                <div className="space-y-3">
                                    <div className="text-[14px] font-black tracking-wider text-slate-400 uppercase">改變一生的營養課程</div>
                                    <h3 className="text-2xl font-bold text-[#034E72]">耀升基礎營養班</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1">CA Network 高瞻遠矚，40年前已創辦實用營養班，教授生活中可運用和實踐的正確健康知識，從未間斷授課，受惠人數超過10萬人。耀升更設立營養師考牌制度，讓有志人士可以成為認證營養師和營養講師。</p>
                                </div>
                                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>營養學基礎</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>不同社群的營養實踐</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>慢性炎症的營養調理</span></li>
                                </ul>
                            </div>
                        </div>

                        <div id="ca-fitness" className="bg-white border border-slate-100 rounded-[28px] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col overflow-hidden group">
                            <div className="w-full h-56 bg-slate-900 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAF%20small.jpg?alt=media&token=a4ae635d-a9b4-4c30-8d21-db3213beabf4"
                                    alt="CA Fitness"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-8 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B8D333]"></div>
                                <div className="space-y-3">
                                    <div className="text-[14px] font-black tracking-wider text-slate-400 uppercase">標準化、科學化、人性化的體重管理方法</div>
                                    <h3 className="text-2xl font-bold text-[#034E72]">CA Fitness 體重管理課程</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1">你需要的不是一張餐單，而是一種生活態度。CA Fitness 源自1971年美國南加州，並經持續改進及實踐，多年來合計幫助學員減去數以噸計的脂肪，同時保持甚至增加肌肉量，重拾健康與身形。</p>
                                </div>
                                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>增肌減脂重塑身形</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>優化細胞提升代謝</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>永不反彈的塑形秘訣</span></li>
                                </ul>
                            </div>
                        </div>

                        <div id="nutri-topics" className="bg-white border border-slate-100 rounded-[28px] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col overflow-hidden group">
                            <div className="w-full h-56 bg-slate-900 overflow-hidden relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.jpeg?alt=media&token=3cc02075-ca09-4989-9d76-0984c867d96e"
                                    alt="CA Nutrition Class Speakers"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-8 relative flex-1 flex flex-col justify-between space-y-2">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-900"></div>
                                <div className="space-y-3">
                                    <div className="text-[14px] font-black tracking-wider text-slate-400 uppercase">終生受用的健康管理技能</div>
                                    <h3 className="text-2xl font-bold text-[#034E72]">耀升營養專題分享</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pt-1">除了基礎營養學課程，CA Network 的健康教育系統亦加入各種中醫和自然療法的導師授課，串連各套理論和實踐經驗，擴闊學員眼界，裝備更多健康管理的技能和能力。</p>
                                </div>
                                <ul className="space-y-2.5 text-xs font-semibold text-slate-600 pt-5">
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>耳穴療法舒緩痛症</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>手診面診初探健康狀況</span></li>
                                    <li className="flex items-center gap-2.5"><CheckCircle2 size={15} className="text-[#B8D333] shrink-0" /> <span>結合中醫營養學相輔相成</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUpSection>

            {/* ==================== 03. 耀升國際營養師聯會 ==================== */}
            <FadeUpSection delay={150}>
                <div id="cana-union" className="bg-white border border-slate-100 rounded-4xl shadow-xs overflow-hidden grid md:grid-cols-2 min-h-100 group hover:shadow-md transition-all duration-500">
                    <div className="bg-slate-900 relative min-h-70 md:min-h-full overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCANA.jpg?alt=media&token=1100222c-b04a-4348-869a-2920dd84d07c"
                            alt="CANA 耀升國際營養師聯會"
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 [image-rendering:-webkit-optimize-contrast]"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
                        <div className="space-y-3">
                            <span className="inline-block text-[14px] font-black text-[#B8D333] bg-[#034E72] px-3 py-1 rounded-md uppercase tracking-widest shadow-xs">
                                眾志成城 ‧ 傳遞健康
                            </span>
                            <h2 className="text-3xl! font-black! text-[#034E72]! tracking-tight">耀升國際營養師聯會</h2>
                            <p className="text-sm text-slate-500 leading-relaxed pt-2">
                                CA Network 創立耀升國際營養師聯會，匯聚國家及國際認證註冊營養師、星級營養講師等專業人才。我們致力為成員開拓外展交流平台以精進專業，同時促進業界互助協作。聯會將攜手並肩，積極走入社區，合力推動多元化的營養健康教育與義務工作。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700 pt-2">
                            <div className="flex items-center gap-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-colors">
                                <Users size={16} className="text-[#034E72] shrink-0" />
                                <span>推動「家庭健康管理員」計劃</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-colors">
                                <Award size={16} className="text-[#034E72] shrink-0" />
                                <span>精進專業服務社群</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeUpSection>

            {/* ==================== 04. 動態秒轉導師名人堂 ==================== */}
            <FadeUpSection delay={150}>
                <div id="nutri-faculty" className="pt-2 space-y-6 relative">
                    <div className="flex justify-between items-end">
                        <div className="space-y-3">
                            <span className="inline-block text-xs font-black text-[#034E72] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-md">Faculty Hall · 師資矩陣</span>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">耀升國際營養講師核心團隊</h3>
                        </div>
                        <div className="flex gap-2.5 z-10">
                            <button onClick={handlePrev} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-[#034E72] hover:text-white text-slate-600 transition-all shadow-xs hover:shadow-md active:scale-95">
                                <ChevronLeft size={16} />
                            </button>
                            <button onClick={handleNext} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-[#034E72] hover:text-white text-slate-600 transition-all shadow-xs hover:shadow-md active:scale-95">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* 卡片設計 */}
                    <div className="w-full overflow-hidden rounded-4xl py-4 px-1">
                        <div
                            style={{
                                transform: `translateX(calc(-1 * ${currInstructor * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.333)}%))`
                            }}
                            className="flex transition-transform duration-500 ease-in-out will-change-transform"
                        >
                            {NUTRITION_FACULTY.map((faculty) => (
                                <div key={faculty.id} className="w-full md:w-1/3 shrink-0 px-3">
                                    <div className="bg-white border border-slate-100 rounded-4xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 p-5 flex flex-col min-h-92 justify-between group relative bg-linear-to-b from-white to-slate-50/40">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8D333]/30 rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-110"></div>
                                        <div className="w-full h-48 rounded-3xl rounded-tl-[56px] overflow-hidden shadow-inner shrink-0 bg-slate-50 relative">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast] transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-[#034E72]/5 mix-blend-multiply pointer-events-none"></div>
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between pt-5 text-left pl-1">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-xl font-black text-slate-900 tracking-tight">{faculty.name}</h4>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8D333] animate-pulse"></span>
                                                </div>
                                                <p className="text-sm font-bold text-[#034E72]">
                                                    {faculty.mainTitle}
                                                </p>
                                                <div className="space-y-1.5 border-t border-slate-100 pt-2.5">
                                                    {faculty.title.split('\n').map((subTitle, idx) => (
                                                        <p
                                                            key={idx}
                                                            className="text-xs text-slate-400 font-medium leading-normal group-hover:text-slate-600 transition-colors"
                                                        >
                                                            • {subTitle.trim()}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeUpSection>

            {/* ==================== 05. 進階教練及講師培訓 ==================== */}
            <FadeUpSection delay={150}>
                <div id="advanced-cert" className="pt-2 space-y-6">
                    <div className="max-w-2xl space-y-3">
                        <span className="inline-block text-xs font-black text-[#034E72] uppercase tracking-wider bg-[#B8D333]/20 px-3 py-1 rounded">Advanced Certification ‧ 導師認證</span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">註冊營養師及導師教練培訓</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* 卡片 A */}
                        <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group">
                            <div className="w-full sm:w-52 h-32 rounded-2xl bg-slate-900 overflow-hidden shrink-0 shadow-xs relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutritionist%202020.jpeg?alt=media&token=9005a74d-3db5-4f53-843f-3b6236dca934"
                                    alt="National Nutritionists"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col justify-center">
                                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <GraduationCap size={18} className="text-[#034E72]" />
                                    <span>國家註冊公共營養師</span>
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    CA Network 會保送合資格學員分別考取中國營養學會頒發的註冊營養師證照，以及華西醫學院營養課程證書，讓他們有更多機會開拓和支援大健康市場的發展。
                                </p>
                            </div>
                        </div>

                        {/* 卡片 B */}
                        <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group">
                            <div className="w-full sm:w-52 h-32 rounded-2xl bg-slate-900 overflow-hidden shrink-0 shadow-xs relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class%20Speakers%20small.jpeg?alt=media&token=81f48a31-5878-423e-9bc0-64157232a4fe"
                                    alt="CA Nutrition Class Speakers"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col justify-center">
                                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <Award size={17} className="text-[#034E72]" />
                                    <span>耀升認證營養講師培訓</span>
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    CA Network 每年均挑選優秀學員，予以進階培訓為認證營養講師，並持續更新我們的營養班師資及豐富內容。除此之外，導師們亦積極參與各社區的營養傳播活動，回饋社會。
                                </p>
                            </div>
                        </div>

                        {/* 卡片 C */}
                        <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group">
                            <div className="w-full sm:w-52 h-32 rounded-2xl bg-slate-900 overflow-hidden shrink-0 shadow-xs relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Fitness%20Coach.jpg?alt=media&token=42cab7af-72f0-4b8f-9199-9bd27d8fb543"
                                    alt="CA Fitness Coach"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col justify-center">
                                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <ShieldCheck size={17} className="text-[#034E72]" />
                                    <span>CA Fitness 體重管理教練</span>
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    修畢 CA Fitness 體重管理課程的學員，在成功實踐增肌減脂，以及累積足夠的成功案例後，可修讀進階課程並考取 CA Fitness 體重管理教練資格。
                                </p>
                            </div>
                        </div>

                        {/* 卡片 D */}
                        <div className="flex flex-col sm:flex-row gap-5 p-5 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group">
                            <div className="w-full sm:w-52 h-32 rounded-2xl bg-slate-900 overflow-hidden shrink-0 shadow-xs relative">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20HMC%20small.jpeg?alt=media&token=4dfb2f63-f4e8-4bf5-b889-2596b38fb614"
                                    alt="CA HMC"
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-500 ease-out [image-rendering:-webkit-optimize-contrast]"
                                />
                            </div>
                            <div className="space-y-2 flex flex-col justify-center">
                                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <Laptop size={16} className="text-[#034E72]" />
                                    <span>HMC 耀升健康管理教練</span>
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    除了保送考取國家級認證之營養師資格，CA Network 亦提供專門的健康管理技能培訓，並認證通過考核的學員為健康管理教練 Health Management Coach (HMC)。
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeUpSection>

            {/* ==================== 06. 耀升雲端系統入口 ==================== */}
            <FadeUpSection delay={150}>
                <div className="bg-linear-to-br from-[#034E72] to-[#023752] rounded-[40px] text-white p-8 mt-12 md:p-14 relative overflow-hidden shadow-xl border border-white/10 transform-gpu">
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
                                    我們將 40 年來的實體教育資產，完美注入尖端數字化雲端系統。打破時間與地域限制，系統內建精準營養與健康管理影音課程，讓學員隨時隨地利用碎片化時間精進自我，全方位輔能夥伴無縫進行跨境大健康展業。
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
                                        src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2Fe%20learning%20nutrition.png?alt=media&token=96e6dbe7-42fc-4bf3-93fe-a0aeb12745cd"
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