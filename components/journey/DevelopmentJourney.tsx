'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, FileText, GitBranch, Mail, MessageSquareQuote, NotebookPen, Sheet, Users, Zap } from 'lucide-react';
import clsx from 'clsx';
import { phases, quickWins, type EvidenceKind, type ImpactTag } from '@/lib/journeyData';
import ChangeVolume from './ChangeVolume';

const kindMeta: Record<EvidenceKind, { icon: React.ElementType; label: string }> = {
    email: { icon: Mail, label: 'Email' },
    mom: { icon: FileText, label: 'MoM' },
    notes: { icon: NotebookPen, label: 'Meeting notes' },
    tracker: { icon: Sheet, label: 'Tracker' },
    repo: { icon: GitBranch, label: 'Repo' },
    doc: { icon: FileText, label: 'Document' },
    account: { icon: Users, label: 'Team account' },
};

const impactStyle: Record<ImpactTag, string> = {
    'Major delay': 'bg-amber-500/15 text-amber-200 border-amber-500/40',
    Rework: 'bg-orange-500/15 text-orange-200 border-orange-500/40',
    'New scope': 'bg-pink-500/15 text-pink-200 border-pink-500/40',
    'Architecture change': 'bg-red-500/15 text-red-200 border-red-500/40',
    'Extra effort': 'bg-sky-500/15 text-sky-200 border-sky-500/40',
    Descoped: 'bg-gray-500/15 text-gray-300 border-gray-500/40',
};

const allChallenges = phases.flatMap((p) => p.challenges);
const allEvidence = allChallenges.flatMap((c) => c.evidence);
const impactCounts = (Object.keys(impactStyle) as ImpactTag[]).map((t) => ({
    tag: t,
    n: allChallenges.filter((c) => c.impact.includes(t)).length,
}));

const DevelopmentJourney: React.FC = () => {
    const [active, setActive] = useState(phases[0].id);
    const phase = phases.find((p) => p.id === active)!;
    const documented = allEvidence.filter((e) => e.kind !== 'account').length;
    const accounts = allEvidence.length - documented;

    return (
        <section className="relative max-w-6xl mx-auto py-12">
            <div className="text-center mb-8">
                <div className="inline-block mb-3 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-200 text-xs font-medium tracking-wide">
                    Sep 2025 – Sep 2026
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-gradient">Development Journey</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2 max-w-2xl mx-auto">
                    The major changes and problems faced while building PramodOne, each with its sources.
                </p>
            </div>

            {/* Summary */}
            <div className="grid md:grid-cols-[1fr_auto] gap-3 mb-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">{allChallenges.length} challenges, by impact</div>
                    <div className="flex flex-wrap gap-2">
                        {impactCounts.map(({ tag, n }) =>
                            tag === 'Major delay' ? (
                                <span key={tag} className={clsx('text-xs px-2.5 py-1 rounded-full border', impactStyle[tag])}>
                                    Major / longer delays
                                </span>
                            ) : (
                                <span key={tag} className={clsx('text-xs px-2.5 py-1 rounded-full border', impactStyle[tag])}>
                                    <b>{n}</b> {tag}
                                </span>
                            )
                        )}
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2">Only the major delays are listed; smaller delays were too many to track individually.</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex gap-6">
                    <div>
                        <div className="text-2xl font-bold text-emerald-300">{documented}</div>
                        <div className="text-[11px] text-gray-400">documented sources</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-300">{accounts}</div>
                        <div className="text-[11px] text-gray-400">team accounts (no written record)</div>
                    </div>
                </div>
            </div>

            {/* Phase rail */}
            <div className="relative mb-6">
                <div className="absolute left-0 right-0 top-[18px] h-px bg-white/10 hidden md:block" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {phases.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => setActive(p.id)}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <span
                                className={clsx(
                                    'z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all',
                                    active === p.id ? 'bg-orange-500 border-orange-300 text-white scale-110' : 'bg-[var(--bg-secondary)] border-white/20 text-gray-400 group-hover:border-orange-400/60'
                                )}
                            >
                                {i + 1}
                            </span>
                            <span className={clsx('text-xs font-semibold mt-1.5', active === p.id ? 'text-white' : 'text-gray-400')}>{p.label}</span>
                            <span className="text-[10px] font-mono text-gray-500">{p.period}</span>
                            <span className="text-[10px] text-gray-500">{p.challenges.length} item{p.challenges.length > 1 ? 's' : ''}</span>
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="glass-panel rounded-2xl p-4 sm:p-6"
                >
                    <div className="text-lg font-semibold text-white mb-4">{phase.headline}</div>
                    <div className={clsx('grid gap-4', phase.challenges.length > 1 && 'lg:grid-cols-2')}>
                        {phase.challenges.map((c) => (
                            <div key={c.id} className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden">
                                <div className="px-4 pt-3">
                                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                        <span className="text-[11px] font-mono text-indigo-300 mr-1">{c.when}</span>
                                        {c.impact.map((t) => (
                                            <span key={t} className={clsx('text-[10px] px-2 py-0.5 rounded-full border', impactStyle[t])}>{t}</span>
                                        ))}
                                    </div>
                                    <div className="font-semibold text-white leading-snug">{c.title}</div>
                                    <p className="text-sm text-gray-300 leading-relaxed mt-2">{c.happened}</p>
                                </div>
                                <div className="mx-4 mt-3 rounded-lg border-l-4 border-emerald-500 bg-emerald-500/10 px-3 py-2">
                                    <div className="text-[10px] uppercase tracking-wider text-emerald-300">What we did</div>
                                    <p className="text-sm text-emerald-50">{c.response}</p>
                                </div>
                                <div className="px-4 py-3 mt-auto">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Sources</div>
                                    <ul className="space-y-1">
                                        {c.evidence.map((e) => {
                                            const Icon = kindMeta[e.kind].icon;
                                            const body = (
                                                <>
                                                    <Icon className={clsx('w-3.5 h-3.5 shrink-0 mt-0.5', e.kind === 'account' ? 'text-gray-500' : 'text-indigo-300')} />
                                                    <span className="font-mono text-[10px] text-gray-500 shrink-0 w-[92px] pt-px">{e.date}</span>
                                                    <span className={clsx('flex-1', e.kind === 'account' ? 'text-gray-400 italic' : 'text-gray-200')}>
                                                        {e.label}
                                                        {e.kind === 'account' && <span className="not-italic ml-1.5 text-[9px] px-1.5 py-px rounded border border-dashed border-gray-500 text-gray-400">team account</span>}
                                                    </span>
                                                    {e.url && <ExternalLink className="w-3 h-3 shrink-0 mt-0.5 text-indigo-300 opacity-60 group-hover:opacity-100" />}
                                                </>
                                            );
                                            return (
                                                <li key={e.date + e.label}>
                                                    {e.url ? (
                                                        <a href={e.url} target="_blank" rel="noopener noreferrer" className="group flex gap-2 text-xs rounded px-1 -mx-1 py-0.5 hover:bg-white/5">
                                                            {body}
                                                        </a>
                                                    ) : (
                                                        <div className="flex gap-2 text-xs px-1 -mx-1 py-0.5">{body}</div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <ChangeVolume />

            {/* Quick wins */}
            <div className="mt-6 rounded-2xl border border-sky-500/30 bg-sky-500/[0.05] p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-sky-300" />
                    <span className="text-sm font-semibold text-white">Short-turnaround changes that sped up data entry</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {quickWins.map((w) => (
                        <div key={w.title} className="rounded-lg bg-white/5 border border-white/10 p-2.5">
                            <div className="text-xs font-semibold text-white leading-tight">{w.title}</div>
                            <div className="text-[10px] text-gray-400 mt-1 leading-snug">{w.effect}</div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-3">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                Email links open the thread in the Siyaratech mailbox; meeting notes, tracker and repos need Siyaratech access.
            </p>
        </section>
    );
};

export default DevelopmentJourney;
