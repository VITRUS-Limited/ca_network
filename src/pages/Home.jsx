import 'react';
import { Award, ChevronRight, Activity, BookOpen, Users, TrendingUp, ArrowUpRight, Play } from 'lucide-react';
import { LEADERS, SUCCESS_STORIES, HIGHLIGHTS } from '../data/mockData.js';

export default function Home({ setActiveTab, setPlayingVideo, setSelectedStory, setSelectedLeader }) {
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
                            <span className="text-xs font-semibold tracking-wide text-slate-100">深耕香港 40 載 · 專注健康教育</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            為您生活添色彩 <br />
                            <span className="text-[#B8D333] relative inline-block mt-2">
                            Helping people live better, healthier lives
                                <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-[#B8D333]/20 rounded"></span>
                            </span>
                        </h1>
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                            相比於一次性的保健品銷售，我們更注重「知識賦能」。CA Network 創立四十餘年，透過嚴謹的「營養班學習體系」，引導您主動理解身體密碼，攜手高階專業導師，打造不復胖、不生病的長效體質。
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setActiveTab('academy')} className="bg-[#B8D333] hover:bg-[#9fb824] text-[#034E72] px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group accent-pulse">
                                了解 40 年營養教育班
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => setActiveTab('tool')} className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2">
                                <Activity size={14} className="text-[#B8D333]" />
                                進行線上健康自測
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">40+ 年</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">深耕香港社區健康</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">10 萬+</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">畢業學員健康重塑</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-[#B8D333]">1對1</div>
                                <div className="text-xs text-slate-300 mt-1 font-semibold">高階直銷顧問引導</div>
                            </div>
                        </div>
                    </div>

                    {/* 右側影片網格 */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
                        <div className="absolute inset-0 bg-radial-gradient from-[#B8D333]/15 to-transparent filter blur-2xl -z-10"></div>
                        <div onClick={() => setPlayingVideo(HIGHLIGHTS[0])} className="col-span-8 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 cursor-pointer animate-fadeIn">
                            <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600" alt="營養班" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#034E72]/85 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[10px] uppercase font-bold text-white bg-[#034E72]/60 px-2 py-0.5 rounded backdrop-blur-sm">40年經典大班授課</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
                                <Play size={40} className="text-[#B8D333] fill-[#B8D333]" />
                            </div>
                        </div>
                        <div className="col-span-4 h-48 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=300" alt="健康食物" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100">CA Fitness 食物科學</div>
                        </div>
                        <div className="col-span-4 h-56 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=300" alt="戶外律動" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 text-[10px] font-bold text-slate-100">體態再造小組</div>
                        </div>
                        <div className="col-span-8 h-56 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600" alt="專業指導" className="w-full h-full object-cover opacity-75" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span className="text-[10px] font-bold text-slate-100">個人健康教練諮詢</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="inline-block text-[#034E72] font-black tracking-widest text-xs bg-slate-100 px-3 py-1 rounded-full mb-4">THE LEGACY & TRUST · 傳承與信任</div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">為什麼在香港，大家都信賴 CA Network 營養培訓班？</h2>
                    <p className="text-slate-500 mt-4 text-base leading-relaxed">在過去的 40 年間，我們不隨波逐流去叫賣一次性瘦身神藥。我們建立了嚴格、實惠且兼具人情溫度的「社區營養實體共學制度」。</p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 rounded-2xl bg-slate-50 text-left space-y-3">
                            <BookOpen size={20} className="text-[#034E72]" />
                            <h3 className="text-lg font-bold text-[#034E72]">40年教案打磨</h3>
                            <p className="text-xs text-slate-500">融合頂尖營養學與香港在地飲食習慣，發展出具備高度執行性的知識地圖。</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 text-left space-y-3">
                            <Users size={20} className="text-[#034E72]" />
                            <h3 className="text-lg font-bold text-[#034E72]">小班督導共學機制</h3>
                            <p className="text-xs text-slate-500">學員在直銷導師引導下組成群組拍照打卡，完成知行合一的日常飲食健康習慣。</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 text-left space-y-3">
                            <TrendingUp size={20} className="text-[#034E72]" />
                            <h3 className="text-lg font-bold text-[#034E72]">素人到導師的商業賦能</h3>
                            <p className="text-xs text-slate-500">當您重塑自己的健康，團隊系統能輔能您開啟終身受人尊敬的大健康展業之路。</p>
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