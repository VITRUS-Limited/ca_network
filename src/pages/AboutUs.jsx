import 'react';
import { AboutUsText } from "../data/Database.js";
import FadeUpSection from '../components/FadeUpSection';
import { PersonStanding, Sparkles, HandHeartIcon, Award } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn space-y-24">
            <FadeUpSection>
                {/* 封面照片 */}
                <div id="founders-story" className="col-span-4 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn mb-8">
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                        {/* 電腦版 */}
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita-Clement%20combined%20landscape.png?alt=media&token=88d5e671-854a-4966-8fa2-31540ca79933"
                            alt="Desktop Banner"
                            className="hidden md:block w-full h-full object-cover"
                        />
                        {/* 手機版 */}
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita-Clement%20combined%20portrait.jpg?alt=media&token=b1e09dce-a35e-415e-b90a-c32370bd5fb1"
                            alt="Mobile Banner"
                            className="block md:hidden w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 中心主題文案 */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#034E72]"></div>
                    <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                        {AboutUsText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-justify">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </FadeUpSection>

            <FadeUpSection delay={100}>
                {/* 核心價值宣傳 */}
                <div id="core-value" className="space-y-8 lg:pb-20">

                    {/* 文案頂部 */}
                    <div className="max-w-2xl space-y-3">
                    <span className="text-s font-black tracking-widest text-[#034E72] bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">
                        Our Core Values · 我們的核心價值
                    </span>
                    </div>

                    {/* 引入高低交錯波浪感 */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">

                        <div className="bg-white border border-slate-100 p-8 shadow-xs hover:shadow-xl transition-all duration-700 ease-in-out group relative overflow-hidden flex flex-col min-h-75 justify-between
                        rounded-tl-[64px] rounded-br-[64px] rounded-tr-2xl rounded-bl-2xl
                        hover:rounded-tr-[64px] hover:rounded-bl-[64px] hover:rounded-tl-2xl hover:rounded-br-2xl">

                            <div className="absolute top-0 left-0 w-16 h-1.5 bg-[#034E72]"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-[#034E72]/5 text-[#034E72] flex items-center justify-center group-hover:bg-[#034E72] group-hover:text-white group-hover:rotate-360 transition-all duration-500">
                                    <PersonStanding size={22} />
                                </div>
                                <h3 className="text-xl font-black text-slate-800">自由 Freedom</h3>
                                <p className="text-s text-slate-500 leading-relaxed">
                                    讓人們擁有選擇自己生活方式與掌握人生命運的權利，透過事業機會打造想要的未來。
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-100/60 font-serif select-none pointer-events-none group-hover:text-[#034E72]/5 transition-colors duration-500">01</div>
                        </div>

                        <div className="bg-white border border-slate-100 p-8 shadow-xs hover:shadow-xl transition-all duration-700 ease-in-out group relative overflow-hidden flex flex-col min-h-75 justify-between lg:translate-y-12
                        rounded-tr-[64px] rounded-bl-[64px] rounded-tl-2xl rounded-br-2xl
                        hover:rounded-tl-[64px] hover:rounded-br-[64px] hover:rounded-tr-2xl hover:rounded-bl-2xl">

                            <div className="absolute top-0 left-0 w-16 h-1.5 bg-[#B8D333]"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-[#B8D333]/10 text-[#718512] flex items-center justify-center group-hover:bg-[#B8D333] group-hover:text-[#034E72] group-hover:rotate-360 transition-all duration-500">
                                    <HandHeartIcon size={22} />
                                </div>
                                <h3 className="text-xl font-black text-slate-800">家庭 Family</h3>
                                <p className="text-s text-slate-500 leading-relaxed">
                                    重視人與人之間的情感連結。事業不應犧牲家庭，而應成為家庭和睦與陪伴的推手。
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-100/60 font-serif select-none pointer-events-none group-hover:text-[#B8D333]/10 transition-colors duration-500">02</div>
                        </div>

                        <div className="bg-white border border-slate-100 p-8 shadow-xs hover:shadow-xl transition-all duration-700 ease-in-out group relative overflow-hidden flex flex-col min-h-75 justify-between lg:translate-y-4
                        rounded-tl-[64px] rounded-br-[64px] rounded-tr-2xl rounded-bl-2xl
                        hover:rounded-tr-[64px] hover:rounded-bl-[64px] hover:rounded-tl-2xl hover:rounded-br-2xl">

                            <div className="absolute top-0 left-0 w-16 h-1.5 bg-slate-900"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-slate-900/5 text-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-360 transition-all duration-500">
                                    <Sparkles size={22} />
                                </div>
                                <h3 className="text-xl font-black text-slate-800">希望 Hope</h3>
                                <p className="text-s text-slate-500 leading-relaxed">
                                    為每位夥伴帶來翻轉生活、勇敢追夢的動力與自信，透過團隊與教育支持實現願景。
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-100/60 font-serif select-none pointer-events-none group-hover:text-slate-900/5 transition-colors duration-500">03</div>
                        </div>

                        <div className="bg-white border border-slate-100 p-8 shadow-xs hover:shadow-xl transition-all duration-700 ease-in-out group relative overflow-hidden flex flex-col min-h-75 justify-between lg:translate-y-16
                        rounded-tr-[64px] rounded-bl-[64px] rounded-tl-2xl rounded-br-2xl
                        hover:rounded-tl-[64px] hover:rounded-br-[64px] hover:rounded-tr-2xl hover:rounded-bl-2xl">

                            <div className="absolute top-0 left-0 w-16 h-1.5 bg-[#B8D333]"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-[#B8D333]/5 text-[#718512] flex items-center justify-center group-hover:bg-[#B8D333] group-hover:text-[#034E72] group-hover:rotate-360 transition-all duration-500">
                                    <Award size={22} />
                                </div>
                                <h3 className="text-xl font-black text-slate-800">獎勵 Reward</h3>
                                <p className="text-s text-slate-500 leading-relaxed">
                                    對個人努力付出給予肯定。透過公平透明的獎酬制度，慶祝每一個里程碑與成就。
                                </p>
                            </div>
                            <div className="absolute -right-4 -bottom-6 text-8xl font-black text-slate-100/60 font-serif select-none pointer-events-none group-hover:text-[#034E72]/5 transition-colors duration-500">04</div>
                        </div>

                    </div>
                </div>
            </FadeUpSection>

        </div>
    );
}