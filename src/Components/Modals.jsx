import React from 'react';
import { X, Video, Play, TrendingUp } from 'lucide-react';

export default function Modals({ selectedLeader, selectedStory, playingVideo, closeModal }) {
    if (!selectedLeader && !selectedStory && !playingVideo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            {/* 1. 導師專訪燈箱 */}
            {selectedLeader && (
                <div className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left">
                    <div className="relative h-60"><img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" /><button onClick={closeModal} className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full"><X size={16} /></button></div>
                    <div className="p-6 space-y-4">
                        <h2 className="text-3xl font-black">{selectedLeader.name}</h2>
                        <p className="text-sm text-[#034E72] font-bold">{selectedLeader.title}</p>
                        <p className="p-4 bg-slate-50 rounded-2xl border-l-4 border-[#B8D333] italic text-sm text-slate-700 font-semibold">「{selectedLeader.quote}」</p>
                        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{selectedLeader.bio}</p>
                    </div>
                </div>
            )}

            {/* 2. 轉化見證燈箱 */}
            {selectedStory && (
                <div className="bg-white rounded-[32px] max-w-2xl w-full p-6 shadow-2xl text-left relative max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-2xl font-black">{selectedStory.name}</h2>
                        <button onClick={closeModal} className="text-slate-400"><X size={20} /></button>
                    </div>
                    <div className="space-y-4">
                        <p className="p-3 bg-slate-50 rounded-xl italic text-xs font-semibold">「{selectedStory.quote}」</p>
                        <div className="space-y-3 relative pl-4 border-l border-slate-200 text-xs">
                            <div><h4 className="font-bold text-red-500">起點挑戰：</h4><p className="text-slate-500">{selectedStory.challenge}</p></div>
                            <div><h4 className="font-bold text-[#034E72]">解決對策：</h4><p className="text-slate-500">{selectedStory.approach}</p></div>
                            <div><h4 className="font-bold text-[#B8D333]">終極轉化結果：</h4><p className="text-slate-700 font-bold">{selectedStory.result}</p></div>
                        </div>
                    </div>
                </div>
            )}

            {/* 3. 影片模擬播放器 */}
            {playingVideo && (
                <div className="bg-slate-950 rounded-[28px] max-w-3xl w-full overflow-hidden text-white text-left">
                    <div className="p-4 border-b border-white/5 flex justify-between items-center">
                        <span className="text-xs font-bold text-[#B8D333] flex items-center gap-1"><Video size={12} /> 實況教學影音播放</span>
                        <button onClick={closeModal} className="text-slate-400 hover:text-white"><X size={20} /></button>
                    </div>
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                        <div className="text-center space-y-2 relative z-10">
                            <div className="w-14 h-16 bg-[#B8D333] text-slate-900 rounded-full flex items-center justify-center mx-auto shadow-lg accent-pulse cursor-pointer"><Play size={24} className="fill-slate-900 ml-1" /></div>
                            <span className="text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-full border border-white/10 block">CA 大健康學院串流解碼中...</span>
                        </div>
                    </div>
                    <div className="p-5 bg-slate-900"><h3 className="text-base font-extrabold text-[#B8D333]">{playingVideo.title}</h3><p className="text-xs text-slate-300 mt-1">{playingVideo.desc}</p></div>
                </div>
            )}
        </div>
    );
}