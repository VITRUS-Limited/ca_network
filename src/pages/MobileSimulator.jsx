import 'react';
import { Heart, BookOpen, Award, Image as ImageIcon, Bell, Play, MessageSquare } from 'lucide-react';
import { LEADERS_FACULTY, VIDEOS } from '../data/Database.js';

export default function MobileSimulator({ mobileTab, setMobileTab, setSelectedLeader, setPlayingVideo }) {
    return (
        <div className="py-12 bg-slate-900 min-h-screen flex items-center justify-center animate-fadeIn px-4">
            <div className="relative w-full max-w-[390px] h-[820px] bg-black rounded-[55px] shadow-2xl border-[10px] border-slate-800 flex flex-col overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50"></div>

                {/* APP HEADER */}
                <div className="bg-[#034E72] text-white px-4 pt-8 pb-3 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-black text-xs text-[#B8D333]">CA</div>
                        <div>
                            <h4 className="text-xs font-black tracking-wider leading-none">CA Network</h4>
                            <span className="text-[8px] text-[#B8D333] font-bold uppercase">大健康教育學堂</span>
                        </div>
                    </div>
                    <Bell size={14} className="text-white" />
                </div>

                {/* APP CONTENT */}
                <div className="flex-1 bg-slate-50 overflow-y-auto pb-20 scrollbar-none text-left">
                    {mobileTab === 'home' && (
                        <div className="space-y-6">
                            <div className="bg-[#034E72] text-white px-4 pb-6 rounded-b-[32px] space-y-2">
                                <h2 className="text-lg font-bold">張小明，早安！</h2>
                                <div className="bg-white/10 rounded-2xl p-3 text-xs border border-white/10">
                                    <p className="font-bold text-[#B8D333]">當前共學課堂進度: 60%</p>
                                    <p className="line-clamp-1 mt-1 text-slate-200">基礎營養：解讀盤中食物與升糖反應</p>
                                </div>
                            </div>

                            {/* 快捷按鈕 */}
                            <div className="px-4 grid grid-cols-4 gap-2 text-center text-[9px] font-bold text-slate-600">
                                <button onClick={() => setMobileTab('learn')} className="bg-white p-2 rounded-xl border border-slate-100"><BookOpen size={16} className="mx-auto mb-1 text-[#034E72]" />課堂</button>
                                <button onClick={() => setMobileTab('events')} className="bg-white p-2 rounded-xl border border-slate-100"><Play size={16} className="mx-auto mb-1 text-[#034E72]" />花絮</button>
                                <button onClick={() => setMobileTab('leaders')} className="bg-white p-2 rounded-xl border border-slate-100"><Award size={16} className="mx-auto mb-1 text-[#034E72]" />導師</button>
                                <a href="#" className="bg-white p-2 rounded-xl border border-slate-100"><MessageSquare size={16} className="mx-auto mb-1 text-orange-500" />諮詢</a>
                            </div>

                        </div>
                    )}

                    {mobileTab === 'learn' && <div className="p-4"><h3 className="font-bold text-sm">40年健康培訓班課程目錄</h3></div>}
                    {mobileTab === 'leaders' && <div className="p-4 grid grid-cols-2 gap-2">{LEADERS_FACULTY.map(l => <div key={l.id} onClick={() => setSelectedLeader(l)} className="bg-white p-2 rounded-xl border text-center cursor-pointer"><img src={l.image} className="h-20 w-full object-cover rounded-lg" /><p className="text-xs font-bold mt-1">{l.name.split(' ')[0]}</p></div>)}</div>}
                    {mobileTab === 'events' && <div className="p-4 space-y-2">{VIDEOS.map(h => <div key={h.id} onClick={() => h.type === 'video' ? setPlayingVideo(h) : null} className="bg-white rounded-xl overflow-hidden border"><img src={h.image} className="h-24 w-full object-cover" /><p className="text-xs font-bold p-2">{h.title}</p></div>)}</div>}
                </div>

                {/* TAB BAR */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t py-2 flex justify-around text-[9px] font-bold text-slate-400">
                    <button onClick={() => setMobileTab('home')} className={mobileTab === 'home' ? 'text-[#034E72]' : ''}><Heart size={16} className="mx-auto" />學堂</button>
                    <button onClick={() => setMobileTab('learn')} className={mobileTab === 'learn' ? 'text-[#034E72]' : ''}><BookOpen size={16} className="mx-auto" />課程</button>
                    <button onClick={() => setMobileTab('leaders')} className={mobileTab === 'leaders' ? 'text-[#034E72]' : ''}><Award size={16} className="mx-auto" />導師</button>
                    <button onClick={() => setMobileTab('events')} className={mobileTab === 'events' ? 'text-[#034E72]' : ''}><ImageIcon size={16} className="mx-auto" />花絮</button>
                </div>
            </div>
        </div>
    );
}