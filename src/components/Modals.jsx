import 'react';
import { X, Video } from 'lucide-react';

export default function Modals({ playingVideo, closeModal }) {
    if (!playingVideo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">

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
                        <div className="text-xs text-slate-300 mt-3 leading-relaxed space-y-3 text-justify">
                            {playingVideo.desc && playingVideo.desc.split(/\r?\n|\\n/).map((paragraph, idx) => {
                                if (!paragraph.trim()) return null;
                                return (
                                    <p key={idx} className="block">
                                        {paragraph.trim()}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}