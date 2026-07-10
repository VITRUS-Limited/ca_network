import 'react';
import { X, Video } from 'lucide-react';

export default function Modals({ selectedLeader, selectedStory, playingVideo, closeModal }) {
    if (!selectedLeader && !selectedStory && !playingVideo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">

            {/* 1. 導師專訪燈箱 (保持不變) */}
            {selectedLeader && (
                <div className="bg-white rounded-4xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left animate-scaleIn">
                    <div className="relative h-60">
                        <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                        <button onClick={closeModal} className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors">
                            <X size={16} />
                        </button>
                    </div>
                    <div className="p-6 space-y-4">
                        <h2 className="text-3xl font-black text-slate-900">{selectedLeader.name}</h2>
                        <p className="text-sm text-[#034E72] font-bold">{selectedLeader.title}</p>
                        <p className="p-4 bg-slate-50 rounded-2xl border-l-4 border-[#B8D333] italic text-sm text-slate-700 font-semibold">「{selectedLeader.quote}」</p>
                        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{selectedLeader.bio}</p>
                    </div>
                </div>
            )}

            {/* 2. 轉化見證燈箱 (保持不變) */}
            {selectedStory && (
                <div className="bg-white rounded-4xl max-w-2xl w-full p-6 shadow-2xl text-left relative max-h-[90vh] overflow-y-auto animate-scaleIn">
                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                        <h2 className="text-2xl font-black text-slate-900">{selectedStory.name}</h2>
                        <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 transition-colors"><X size={20} /></button>
                    </div>
                    <div className="p-2 space-y-4">
                        <p className="p-3 bg-slate-50 rounded-xl italic text-xs font-semibold text-slate-700">「{selectedStory.quote}」</p>
                        <div className="space-y-3 relative pl-4 border-l border-slate-200 text-xs">
                            <div><h4 className="font-bold text-red-500">起點挑戰：</h4><p className="text-slate-500 mt-0.5">{selectedStory.challenge}</p></div>
                            <div><h4 className="font-bold text-[#034E72]">解決對策：</h4><p className="text-slate-500 mt-0.5">{selectedStory.approach}</p></div>
                            <div><h4 className="font-bold text-[#B8D333]">終極轉化結果：</h4><p className="text-slate-700 font-bold mt-0.5">{selectedStory.result}</p></div>
                        </div>
                    </div>
                </div>
            )}

            {/* 首頁視訊串流播放器燈箱 */}
            {playingVideo && (
                <div className="bg-slate-950 rounded-[28px] max-w-3xl w-full overflow-hidden text-white text-left shadow-2xl border border-white/10 animate-scaleIn">

                    {/* 播放器頂部列 */}
                    <div className="p-4 border-b border-white/5 flex justify-between items-center">
                        <span className="text-xs font-bold text-[#B8D333] flex items-center gap-1">
                          <Video size={12} /> {playingVideo.topic}
                        </span>
                        <button
                            onClick={closeModal}
                            className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* 原生 HTML5 高畫質影片播放核心 */}
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                        <video
                            src={playingVideo.videoUrl}
                            autoPlay       // 點開燈箱時，影片自動開始播放
                            controls       // 開啟原生的播放、暫停、進度條、音量與全螢幕按鈕
                            playsInline    // iPhone/iOS 在 WebView 內強制彈出全螢幕，維持網頁版型
                            className="w-full h-full object-contain" // object-contain 可確保不論影片是橫是直都絕不變形
                        />
                    </div>

                    {/* 播放器底部文字簡介 */}
                    <div className="p-5 bg-slate-900/80">
                        <h3 className="text-base font-extrabold text-[#B8D333] tracking-wide">{playingVideo.title}</h3>
                        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{playingVideo.desc}</p>
                    </div>

                </div>
            )}
        </div>
    );
}