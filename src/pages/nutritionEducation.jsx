import 'react';
import { CheckCircle2 } from 'lucide-react';

export default function NutritionEducation() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
            <div className="max-w-3xl mb-12 space-y-4">
                <span className="text-s font-black tracking-widest text-[#034E72] bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">健康需要管理，管理需要知識</span>
                <h1 className="text-4xl font-black text-slate-900! [webkit-text-fill-color:initial] [text-fill-color:initial]">
                    CA 營養健康教育系統
                </h1>
                <p className="text-slate-500 text-base leading-relaxed">
                    健康是夢想的起點。一旦失去，找回健康就成了唯一的追求。40年來，我們堅持推動生活化的健康教育，用最日常、易實踐的方式分享營養知識，陪伴大家改善體質、強身健體，甚至逆齡抗衰老。面對現代生活的挑戰，健康需要主動爭取——主動學習、主動實踐，將健康的掌控權握回自己手中，這正是現代人送給自己最棒的生活技能。
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