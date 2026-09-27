'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GitCommitHorizontal } from 'lucide-react';
import clsx from 'clsx';
import { modules, type ModuleTag } from '@/lib/auditData';

const tagStyle: Record<ModuleTag, { label: string; tile: string; dot: string; text: string }> = {
    'as-planned': { label: 'In scope, as planned', tile: 'border-indigo-500/40 bg-indigo-500/10', dot: 'bg-indigo-400', text: 'text-indigo-200' },
    expanded: { label: 'In scope, built far beyond plan', tile: 'border-amber-500/50 bg-amber-500/10', dot: 'bg-amber-400', text: 'text-amber-200' },
    new: { label: 'Not in the plan', tile: 'border-pink-500/50 bg-pink-500/10', dot: 'bg-pink-400', text: 'text-pink-200' },
    separate: { label: 'Separate billing in proposal', tile: 'border-sky-500/50 bg-sky-500/10', dot: 'bg-sky-400', text: 'text-sky-200' },
    removed: { label: 'Built, then removed at KB\'s direction', tile: 'border-gray-500/40 bg-gray-500/10', dot: 'bg-gray-400', text: 'text-gray-300' },
};

const order: ModuleTag[] = ['as-planned', 'expanded', 'new', 'separate', 'removed'];

const ModuleGrid: React.FC = () => {
    const [active, setActive] = useState(3);
    const m = modules[active];
    const count = (t: ModuleTag) => modules.filter((x) => x.tag === t).length;

    return (
        <div className="space-y-5">
            {/* Planned vs built */}
            <div className="grid md:grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">Planned · 12-week proposal, 2025</div>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <div>
                            <div className="text-3xl font-bold text-white">17</div>
                            <div className="text-[11px] text-gray-400">module lines</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">2</div>
                            <div className="text-[11px] text-gray-400">with custom screens (Safety, Quality). The rest: standard backend forms</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-4">
                    <div className="text-[11px] uppercase tracking-wider text-emerald-300">Built · repo snapshot, 3 Jul 2026</div>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                        {[
                            ['12+', 'modules with custom screens'],
                            ['20', 'frontend module areas'],
                            ['~296', 'custom DocTypes'],
                            ['12', 'repos / services'],
                        ].map(([v, l]) => (
                            <div key={l}>
                                <div className="text-2xl font-bold text-white">{v}</div>
                                <div className="text-[11px] text-gray-400 leading-snug">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                {order.map((t) => (
                    <span key={t} className={clsx('flex items-center gap-1.5', tagStyle[t].text)}>
                        <span className={clsx('w-2.5 h-2.5 rounded-sm', tagStyle[t].dot)} />
                        <b>{count(t)}</b> {tagStyle[t].label}
                    </span>
                ))}
            </div>

            {/* Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {modules.map((x, i) => (
                    <button
                        key={x.name}
                        onClick={() => setActive(i)}
                        className={clsx(
                            'rounded-lg p-2.5 text-left border transition-all',
                            tagStyle[x.tag].tile,
                            active === i ? 'ring-2 ring-white/70 scale-[1.03]' : 'hover:brightness-125'
                        )}
                    >
                        <div className="text-[10px] font-mono text-gray-400">{x.status}</div>
                        <div className="text-xs font-semibold text-white leading-tight mt-0.5">{x.name}</div>
                    </button>
                ))}
            </div>

            {/* Detail */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden"
                >
                    <div className="flex flex-wrap items-center gap-2 px-4 py-2.5 border-b border-white/10">
                        <span className="font-semibold text-white">{m.name}</span>
                        <span className={clsx('text-[11px] px-2 py-0.5 rounded-full border', tagStyle[m.tag].tile, tagStyle[m.tag].text)}>{tagStyle[m.tag].label}</span>
                        <span className="text-[11px] text-gray-400">· {m.status}</span>
                        {m.evidence && (
                            <span className="ml-auto flex items-center gap-1 text-[11px] font-mono text-indigo-300">
                                <GitCommitHorizontal className="w-3.5 h-3.5" /> {m.evidence}
                            </span>
                        )}
                    </div>
                    <div className={clsx('grid gap-px bg-white/5', m.june ? 'md:grid-cols-3' : 'md:grid-cols-2')}>
                        <div className="bg-[var(--bg-secondary)]/60 p-4">
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Original plan</div>
                            <p className="text-sm text-gray-300">{m.planned}</p>
                        </div>
                        <div className="bg-[var(--bg-secondary)]/60 p-4">
                            <div className="text-[10px] uppercase tracking-wider text-emerald-300 mb-1">Actually delivered</div>
                            <p className="text-sm text-white">{m.delivered}</p>
                        </div>
                        {m.june && (
                            <div className="bg-[var(--bg-secondary)]/60 p-4">
                                <div className="text-[10px] uppercase tracking-wider text-orange-300 mb-1">New changes asked in June 2026</div>
                                <p className="text-sm text-orange-50">{m.june}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            <p className="text-xs text-gray-500">
                Stack: ReactJS frontend (kbweb) on custom Frappe / ERPNext apps · counts from full git history of the 12 KB repos (3 Jul 2026)
            </p>
        </div>
    );
};

export default ModuleGrid;
