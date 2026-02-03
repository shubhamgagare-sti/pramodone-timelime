'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '@/lib/timelineData';
import { CheckCircle2, AlertCircle, Clock, FileWarning, XCircle, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case 'completed': return <CheckCircle2 className="text-emerald-400 w-5 h-5" />;
        case 'missing': return <XCircle className="text-red-400 w-5 h-5" />;
        case 'format-issue': return <FileWarning className="text-amber-400 w-5 h-5" />;
        case 'gap': return <AlertCircle className="text-orange-500 w-5 h-5" />;
        case 'pending': return <Clock className="text-yellow-400 w-5 h-5" />;
        case 'new-scope': return <ArrowRight className="text-pink-500 w-5 h-5" />;
        default: return <div className="w-5 h-5 rounded-full border-2 border-gray-500" />;
    }
};

const Timeline: React.FC = () => {
    return (
        <div className="relative container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="text-gradient">Deliverable Timeline</span>
            </h2>

            <div className="relative max-w-6xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-indigo-500/20 via-indigo-500/50 to-indigo-500/20" />

                {timelineData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={clsx(
                "relative flex items-center mb-12",
                "flex-row md:flex-row",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Spacer for Desktop */}
            <div className="hidden md:block w-1/2" />

            {/* Node on Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 border-4 border-[var(--bg-primary)]" />

            {/* Content Card */}
            <div className={clsx(
                "w-full md:w-1/2 pl-20 md:pl-0",
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
            )}>
                <div className="glass-card p-6 rounded-xl border-l-4" style={{
                    borderLeftColor:
                        item.status === 'completed' ? 'var(--accent-success)' :
                            item.status === 'missing' ? 'var(--accent-danger)' :
                                item.status === 'gap' ? 'var(--accent-danger)' :
                                    item.status === 'new-scope' ? 'var(--accent-secondary)' : 'var(--accent-warning)'
                }}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                            {item.date}
                        </span>
                        <div className="flex items-center space-x-2" title={item.status}>
                            <StatusIcon status={item.status} />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-xs uppercase tracking-wider text-gray-500">{item.category}</div>
                        {item.delayDays && item.delayDays > 3 && (
                            <div className={clsx(
                                "text-xs font-bold px-2 py-1 rounded",
                                item.delayDays >= 84 ? "bg-red-500/30 text-red-200 border border-red-500/50" :
                                item.delayDays >= 25 ? "bg-orange-500/30 text-orange-200 border border-orange-500/50" :
                                "bg-yellow-500/30 text-yellow-200 border border-yellow-500/50"
                            )}>
                                ⏱️ {item.delayDays >= 999 ? 'OUTSTANDING' : `${item.delayDays} Days Delayed`}
                            </div>
                        )}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {item.description}
                    </p>

                    {item.delayReason && item.delayDays && item.delayDays > 3 && (
                        <div className={clsx(
                            "text-xs p-2 rounded border-l-2 bg-red-500/10",
                            item.delayDays >= 84 ? "border-l-red-500" :
                            item.delayDays >= 25 ? "border-l-orange-500" :
                            "border-l-yellow-500"
                        )}>
                            <span className="text-red-300">{item.delayReason}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Timeline;
