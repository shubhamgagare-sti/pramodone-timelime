'use client';

import React, { useMemo, useState } from 'react';
import { Calculator, Info, ListChecks, Scale } from 'lucide-react';
import {
    BUILD_END,
    BUILD_START,
    DOCUMENTED_HOURS,
    ORIGINAL_QUOTE,
    ORIGINAL_WEEKS,
    SCOPE_SHARE,
    unplannedItems,
} from '@/lib/costingData';

const lakh = (n: number) => `₹${(n / 100000).toFixed(2).replace(/\.?0+$/, '')}L`;
const rupees = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;
const buildWeeks = Math.round((new Date(BUILD_END).getTime() - new Date(BUILD_START).getTime()) / (7 * 86_400_000));

const NumberField: React.FC<{ label: string; value: number; onChange: (v: number) => void; hint?: string; step?: number }> = ({ label, value, onChange, hint, step = 1 }) => (
    <label className="block">
        <span className="text-[11px] text-gray-400">{label}</span>
        <input
            type="number"
            min={0}
            step={step}
            value={value}
            onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
            className="mt-1 w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-indigo-400"
        />
        {hint && <span className="text-[10px] text-gray-500">{hint}</span>}
    </label>
);

const CostEstimate: React.FC = () => {
    const extra = unplannedItems.reduce((s, i) => s + i.price, 0);
    const itemMax = Math.max(...unplannedItems.map((i) => i.price));

    // Effort calculator inputs
    const [quoteTeam, setQuoteTeam] = useState(4);
    const [hoursPerWeek, setHoursPerWeek] = useState(45);
    const [actualTeam, setActualTeam] = useState(4);
    const [actualWeeks, setActualWeeks] = useState(buildWeeks);

    const effort = useMemo(() => {
        const plannedHours = quoteTeam * hoursPerWeek * ORIGINAL_WEEKS;
        const rate = plannedHours ? ORIGINAL_QUOTE / plannedHours : 0;
        const actualHours = actualTeam * hoursPerWeek * actualWeeks;
        return { plannedHours, rate, actualHours, value: actualHours * rate, multiple: plannedHours ? actualHours / plannedHours : 0 };
    }, [quoteTeam, hoursPerWeek, actualTeam, actualWeeks]);

    const methods = [
        { key: 'orig', label: 'Original 12-week quote', low: ORIGINAL_QUOTE, high: ORIGINAL_QUOTE, color: '#94a3b8', note: 'What was priced' },
        { key: 'items', label: 'A · Itemised unplanned work', low: ORIGINAL_QUOTE + extra, high: ORIGINAL_QUOTE + extra, color: '#818cf8', note: `Quote + ${lakh(extra)} of listed items` },
        { key: 'effort', label: 'B · Effort at the quoted rate', low: effort.value, high: effort.value, color: '#f472b6', note: `${effort.multiple.toFixed(1)}× the planned hours` },
        { key: 'scope', label: 'C · Scope share (20–25% planned)', low: ORIGINAL_QUOTE / SCOPE_SHARE.high, high: ORIGINAL_QUOTE / SCOPE_SHARE.low, color: '#fb923c', note: 'If the quote covered only 20–25% of the build' },
    ];
    const axisMax = Math.max(...methods.map((m) => m.high)) * 1.3;

    return (
        <div className="space-y-6">
            {/* Comparison */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1">
                    <Scale className="w-4 h-4 text-indigo-300" />
                    <span className="text-sm font-semibold text-white">What the development should cost: three ways to measure it</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-4">All three start from the original 12-week quote of {rupees(ORIGINAL_QUOTE)}.</p>
                <div className="space-y-3">
                    {methods.map((m) => (
                        <div key={m.key} className="grid grid-cols-1 sm:grid-cols-[210px_1fr] gap-1 sm:gap-3 items-center" title={`${m.label}: ${m.low === m.high ? lakh(m.low) : `${lakh(m.low)} – ${lakh(m.high)}`}`}>
                            <div>
                                <div className="text-xs font-semibold text-gray-200">{m.label}</div>
                                <div className="text-[10px] text-gray-500">{m.note}</div>
                            </div>
                            <div className="relative h-6">
                                <div className="absolute inset-y-0 left-0 rounded-r" style={{ width: `${(m.low / axisMax) * 100}%`, background: m.color, opacity: 0.85 }} />
                                {m.high > m.low && (
                                    <div
                                        className="absolute inset-y-0 rounded-r"
                                        style={{ left: `${(m.low / axisMax) * 100}%`, width: `${((m.high - m.low) / axisMax) * 100}%`, background: `repeating-linear-gradient(45deg, ${m.color}55 0 4px, transparent 4px 8px)` }}
                                    />
                                )}
                                <span className="absolute top-1/2 -translate-y-1/2 text-xs font-mono font-semibold text-white pl-2" style={{ left: `${(m.high / axisMax) * 100}%` }}>
                                    {m.low === m.high ? lakh(m.low) : `${lakh(m.low)} – ${lakh(m.high)}`}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                {/* A: itemised */}
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1">
                        <ListChecks className="w-4 h-4 text-indigo-300" />
                        <span className="text-sm font-semibold text-white">A · Itemised unplanned work</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mb-3">
                        {unplannedItems.length} items = <b className="text-indigo-200">{rupees(extra)}</b> → total <b className="text-white">{rupees(ORIGINAL_QUOTE + extra)}</b>
                    </p>
                    <div className="space-y-1.5">
                        {unplannedItems.map((i) => (
                            <div key={i.item} className="group" title={i.why}>
                                <div className="flex justify-between gap-2 text-[11px]">
                                    <span className="text-gray-300 group-hover:text-white">{i.item}</span>
                                    <span className="font-mono text-gray-400 shrink-0">{rupees(i.price)}</span>
                                </div>
                                <div className="h-1.5 rounded-r bg-indigo-400/80" style={{ width: `${(i.price / itemMax) * 100}%` }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* B: effort calculator */}
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1">
                        <Calculator className="w-4 h-4 text-pink-300" />
                        <span className="text-sm font-semibold text-white">B · Effort at the quoted rate</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mb-3">
                        Works out the hourly rate the quote implies, then prices the hours actually spent at that same rate. Edit the inputs.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <NumberField label="Team assumed in the quote" value={quoteTeam} onChange={setQuoteTeam} hint={`over ${ORIGINAL_WEEKS} weeks`} />
                        <NumberField label="Hours / person / week" value={hoursPerWeek} onChange={setHoursPerWeek} />
                        <NumberField label="Actual core team" value={actualTeam} onChange={setActualTeam} hint="developers on the build" />
                        <NumberField label="Actual build weeks" value={actualWeeks} onChange={setActualWeeks} hint="Sep 17, 2025 → Sep 26, 2026" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {[
                            ['Planned hours', effort.plannedHours.toLocaleString('en-IN')],
                            ['Implied rate', `${rupees(effort.rate)}/hr`],
                            ['Actual hours', effort.actualHours.toLocaleString('en-IN')],
                        ].map(([l, v]) => (
                            <div key={l} className="rounded-lg bg-white/5 p-2">
                                <div className="text-[10px] text-gray-500">{l}</div>
                                <div className="text-sm font-mono text-white">{v}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 rounded-lg border border-pink-500/40 bg-pink-500/10 p-3 flex items-baseline justify-between">
                        <span className="text-xs text-pink-200">Value of effort</span>
                        <span className="text-xl font-bold text-white">{lakh(effort.value)}</span>
                    </div>
                    <p className="flex gap-1.5 text-[10px] text-gray-500 mt-2">
                        <Info className="w-3 h-3 shrink-0 mt-px" />
                        Only {DOCUMENTED_HOURS.person}&apos;s {DOCUMENTED_HOURS.hours.toLocaleString('en-IN')} hrs ({DOCUMENTED_HOURS.from} – {DOCUMENTED_HOURS.to}) are documented, which is ~45 hrs/week. The rest of the team is assumed at the same pace; replace with timesheet totals.
                    </p>
                </div>
            </div>

            {/* C + reading */}
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.05] p-4 sm:p-5 text-sm text-gray-300 space-y-2">
                <div className="font-semibold text-white">How to read this</div>
                <p>
                    <b className="text-indigo-200">A ({lakh(ORIGINAL_QUOTE + extra)})</b> is the floor: it prices only the listed unplanned items and gives nothing for rework,
                    changed requirements or data clean-up.
                </p>
                <p>
                    <b className="text-pink-200">B ({lakh(effort.value)})</b> prices the time actually spent at the rate KB already accepted. It is the fairest measure of
                    effort, but depends on real timesheet totals.
                </p>
                <p>
                    <b className="text-orange-200">C ({lakh(ORIGINAL_QUOTE / SCOPE_SHARE.high)} – {lakh(ORIGINAL_QUOTE / SCOPE_SHARE.low)})</b> uses the estimate that the
                    original plan covered 20–25% of what was built. It is the least precise and best used as a cross-check on B.
                </p>
            </div>
        </div>
    );
};

export default CostEstimate;
