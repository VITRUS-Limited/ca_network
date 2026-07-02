import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LEADERS } from '../data/mockData.js';

export default function Leaders({ setSelectedLeader }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="text-xs font-black tracking-widest text-[#034E72] bg-slate-100 px-3 py-1 rounded-full uppercase">精英矩陣 · 榜樣的力量</span>
        <h1 className="text-4xl font-black text-slate-900">高階直銷商與專家導師名人堂</h1>
        <p className="text-slate-500 text-base leading-relaxed">
          在 CA Network，高階直銷商不僅是商業的引路人，更是健康的實踐專家。他們以身作則，用數十載的口碑，引導一代代人走出亞健康。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {LEADERS.map((leader) => (
          <div key={leader.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-full h-72 rounded-2xl overflow-hidden bg-slate-100">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <div className="flex gap-1.5 flex-wrap">
                  {leader.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-[#034E72] font-bold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{leader.name}</h2>
                <p className="text-xs text-[#034E72] font-semibold">{leader.title}</p>
                <p className="text-[11px] text-slate-400 font-medium">{leader.experience}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-[#B8D333] italic text-xs text-slate-600 leading-relaxed">
                「{leader.quote}」
              </div>
            </div>
            <button onClick={() => setSelectedLeader(leader)} className="mt-6 w-full bg-[#034E72] hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1">
              查看詳細專訪與團隊 <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}