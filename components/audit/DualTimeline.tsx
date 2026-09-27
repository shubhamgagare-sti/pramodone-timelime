'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { laneEvents, timelineRange, type LaneEvent } from '@/lib/auditData';

const DAY = 86_400_000;
const t0 = new Date(timelineRange.start).getTime();
const t1 = new Date(timelineRange.end).getTime();
const pct = (iso: string) => ((new Date(iso).getTime() - t0) / (t1 - t0)) * 100;
const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const months = (() => {
    const out: { label: string; left: number }[] = [];
    const d = new Date(timelineRange.start);
    while (d.getTime() <= t1) {
        const iso = d.toISOString().slice(0, 10);
        out.push({
            label: d.toLocaleDateString('en-GB', { month: 'short' }) + (d.getMonth() === 0 || out.length === 0 ? ` '${String(d.getFullYear()).slice(2)}` : ''),
            left: pct(iso),
        });
        d.setMonth(d.getMonth() + 1);
    }
    return out;
})();

// Greedy row packing so KB bars + labels don't collide
const LABEL_SPACE = 18; // % of width a label needs
const LABEL_FLIP = 85; // bars starting past this % put their label on the left
function span(e: LaneEvent): [number, number] {
    const start = pct(e.date);
    const end = e.end ? pct(e.end) : start + 0.8;
    return start > LABEL_FLIP ? [start - LABEL_SPACE, end] : [start, end + LABEL_SPACE];
}
function packRows(events: LaneEvent[]) {
    const rows: [number, number][][] = [];
    return events.map((e) => {
        const [a, b] = span(e);
        let row = rows.findIndex((r) => r.every(([x, y]) => b < x || a > y));
        if (row === -1) {
            row = rows.length;
            rows.push([]);
        }
        rows[row].push([a, b]);
        return { e, row };
    });
}

const DualTimeline: React.FC = () => {
    const st = laneEvents.filter((e) => e.lane === 'siyaratech');
    const kb = useMemo(() => packRows(laneEvents.filter((e) => e.lane === 'kb')), []);
    const ms = laneEvents.filter((e) => e.lane === 'milestone');
    const kbRows = Math.max(...kb.map((k) => k.row)) + 1;

    const [sel, setSel] = useState<LaneEvent>(laneEvents.find((e) => e.title === 'Master Material Library')!);

    const bandStart = pct('2026-01-22');
    const bandEnd = pct('2026-08-18');

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-400" /> SiyaraTech release / demo</span>
                <span className="flex items-center gap-1.5"><span className="w-5 h-2.5 rounded bg-amber-500/80" /> KB input: requested → delivered</span>
                <span className="flex items-center gap-1.5"><span className="w-5 h-2.5 rounded bg-red-500/80" /> KB input delayed</span>
                <span className="flex items-center gap-1.5"><span className="w-0.5 h-3 bg-pink-400" /> Key event</span>
                <span className="text-gray-500">Click any mark for details</span>
            </div>

            <div className="overflow-x-auto -mx-2 px-2 pb-2">
                <div className="relative min-w-[900px]" style={{ height: 170 + kbRows * 34 + 50 }}>
                    {/* Data-wait band */}
                    <div
                        className="absolute top-0 bottom-6 bg-amber-500/[0.07] border-x border-dashed border-amber-500/30"
                        style={{ left: `${bandStart}%`, width: `${bandEnd - bandStart}%` }}
                    >
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-amber-300/80 whitespace-nowrap">
                            the “5-month” window — waiting on KB master data
                        </span>
                    </div>

                    {/* Milestone lines + flags */}
                    {ms.map((m, i) => (
                        <button
                            key={m.title}
                            onClick={() => setSel(m)}
                            className="absolute top-0 bottom-6 group"
                            style={{ left: `${pct(m.date)}%` }}
                        >
                            <span className={clsx('absolute top-0 bottom-0 w-px -translate-x-1/2', sel === m ? 'bg-pink-300' : 'bg-pink-500/50 group-hover:bg-pink-400')} />
                            <span
                                className={clsx(
                                    'absolute whitespace-nowrap text-[10px] font-semibold px-1.5 py-0.5 rounded border',
                                    pct(m.date) > 90 ? '-translate-x-full' : '-translate-x-1/2',
                                    sel === m ? 'bg-pink-500 text-white border-pink-300' : 'bg-[var(--bg-secondary)] text-pink-200 border-pink-500/40'
                                )}
                                style={{ top: (i % 3) * 20 }}
                            >
                                {m.title}
                            </span>
                        </button>
                    ))}

                    {/* SiyaraTech lane */}
                    <div className="absolute left-0 right-0" style={{ top: 84 }}>
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-emerald-500/30" />
                        <span className="absolute -top-5 left-0 text-[11px] font-semibold text-emerald-300">SiyaraTech delivered</span>
                        {st.map((e) => (
                            <button
                                key={e.title}
                                title={`${fmt(e.date)} — ${e.title}`}
                                onClick={() => setSel(e)}
                                className={clsx(
                                    'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-full transition-all',
                                    sel === e ? 'w-5 h-5 bg-white ring-4 ring-emerald-400/60' : 'w-3.5 h-3.5 bg-emerald-400 hover:scale-150'
                                )}
                                style={{ left: `${pct(e.date)}%` }}
                            />
                        ))}
                    </div>

                    {/* KB lane */}
                    <div className="absolute left-0 right-0" style={{ top: 140 }}>
                        <span className="absolute -top-1 left-0 text-[11px] font-semibold text-amber-300">KB provided</span>
                        {kb.map(({ e, row }) => {
                            const left = pct(e.date);
                            const right = e.end ? pct(e.end) : left;
                            const width = Math.max(right - left, 0.8);
                            const labelLeft = left > LABEL_FLIP; // keep labels inside the chart near the right edge
                            return (
                                <button
                                    key={e.title}
                                    onClick={() => setSel(e)}
                                    className="group"
                                >
                                    <span
                                        className={clsx(
                                            'absolute h-3.5 rounded transition-all',
                                            e.late ? 'bg-red-500/80' : 'bg-amber-500/80',
                                            sel === e ? 'ring-2 ring-white' : 'group-hover:brightness-125'
                                        )}
                                        style={{ left: `${left}%`, width: `${width}%`, top: 20 + row * 34 }}
                                    />
                                    <span
                                        className={clsx(
                                            'absolute text-[11px] whitespace-nowrap leading-none',
                                            labelLeft && '-translate-x-full',
                                            sel === e ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'
                                        )}
                                        style={{ left: labelLeft ? `calc(${left}% - 6px)` : `calc(${left + width}% + 6px)`, top: 22 + row * 34 }}
                                    >
                                        {e.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Month axis */}
                    <div className="absolute left-0 right-0 bottom-0 h-6 border-t border-white/10">
                        {months.map((m, i) => (
                            <span key={m.label + m.left} className={clsx('absolute top-1 text-[10px] text-gray-500 whitespace-nowrap', i > 0 && '-translate-x-1/2')} style={{ left: `${m.left}%` }}>
                                {m.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail panel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={sel.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={clsx(
                        'rounded-xl p-4 border-l-4 bg-white/5',
                        sel.lane === 'siyaratech' ? 'border-emerald-400' : sel.lane === 'milestone' ? 'border-pink-400' : sel.late ? 'border-red-500' : 'border-amber-400'
                    )}
                >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <span className="font-mono text-xs text-indigo-300">
                            {fmt(sel.date)}
                            {sel.end && ` → ${fmt(sel.end)}`}
                            {sel.end && <b className="ml-2 text-amber-300">{Math.round((new Date(sel.end).getTime() - new Date(sel.date).getTime()) / DAY)} days</b>}
                        </span>
                        <span className="text-white font-semibold">{sel.title}</span>
                    </div>
                    <p className="text-sm text-gray-300">{sel.detail}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default DualTimeline;
