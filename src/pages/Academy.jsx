import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Academy() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
            <div className="max-w-3xl mb-12 space-y-4">
                <span className="text-xs font-black tracking-widest text-[#034E72] bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">教育是唯一的答案</span>
                <h1 className="text-4xl font-black text-slate-900">40 年磨一劍：CA 營養班教育系統</h1>
                <p className="text-slate-500 text-base leading-relaxed">
                    在香港這座高節奏城市，外賣文化、慢性疲勞、高血脂已是普遍常態。我們的營養課程系統不是一堆死板的概念，而是將臨床實踐與行為心理融為一體的「健康轉化孵化器」。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#034E72]"></div>
                    <div className="text-xs font-bold text-slate-400">Phase 01</div>
                    <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-4">基礎家庭營養學 (共識班)</h3>
                    <p className="text-xs text-slate-500 mb-6">從認清卡路里、碳水化合物配比，到看懂外賣包裝的成分表。這是為全家人建立健康防線的第一步。</p>
                    <ul className="space-y-2 text-xs font-semibold text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 解密餐盤黃金比例</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 慢性發炎與代謝調控</li>
                    </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#B8D333]"></div>
                    <div className="text-xs font-bold text-slate-400">Phase 02</div>
                    <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-4">CA Fitness 體重管理班</h3>
                    <p className="text-xs text-slate-500 mb-6">結合荷爾蒙調節、升糖配比，並由認證教練與高階導師每日對接飲食反饋，陪你跨越停滯期，真正擁有不易胖體質。</p>
                    <ul className="space-y-2 text-xs font-semibold text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 12週身心重建實踐</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 指標監控與膳食調整</li>
                    </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-900"></div>
                    <div className="text-xs font-bold text-slate-400">Phase 03</div>
                    <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-4">大健康創業與導師培育班</h3>
                    <p className="text-xs text-slate-500 mb-6">當你成功改變了自己，如何用專業知識幫助他人，發展一份受人尊敬、有穩定複利收入的大健康直銷事業？</p>
                    <ul className="space-y-2 text-xs font-semibold text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 專業講師與大眾授課技巧</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 個人IP與私域展業工具</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}