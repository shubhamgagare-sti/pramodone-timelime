'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, FileText, Handshake, Scale, XCircle } from 'lucide-react';
import clsx from 'clsx';
import { claims, type ClaimVerdict } from '@/lib/auditData';

const verdictStyle: Record<ClaimVerdict, { chip: string; label: string; icon: React.ReactNode }> = {
    refuted: {
        chip: 'border-red-500/40 bg-red-500/10 text-red-200 hover:bg-red-500/20',
        label: 'Contradicted by record',
        icon: <XCircle className="w-4 h-4 text-red-400" />,
    },
    aligned: {
        chip: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20',
        label: 'Already agreed by SiyaraTech',
        icon: <Handshake className="w-4 h-4 text-emerald-400" />,
    },
    conditional: {
        chip: 'border-amber-500/40 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20',
        label: 'Agreed — depends on KB data lock',
        icon: <Scale className="w-4 h-4 text-amber-400" />,
    },
};

const ClaimsBoard: React.FC = () => {
    const [active, setActive] = useState(2);
    const claim = claims.find((c) => c.no === active)!;
    const refuted = claims.filter((c) => c.verdict === 'refuted').length;
    const agreed = claims.length - refuted;

    return (
        <div className="space-y-6">
            {/* Scoreboard bar */}
            <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span><b className="text-red-300">{refuted}</b> claims contradicted by the record</span>
                    <span><b className="text-emerald-300">{agreed}</b> points SiyaraTech had already agreed to</span>
                </div>
                <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5">
                    {claims.map((c) => (
                        <div
                            key={c.no}
                            className={clsx(
                                'flex-1',
                                c.verdict === 'refuted' ? 'bg-red-500/70' : c.verdict === 'aligned' ? 'bg-emerald-500/70' : 'bg-amber-500/70'
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-6">
                {/* Claim chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 content-start">
                    {claims.map((c) => (
                        <button
                            key={c.no}
                            onClick={() => setActive(c.no)}
                            className={clsx(
                                'flex items-center gap-2 text-left text-sm px-3 py-2 rounded-lg border transition-all',
                                verdictStyle[c.verdict].chip,
                                active === c.no && 'ring-2 ring-white/60 scale-[1.02]'
                            )}
                        >
                            <span className="font-mono text-xs opacity-70 w-5 shrink-0">#{c.no}</span>
                            <span className="leading-tight">{c.short}</span>
                        </button>
                    ))}
                </div>

                {/* Detail */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={claim.no}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.2 }}
                        className="glass-card rounded-xl p-5 flex flex-col gap-4"
                    >
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-2xl font-bold text-white">Claim #{claim.no}</span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-300">
                                {verdictStyle[claim.verdict].icon}
                                {verdictStyle[claim.verdict].label}
                            </span>
                        </div>

                        <div className="rounded-lg border-l-4 border-red-500 bg-red-500/10 p-4">
                            <div className="text-[11px] uppercase tracking-wider text-red-300 mb-1">KB MoM · 18 Sep 2026 says</div>
                            <p className="text-gray-200 text-sm leading-relaxed">“{claim.kb}”</p>
                        </div>

                        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-500/10 p-4">
                            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-emerald-300 mb-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Project record shows
                            </div>
                            <p className="text-white text-sm leading-relaxed font-medium">{claim.record}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {claim.sources.map((s) => (
                                <span key={s} className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-indigo-500/15 text-indigo-200 border border-indigo-500/30">
                                    <FileText className="w-3 h-3" /> {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ClaimsBoard;
