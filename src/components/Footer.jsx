import 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
    const currentYear = new Date().getFullYear();
    // 智能導航與滾動引擎：先切換 Tab，再延遲計算座標平滑滾動至對應 ID
    const handleNavigation = (tab, elementId) => {
        setActiveTab(tab);

        // 如果是返回頂部，直接置頂
        if (!elementId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // 稍微延遲 120ms，等待 React 完成 Tab 切換與 DOM 渲染後再進行精確滾動
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                // 🎯 核心修正：計算目標元素的絕對 Y 座標，並扣除頂部導航高度（120px）作為 Margin
                const headerOffset = 120; // 包含視圖切換列與白色導航欄的高度 + 呼吸空間
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 120);
    };

    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">

            {/* 高級漸變背景裝飾線 */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#B8D333]/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* ==================== 欄位 1：品牌精神與訂閱 ==================== */}
                    <div className="lg:col-span-4 space-y-6 text-left">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-black text-white tracking-wider">
                                <span className="text-[#B8D333]">CA</span> NETWORK
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                                創立四十餘年，帶領夥伴深耕大健康市場。結合紮實的創富經驗與專業營養知識，協助您建立跨越經濟週期的被動複利收入，實現時間、財富與健康的真正自由。
                            </p>
                        </div>

                        {/* 快捷聯絡資訊 */}
                        <div className="space-y-3 pt-2 text-xs font-medium text-slate-400">
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-[#B8D333]" />
                                <span>香港九龍油麻地家樂坊20樓2008室</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-[#B8D333]" />
                                <span>info@canetwork.hk</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-5 border-t border-slate-900">
                            <a
                                href="https://www.facebook.com/canetwork.hk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8D333] hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                                title="CA Network Facebook 專頁"
                            >
                                <div className="w-full h-8 aspect-square overflow-hidden rounded-2xl">
                                    <img
                                        src="/facebook.png"
                                        alt="Desktop Banner"
                                        className="block w-full h-full object-cover"
                                    />
                                </div>
                            </a>

                            {/* Facebook 按鈕 */}
                            <a
                                href="https://www.youtube.com/@canetwork5329"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B8D333] hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                                title="CA Network YouTube 頻道"
                            >
                                <div className="w-full h-8 aspect-square overflow-hidden rounded-2xl">
                                    <img
                                        src="/youtube.png"
                                        alt="Desktop Banner"
                                        className="block w-full h-full object-cover"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* ==================== 欄位 2：關於耀升 ==================== */}
                    <div className="lg:col-span-2 text-left space-y-4">
                        <h4 className="text-s font-black uppercase tracking-wider text-white border-l-2 border-[#B8D333] pl-2">
                            關於耀升
                        </h4>
                        <ul className="space-y-2.5 text-sm font-semibold text-slate-400">
                            <li>
                                <button onClick={() => handleNavigation('about', 'founders-story')} className="hover:text-[#B8D333] transition-colors flex items-center gap-1">
                                    創辦人故事
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('about', 'core-value')} className="hover:text-[#B8D333] transition-colors">
                                    核心價值
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* ==================== 欄位 3：健康教育系統 ==================== */}
                    <div className="lg:col-span-2 text-left space-y-4">
                        <h4 className="text-s font-black uppercase tracking-wider text-white border-l-2 border-[#B8D333] pl-2">
                            健康教育
                        </h4>
                        <ul className="space-y-2.5 text-sm font-semibold text-slate-400">
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'basic-nutrition')} className="hover:text-[#B8D333] transition-colors">
                                    耀升基礎營養班
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'ca-fitness')} className="hover:text-[#B8D333] transition-colors">
                                    CA Fitness 體重管理
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'nutri-topics')} className="hover:text-[#B8D333] transition-colors">
                                    營養專題分享
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'cana-union')} className="hover:text-[#B8D333] transition-colors">
                                    耀升國際營養師聯會
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'nutri-faculty')} className="hover:text-[#B8D333] transition-colors">
                                    營養講師核心團隊
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('nutrition', 'advanced-cert')} className="hover:text-[#B8D333] transition-colors">
                                    導師教練培訓認證
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* ==================== 欄位 4：創業與領袖系統 ==================== */}
                    <div className="lg:col-span-2 text-left space-y-4">
                        <h4 className="text-s font-black uppercase tracking-wider text-white border-l-2 border-[#B8D333] pl-2">
                            創業教育
                        </h4>
                        <ul className="space-y-2.5 text-sm font-semibold text-slate-400">
                            <li>
                                <button onClick={() => handleNavigation('business', 'ptc-course')} className="hover:text-[#B8D333] transition-colors">
                                    專業培訓班 PTC
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('business', 'add-course')} className="hover:text-[#B8D333] transition-colors">
                                    達標精英班 ADD
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('business', 'ltc-course')} className="hover:text-[#B8D333] transition-colors">
                                    領導力培訓 LTC
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('business', 'mega-event')} className="hover:text-[#B8D333] transition-colors">
                                    耀升年度盛典
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigation('business', 'biz-mentors')} className="hover:text-[#B8D333] transition-colors">
                                    創業菁英導師團隊
                                </button>
                            </li>
                            {/*<li>*/}
                            {/*    <button onClick={() => handleNavigation('business', 'market-segments')} className="hover:text-[#B8D333] transition-colors">*/}
                            {/*        耀升社群*/}
                            {/*    </button>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    {/* ==================== 欄位 5：雲端系統與花絮 ==================== */}
                    <div className="lg:col-span-2 text-left space-y-4">
                        <h4 className="text-s font-black uppercase tracking-wider text-white border-l-2 border-[#B8D333] pl-2">
                            快捷資源
                        </h4>
                        <ul className="space-y-2.5 text-sm font-semibold text-slate-400">
                            <li>
                                <button onClick={() => handleNavigation('highlights', 'video-gallery')} className="hover:text-[#B8D333] transition-colors">
                                    活動花絮
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://canetwork.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#B8D333] transition-colors flex items-center gap-1 font-bold text-white"
                                >
                                    <span>24/7 雲端 e-Learning</span>
                                    <ExternalLink size={11} className="text-[#B8D333]" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ==================== 底部版權聲明區 ==================== */}
                <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-bold text-slate-500">
                    <p>© {currentYear} CA Network. 版權所有</p>
                    <div className="flex gap-6 items-center">
                        <button onClick={() => handleNavigation('home')} className="hover:text-white transition-colors">返回頂部</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}