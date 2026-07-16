import 'react';
import { Play, Video, Image as ImageIcon } from 'lucide-react';
import { VIDEOS } from '../data/Database.js';

export default function Highlights({ setPlayingVideo }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="text-s font-black tracking-widest text-[#034E72] bg-slate-100 px-3 py-1 rounded-full uppercase">精彩回顧 · 綻放美好生活</span>
        <h1 className="text-4xl font-black text-slate-900!">活動花絮</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VIDEOS.map((hl) => (
          <div key={hl.id} onClick={() => hl.type === 'video' ? setPlayingVideo(hl) : null} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
            <div className="relative h-48 bg-slate-100 overflow-hidden">
              <img src={hl.image} alt={hl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-3 bg-slate-950/60 p-1.5 rounded-full backdrop-blur-sm text-[#B8D333]">
                {hl.type === 'video' ? <Video size={14} /> : <ImageIcon size={14} />}
              </div>
              {hl.type === 'video' && (
                <div className="absolute top-3 left-3 bg-[#B8D333] text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1">
                  <Play size={8} className="fill-slate-950" /> {hl.duration}
                </div>
              )}
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{hl.title}</h3>
              <p className="text-[11px] text-slate-500 line-clamp-2">{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}