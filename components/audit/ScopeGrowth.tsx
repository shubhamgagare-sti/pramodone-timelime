'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight, Ban, FileText, MessageSquareWarning } from 'lucide-react';
import { originalScope, requirementGaps, scopeAdditions } from '@/lib/auditData';

const ScopeGrowth: React.FC = () => {

    return (
        <div className="space-y-6">
            {/* Original 12-week plan */}
            <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-indigo-300" />
                    <span className="text-sm font-semibold text-white">Original 12-week proposal: what was planned</span>
                    <span className="text-xs font-mono text-indigo-300">Jul–Aug 2025</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {originalScope.map((w, i) => (
                        <motion.div
                            key={w.week + w.module}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className={clsx(
                                'rounded-lg border p-2.5',
                                w.ui === 'custom' ? 'border-emerald-500/50 bg-emerald-500/10' : w.ui === 'partial' ? 'border-teal-500/40 bg-teal-500/[0.07]' : 'border-indigo-500/30 bg-indigo-500/10'
                            )}
                        >
                            <div className="text-[10px] font-mono text-indigo-300">WEEK {w.week}</div>
                            <div className="text-xs font-semibold text-white leading-tight mt-0.5">{w.module}</div>
                            <div className={clsx('text-[10px] mt-1', w.ui === 'custom' ? 'text-emerald-300' : w.ui === 'partial' ? 'text-teal-300' : 'text-gray-500')}>
                                {w.ui === 'custom' ? 'Custom screens' : w.ui === 'partial' ? 'Some custom screens' : 'Basic backend forms'}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                    Custom screens were promised only for <b className="text-emerald-300">Safety and Quality</b> (plus approvals, self-service and DPR workflows). Everything else was planned as standard backend forms. Today <b className="text-white">12+ modules</b> have custom screens.
                </p>
            </div>

            {/* How requirements reached us */}
            <div className="rounded-xl border border-orange-500/40 bg-orange-500/[0.08] p-4">
                <div className="flex items-center gap-2 mb-3">
                    <MessageSquareWarning className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-200">How requirements reached us</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                    {requirementGaps.map((g, i) => (
                        <div key={g.title} className="flex gap-2.5">
                            <span className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-orange-500/25 text-orange-200 text-xs font-bold">{i + 1}</span>
                            <div>
                                <div className="text-sm font-semibold text-white">{g.title}</div>
                                <div className="text-xs text-gray-300 leading-relaxed mt-0.5">{g.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What KB added on top */}
            <div>
                <div className="text-sm font-semibold text-white mb-2">
                    What KB added later <span className="text-gray-400 font-normal">(not in the original plan, or far beyond it)</span>
                </div>
                <div className="rounded-xl border border-white/10 overflow-hidden">
                    <div className="hidden md:grid grid-cols-[110px_190px_1fr_20px_1.3fr] gap-3 px-3 py-2 bg-white/5 text-[11px] uppercase tracking-wider text-gray-500">
                        <span>When</span>
                        <span>Addition</span>
                        <span>Original scope said</span>
                        <span />
                        <span>KB asked for</span>
                    </div>
                    {scopeAdditions.map((a) => (
                        <div
                            key={a.title}
                            className="grid md:grid-cols-[110px_190px_1fr_20px_1.3fr] gap-x-3 gap-y-1 px-3 py-2 border-t border-white/5 items-center text-sm"
                        >
                            <span className="text-[11px] font-mono text-pink-300">{a.date}</span>
                            <span className="font-semibold text-white">{a.title}</span>
                            <span className="text-gray-400 text-xs">{a.original}</span>
                            <ArrowRight className="hidden md:block w-4 h-4 text-pink-400/70" />
                            <span className="text-pink-100 text-xs">{a.added}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                <Ban className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                    <div className="font-semibold text-amber-200">Jun 16, 2026: Scope Breakdown MoM</div>
                    <div className="text-gray-300">Linking automation <b className="text-white">100% out of scope</b>, agreed by both sides. Baseline data entry is manual.</div>
                </div>
            </div>
        </div>
    );
};

export default ScopeGrowth;
