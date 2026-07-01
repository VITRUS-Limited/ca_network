import React from 'react';
import { Activity, Calculator } from 'lucide-react';

export default function Tool({ calcHeight, setCalcHeight, calcWeight, setCalcWeight, calcAge, setCalcAge, calcResult, handleCalculate, handleResetCalculator, setActiveTab }) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-left animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-black bg-[#B8D333]/30 px-3 py-1 rounded-full uppercase">科學實證 · 代謝自測</span>
                <h1 className="text-3xl font-black text-slate-900">健康 IQ 與代謝狀況評估</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <form onSubmit={handleCalculate} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5">
                    <h3 className="text-lg font-bold text-[#034E72] flex items-center gap-2"><Activity size={18} /> 輸入健康指標</h3>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-500">身高 (cm)</label>
                        <input type="number" required placeholder="例如 170" value={calcHeight} onChange={(e) => setCalcHeight(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#034E72]" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-500">體重 (kg)</label>
                        <input type="number" required placeholder="example: 65" value={calcWeight} onChange={(e) => setCalcWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#034E72]" />
                    </div>
                    <div className="pt-2 flex gap-3">
                        <button type="submit" className="flex-1 bg-[#034E72] text-white font-bold py-3 rounded-xl text-xs hover:bg-slate-800 transition-colors">開始測量</button>
                        <button type="button" onClick={handleResetCalculator} className="px-4 bg-slate-100 text-slate-500 font-bold py-3 rounded-xl text-xs hover:bg-slate-200">重置</button>
                    </div>
                </form>

                <div>
                    {calcResult ? (
                        <div className="bg-[#034E72] text-white p-8 rounded-3xl shadow-lg space-y-5 animate-scaleIn">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-[#B8D333]">{calcResult.bmi}</span>
                                <span className="text-xs text-slate-300">BMI 指數</span>
                                <span className="ml-auto text-lg font-bold bg-white/10 px-3 py-1 rounded-lg">{calcResult.category}</span>
                            </div>
                            <p className="text-xs text-slate-200 leading-relaxed border-t border-white/10 pt-3">{calcResult.advice}</p>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                <p className="text-xs font-bold text-white">推薦學堂課程：{calcResult.recommendProgram}</p>
                                <button onClick={() => setActiveTab('academy')} className="w-full mt-2 bg-white text-[#034E72] font-bold py-2 rounded-lg text-[11px] hover:bg-[#B8D333]">立即了解課程</button>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full min-h-[300px] flex flex-col items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-200 border-dashed text-slate-400 text-center">
                            <Calculator size={36} className="text-slate-300 mb-2" />
                            <p className="text-xs font-bold text-slate-500">請在左側輸入數據以進行專業大健康方案配對</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}