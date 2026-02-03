'use client';

import React from 'react';
import { futureProtocol } from '@/lib/timelineData';
import { ShieldCheck, Rocket } from 'lucide-react';

const FutureStrategy: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 pb-32">
            <div className="glass-panel p-1 border-indigo-500/30 rounded-3xl max-w-6xl mx-auto">
                <div className="bg-[var(--bg-secondary)]/80 rounded-[22px] p-8 md:p-16 text-center">

                    <div className="inline-flex items-center justify-center p-4 bg-indigo-500/20 rounded-full mb-8">
                        <Rocket className="w-8 h-8 text-indigo-400" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Future Protocol & Strategy
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                        To prevent further delays caused by the "Lag Pattern" and mismatched expectations, the following rules are now in place:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {futureProtocol.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                <div className="flex items-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-emerald-400 mr-3" />
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FutureStrategy;
