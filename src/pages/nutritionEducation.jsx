import 'react';
import { CheckCircle2 } from 'lucide-react';

export default function NutritionEducation() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
            <div className="max-w-3xl mb-12 space-y-4">
                <span className="text-s font-black tracking-widest text-[#034E72] bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">健康需要管理，管理需要知識</span>
                <h1 className="text-4xl font-black text-slate-900! [webkit-text-fill-color:initial] [text-fill-color:initial]">
                    耀升營養健康教育系統
                </h1>
                <p className="text-slate-500 text-base leading-relaxed">
                    健康是夢想的起點。一旦失去，找回健康就成了唯一的追求。40年來，我們堅持推動生活化的健康教育，用最日常、易實踐的方式分享營養知識，陪伴大家改善體質、強身健體，甚至逆齡抗衰老。面對現代生活的挑戰，健康需要主動爭取——主動學習、主動實踐，將健康的掌控權握回自己手中，這正是現代人送給自己最棒的生活技能。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCA%20Nutrition%20Class.png?alt=media&token=d605da43-7769-4c63-8594-609f74f1b4c9"
                             alt="CA Nutrition Class"
                            className="w-full h-full object-cover opacity-75"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#034E72]"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">改變一生的營養課程</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">耀升基礎營養班</h3>
                        <p className="text-xs text-slate-500 mb-4">CA Network 高瞻遠矚，40年前已創辦實用營養班，從未間斷授課，受惠人數超過10萬人。耀升更設立營養師考牌制度，讓有志人士可以成為認證營養師和營養講師。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 營養學基礎</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 不同社群的營養實踐</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 慢性炎症的營養調理</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAF.jpg?alt=media&token=9230a6c7-3cb5-4e48-ba9e-362bf309cb69"
                            alt="CA Fitness"
                            className="w-full h-full object-cover opacity-75"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#B8D333]"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">標準化、科學化、人性化的體重管理方法</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">CA Fitness 體重管理課程</h3>
                        <p className="text-xs text-slate-500 mb-4">你需要的不是一張餐單，而是一種生活態度。CA Fitness 源自1971年美國南加州，並經持續改進及實踐，合計已成功幫助學員減去數以噸計的脂肪，重拾健康與身形。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 增肌減脂重塑身形</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 優化細胞提升代謝</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 一次實踐終身不反彈</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
                    <div className="w-full h-52 rounded-t-2xl bg-slate-800 overflow-hidden">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FCAF.jpg?alt=media&token=9230a6c7-3cb5-4e48-ba9e-362bf309cb69"
                            alt="CA Fitness"
                            className="w-full h-full object-cover opacity-75"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#B8D333]"></div>
                    <div className="p-8 relative flex-1 flex flex-col justify-between">
                        <div className="text-xs font-bold text-slate-400">標準化、科學化、人性化的體重管理方法</div>
                        <h3 className="text-xl font-bold text-[#034E72] mt-2 mb-3">CA Fitness 體重管理課程</h3>
                        <p className="text-xs text-slate-500 mb-4">你需要的不是一張餐單，而是一種生活態度。CA Fitness 源自1971年美國南加州，並經持續改進及實踐，合計已成功幫助學員減去數以噸計的脂肪，重拾健康與身形。</p>
                        <ul className="space-y-2 mt-4 text-xs font-semibold text-slate-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 增肌減脂重塑身形</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 優化細胞提升代謝</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#B8D333]" /> 一次實踐終身不反彈</li>
                        </ul>
                    </div>
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