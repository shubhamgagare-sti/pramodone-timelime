'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import clsx from 'clsx';
import { changeVolume, CR_TRACKER_URL } from '@/lib/journeyData';

const series = [
    { key: 'marApr', label: 'Completed in the Mar–Apr wave', color: 'bg-indigo-400' },
    { key: 'juneDone', label: 'June tracker: implemented', color: 'bg-emerald-400' },
    { key: 'future', label: 'Parked as future scope', color: 'bg-gray-500' },
] as const;

const total = (m: (typeof changeVolume)[number]) => m.marApr + m.juneDone + m.future;
const rows = [...changeVolume].sort((a, b) => total(b) - total(a));
const max = Math.max(...rows.map(total));
const sum = (k: 'marApr' | 'juneDone' | 'future') => changeVolume.reduce((s, m) => s + m[k], 0);

const ChangeVolume: React.FC = () => {
    const [active, setActive] = useState(rows[0].module);
    const mod = rows.find((r) => r.module === active)!;
    const all = sum('marApr') + sum('juneDone') + sum('future');

    return (
        <div className="mt-6 rounded-2xl border border-pink-500/30 bg-pink-500/[0.04] p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                    <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-pink-300" />
                        <span className="text-sm font-semibold text-white">Many more changes, beyond the highlights above</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">
                        <b className="text-white">{all}</b> tracked items across {changeVolume.length} areas in the change tracker alone: {sum('marApr')} completed in Mar–Apr and {sum('juneDone') + sum('future')} logged in June, all implemented except {sum('future')} parked as future scope. Jul–Sep changes are tracked separately and not counted here.
                    </p>
                </div>
                <a
                    href={CR_TRACKER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:bg-white/5"
                >
                    Change tracker <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                {series.map((s) => (
                    <span key={s.key} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                        <span className={clsx('w-2.5 h-2.5 rounded-sm', s.color)} />
                        {s.label} ({sum(s.key)})
                    </span>
                ))}
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-4">
                {/* Bars */}
                <div className="space-y-1">
                    {rows.map((m) => (
                        <button
                            key={m.module}
                            onClick={() => setActive(m.module)}
                            title={`${m.module}: ${m.marApr} Mar–Apr · ${m.juneDone} June implemented · ${m.future} future scope`}
                            className={clsx(
                                'w-full grid grid-cols-[130px_1fr_28px] items-center gap-2 rounded px-1.5 py-1 text-left transition-colors',
                                active === m.module ? 'bg-white/10' : 'hover:bg-white/5'
                            )}
                        >
                            <span className={clsx('text-[11px] truncate', active === m.module ? 'text-white font-semibold' : 'text-gray-300')}>{m.module}</span>
                            <span className="flex h-3 gap-0.5" style={{ width: `${(total(m) / max) * 100}%` }}>
                                {series.map((s) =>
                                    m[s.key] > 0 ? <span key={s.key} className={clsx('h-full first:rounded-l last:rounded-r', s.color)} style={{ flex: m[s.key] }} /> : null
                                )}
                            </span>
                            <span className="text-[11px] font-mono text-gray-400 text-right">{total(m)}</span>
                        </button>
                    ))}
                </div>

                {/* Examples */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mod.module}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="rounded-xl bg-white/[0.04] border border-white/10 p-4 self-start"
                    >
                        <div className="flex items-baseline justify-between gap-2 mb-2">
                            <span className="font-semibold text-white">{mod.module}</span>
                            <span className="text-[11px] text-gray-400">{total(mod)} tracked changes</span>
                        </div>
                        <ul className="space-y-1.5">
                            {mod.examples.map((e) => (
                                <li key={e} className="flex gap-2 text-xs text-gray-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 mt-1.5" />
                                    {e}
                                </li>
                            ))}
                        </ul>
                        <p className="text-[10px] text-gray-500 mt-3">Examples only. The full list is in the change tracker.</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ChangeVolume;
