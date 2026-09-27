'use client';

import React from 'react';
import { commitWaves, hotFeatures, repoStats } from '@/lib/auditData';

const HBars: React.FC<{ rows: { label: string; value: number; note?: string }[]; color: string; unit?: string }> = ({ rows, color, unit = '' }) => {
    const max = Math.max(...rows.map((r) => r.value));
    return (
        <div className="space-y-1">
            {rows.map((r) => (
                <div key={r.label} className="group grid grid-cols-[minmax(0,150px)_1fr] items-center gap-2" title={`${r.label}: ${r.value}${unit}${r.note ? ` · ${r.note}` : ''}`}>
                    <span className="text-[11px] text-gray-300 truncate group-hover:text-white">{r.label}</span>
                    <div className="flex items-center gap-1.5">
                        <div className="h-3 rounded-r transition-all group-hover:brightness-125" style={{ width: `${(r.value / max) * 100}%`, minWidth: 3, background: color }} />
                        <span className="text-[11px] font-mono text-gray-400 shrink-0">{r.value.toLocaleString('en-IN')}{unit}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

const EffortCost: React.FC = () => {
    const waveMax = Math.max(...commitWaves.map((w) => w.commits));

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    ['1,509', 'commits across 12 repos'],
                    ['306', 'commits after 7 PM (20%)'],
                    ['~296', 'custom DocTypes'],
                    ['22', 'custom reports'],
                    ['~90', 'enhancements, Mar–Apr'],
                    ['~21', 'fixes in 2 weeks, June'],
                ].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <div className="text-2xl font-bold text-indigo-300">{v}</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">{l}</div>
                    </div>
                ))}
            </div>

            {/* Commit waves */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-sm font-semibold text-white">Every meeting and deployment was followed by a wave of work</div>
                <div className="text-[11px] text-gray-400 mb-3">Commits across all repos in the window after each event</div>
                <div className="overflow-x-auto">
                    <div className="flex items-end gap-1.5 h-44 min-w-[640px]">
                        {commitWaves.map((w) => (
                            <div key={w.window} className="group flex-1 flex flex-col items-center justify-end h-full" title={`${w.window} (${w.trigger}): ${w.commits} commits`}>
                                <span className="text-[10px] font-mono text-gray-400 group-hover:text-white mb-0.5">{w.commits}</span>
                                <div
                                    className={w.trigger === 'Site visit change wave' ? 'w-full rounded-t bg-pink-400' : 'w-full rounded-t bg-indigo-400/80 group-hover:bg-indigo-300'}
                                    style={{ height: `${Math.max((w.commits / waveMax) * 100, 2)}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-1.5 min-w-[640px] mt-1.5">
                        {commitWaves.map((w) => (
                            <div key={w.window} className="flex-1 text-center">
                                <div className="text-[9px] text-gray-300 leading-tight">{w.trigger}</div>
                                <div className="text-[9px] font-mono text-gray-500 leading-tight">{w.window}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <div className="text-sm font-semibold text-white">Commits by repo</div>
                    <div className="text-[11px] text-gray-400 mb-3">Full git history, all branches</div>
                    <HBars
                        rows={repoStats.map((r) => ({ label: r.repo, value: r.commits, note: r.doctypes ? `${r.doctypes} DocTypes` : undefined }))}
                        color="#818cf8"
                    />
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                    <div className="text-sm font-semibold text-white">Most-revised features</div>
                    <div className="text-[11px] text-gray-400 mb-3">Times each feature was changed. High counts track KB change requests</div>
                    <HBars rows={hotFeatures.map((f) => ({ label: f.name, value: f.n }))} color="#fb923c" unit="×" />
                </div>
            </div>
        </div>
    );
};

export default EffortCost;
