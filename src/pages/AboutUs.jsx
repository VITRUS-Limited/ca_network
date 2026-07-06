import 'react';
import {AboutUsText} from "../data/mockData.js";

export default function AboutUs() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-left animate-fadeIn">
            <div className="col-span-4 video-grid-card rounded-2xl shadow-xl bg-slate-800 animate-fadeIn mb-8">
                <img src="https://firebasestorage.googleapis.com/v0/b/ca-hub-e71b8.appspot.com/o/homePage%2FAnita-Clement-combined.png?alt=media&token=36d6bdd9-c812-437b-be28-37d75b2353c2" alt="Anita & Clement" className="w-full h-full object-cover opacity-75" />
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#034E72]"></div>
                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                    {AboutUsText.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    );
}