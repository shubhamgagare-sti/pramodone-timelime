'use client';

import React from 'react';
import { bottlenecks } from '@/lib/timelineData';
import { FileX, Layers, Clock, AlertTriangle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    FileX: <FileX className="w-8 h-8" />,
    Layers: <Layers className="w-8 h-8" />,
    Clock: <Clock className="w-8 h-8" />,
    AlertTriangle: <AlertTriangle className="w-8 h-8" />,
};

const BottleneckCards: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Key <span className="text-red-400">Bottlenecks</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                Critical friction points identified in the development lifecycle that have caused delays and misalignment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {bottlenecks.map((item) => (
                    <div key={item.id} className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300">
                        <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/20 transition-colors">
                            {iconMap[item.icon as string] || <AlertTriangle />}
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottleneckCards;
