'use client';

import React from 'react';
import { timelineData } from '@/lib/timelineData';
import clsx from 'clsx';
import { Check, X, AlertCircle } from 'lucide-react';

const DeliverablesTable: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Deliverable <span className="text-gradient">Status Matrix</span>
            </h2>

            <div className="glass-panel rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-5 font-semibold text-gray-300">Date</th>
                            <th className="p-5 font-semibold text-gray-300">Category</th>
                            <th className="p-5 font-semibold text-gray-300">Event / Document Status</th>
                            <th className="p-5 font-semibold text-gray-300 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timelineData.map((item, index) => (
                            <tr
                                key={item.id}
                                className={clsx(
                                    "border-b border-white/5 hover:bg-white/5 transition-colors",
                                    index === timelineData.length - 1 ? "border-0" : ""
                                )}
                            >
                                <td className="p-5 text-sm font-mono text-indigo-300 whitespace-nowrap">{item.date}</td>
                                <td className="p-5 text-sm font-medium text-white">{item.category}</td>
                                <td className="p-5 text-sm text-gray-400 max-w-md">{item.description}</td>
                                <td className="p-5 text-right">
                                    <StatusBadge status={item.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const StatusBadge = ({ status }: { status: string }) => {
    let className = "badge badge-neutral";
    let label = status.replace('-', ' ');
    let icon = null;

    switch (status) {
        case 'completed':
            className = "badge badge-success";
            icon = <Check className="w-3 h-3 mr-1" />;
            break;
        case 'missing':
            className = "badge badge-danger";
            icon = <X className="w-3 h-3 mr-1" />;
            break;
        case 'format-issue':
            className = "badge badge-warning";
            icon = <AlertCircle className="w-3 h-3 mr-1" />;
            break;
        case 'gap':
            className = "badge badge-danger";
            label = "KB Gap";
            icon = <AlertCircle className="w-3 h-3 mr-1" />;
            break;
        case 'new-scope':
            className = "badge badge-info";
            label = "New Scope";
            icon = <AlertCircle className="w-3 h-3 mr-1" />;
            break;
        case 'pending':
            className = "badge badge-warning";
            break;
    }

    return (
        <span className={clsx("badge", className)}>
            {icon}
            {label}
        </span>
    );
};

export default DeliverablesTable;
