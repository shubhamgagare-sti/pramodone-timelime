'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ArrowRight, Boxes, ExternalLink, FileText, CalendarRange, LayoutDashboard, Scale, TrendingUp, X } from 'lucide-react';
import clsx from 'clsx';
import { auditKpis, coreFacts } from '@/lib/auditData';
import ClaimsBoard from './ClaimsBoard';
import DualTimeline from './DualTimeline';
import ScopeGrowth from './ScopeGrowth';
import ModuleGrid from './ModuleGrid';
import EffortCost from './EffortCost';

const AUDIT_DOC_URL = 'https://docs.google.com/document/d/1W84x_QRNDxRt-CJmHp9mPfvIqdKJji4f6ttzcXY80D4/edit?usp=sharing';

const toneClass: Record<string, string> = {
    primary: 'text-indigo-300',
    secondary: 'text-pink-300',
    success: 'text-emerald-300',
    danger: 'text-red-300',
};

const Overview: React.FC = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {auditKpis.map((k) => (
                <div key={k.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className={clsx('text-2xl font-bold', toneClass[k.tone])}>{k.value}</div>
                    <div className="text-[11px] text-gray-400 leading-snug mt-1">{k.label}</div>
                </div>
            ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-3">
            {coreFacts.map((f, i) => (
                <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col rounded-xl bg-white/[0.04] border border-white/10 overflow-hidden"
                >
                    <div className="px-4 pt-3 pb-2 flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-500">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-semibold text-white">{f.title}</span>
                    </div>

                    <div className="mx-4 rounded-lg border-l-4 border-red-500 bg-red-500/10 px-3 py-2">
                        <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-red-300">
                            <X className="w-3 h-3" /> KB MoM (18 Sep 2026) says
                        </div>
                        <p className="text-sm text-red-50/90 mt-0.5">“{f.claim}”</p>
                    </div>

                    <div className="px-4 py-3 flex-1">
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Project record</div>
                        <ul className="space-y-1.5">
                            {f.evidence.map((e) => (
                                <li key={e.text} className="grid grid-cols-[132px_1fr] gap-2 text-xs">
                                    <span className="font-mono text-indigo-300 pt-px whitespace-nowrap">{e.date}</span>
                                    <span className="text-gray-200 leading-relaxed">{e.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-start gap-2 px-4 py-2.5 bg-emerald-500/15 border-t border-emerald-500/30">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-emerald-100">{f.conclusion}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const tabs = [
    { id: 'overview', label: 'At a glance', icon: LayoutDashboard, render: () => <Overview /> },
    { id: 'claims', label: '14 claims', icon: Scale, render: () => <ClaimsBoard /> },
    { id: 'timeline', label: 'Who waited on whom', icon: CalendarRange, render: () => <DualTimeline /> },
    { id: 'scope', label: 'Scope growth', icon: TrendingUp, render: () => <ScopeGrowth /> },
    { id: 'modules', label: 'Modules: planned vs built', icon: Boxes, render: () => <ModuleGrid /> },
    { id: 'effort', label: 'Effort & evidence', icon: Activity, render: () => <EffortCost /> },
];

const AuditDashboard: React.FC = () => {
    const [tab, setTab] = useState(tabs[0].id);
    const current = tabs.find((t) => t.id === tab)!;

    return (
        <section className="relative max-w-6xl mx-auto py-12">
            <div className="text-center mb-8">
                <div className="inline-block mb-3 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-200 text-xs font-medium tracking-wide">
                    Response to KB MoM dated 18 Sep 2026
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-gradient">Technical Audit &amp; Rebuttal</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2">PramodOne ERP (Project KB-Connect) · Jul 2025 – Sep 2026 · evidence from emails, MoMs, release logs &amp; work logs</p>
                <a
                    href={AUDIT_DOC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-400/40 text-indigo-100 text-sm font-medium hover:bg-indigo-500/30 transition-colors"
                >
                    <FileText className="w-4 h-4" />
                    Read the full audit document
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
            </div>

            <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] p-1 rounded-xl bg-white/5 border border-white/10 mb-6">
                {tabs.map((t) => {
                    const Icon = t.icon;
                    return (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            className={clsx(
                                'relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors',
                                tab === t.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                            )}
                        >
                            {tab === t.id && (
                                <motion.span layoutId="audit-tab" className="absolute inset-0 rounded-lg bg-indigo-500/30 border border-indigo-400/40" />
                            )}
                            <Icon className="relative w-4 h-4" />
                            <span className="relative">{t.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {current.render()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AuditDashboard;
