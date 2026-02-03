'use client';

import React from 'react';
import { AlertTriangle, Clock, Layers, Lock, FileQuestion, TrendingDown } from 'lucide-react';

export default function SummaryStats() {
  const stats = [
    {
      label: 'Communication Period',
      value: '6 Months',
      subtext: 'Aug 2025 - Jan 2026',
      icon: Clock,
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      label: 'Critical Issues',
      value: '5',
      subtext: 'Identified bottlenecks',
      icon: AlertTriangle,
      color: 'from-red-500/20 to-red-600/20',
    },
    {
      label: 'Scope Creep',
      value: '3 Features',
      subtext: 'Added after sign-off',
      icon: Layers,
      color: 'from-amber-500/20 to-amber-600/20',
    },
    {
      label: 'Delay Impact',
      value: '58 Days',
      subtext: 'Sep 4 to Nov (docs delay)',
      icon: TrendingDown,
      color: 'from-orange-500/20 to-orange-600/20',
    },
    {
      label: 'Documentation Gaps',
      value: '4 Areas',
      subtext: 'Material Library, Roles, Workflows, MoM',
      icon: FileQuestion,
      color: 'from-pink-500/20 to-pink-600/20',
    },
    {
      label: 'Access Matrix',
      value: 'Outstanding',
      subtext: 'Since Oct 6, 2025',
      icon: Lock,
      color: 'from-purple-500/20 to-purple-600/20',
    },
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Key Metrics & Impact</h2>
        <p className="text-gray-400">Quantified bottlenecks across the 6-month project timeline</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`p-6 rounded-lg border border-white/10 bg-gradient-to-br ${stat.color} backdrop-blur-md hover:border-white/20 transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">Primary Cause: Breakdown in Communication Protocol</h3>
            <p className="text-gray-300 text-sm">
              No formal structure for document submissions, change requests, or requirement confirmation. Scope definition scattered across emails 
              with no single source of truth. KB team not returning signed-off Minutes of Meeting (MoM), creating constant misalignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
