'use client';

import React, { useState } from 'react';
import { AlertTriangle, Clock, Users, FileX, Settings, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RootCauseAnalysis() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const rootCauses = [
    {
      id: 'feedback-loop',
      title: 'The Feedback Latency Loop',
      subtitle: 'Context Switching Doubles Development Time',
      image: '/images/feedback-latency-loop.png',
      keyInsight: 'KB delays feedback until Day 7-8, after developers move to next sprint. Returning to fix Day 0 issues doubles development time.',
      severity: 'critical',
      icon: Clock,
    },
    {
      id: 'vision-gap',
      title: 'Internal Misalignment: Vision vs. Execution Gap',
      subtitle: 'Strategic Intent vs. Manual Workflows',
      image: '/images/vision-execution-gap.png',
      keyInsight: 'MD envisions integrated systems while KB operates with manual workflows and hidden processes (e.g., Dec 29 Subcontractor Billing Gap). Cannot build for two different visions.',
      severity: 'critical',
      icon: Users,
    },
    {
      id: 'request-receipt',
      title: 'Request-to-Receipt Latency',
      subtitle: 'Audit of Time: 6-Month Delay Pattern',
      image: '/images/request-receipt-latency.png',
      keyInsight: 'Budget Logic: 10-day lag (Oct 18 to Oct 28). Quality Docs: 5-day lag (Jan 9 to Jan 14). Initial Documents: 10-day partial receipt (Aug 20 to Aug 30). Consistent 5-10 day delays across all domains.',
      severity: 'high',
      icon: TrendingDown,
    },
    {
      id: 'financial-blocker',
      title: 'Critical Blocker #2: Financial Logic & Planning Data',
      subtitle: 'Incorrect Data / Missing Workflows',
      image: '/images/financial-logic-blocker.png',
      keyInsight: 'Rate Analysis document flagged as incorrect on Jan 15 (corrected version pending). "How Planning Works" workflow still missing. ERP budgeting and estimation modules cannot be finalized without accurate base rates.',
      severity: 'critical',
      icon: FileX,
    },
    {
      id: 'workflow-blocker',
      title: 'Critical Blocker #3: Operational Workflow Definition',
      subtitle: 'Process Gaps & Data Format Issues',
      image: '/images/operational-workflow-blocker.png',
      keyInsight: 'Subcontractor Billing workflow undefined (Dec 29). Task management data received in mixed Word/Excel formats requiring manual cleaning. KB lacks internal process documentation and data standardization.',
      severity: 'critical',
      icon: Settings,
    },
    {
      id: 'execution-lag',
      title: 'Technical Execution Lagged Behind Conceptual Logic',
      subtitle: 'Oct-Nov 2025: The Planning Disconnect',
      image: '/images/technical-execution-lag.png',
      keyInsight: '10-day lag between Logic Flowchart shared (Oct 18) and MPP Files received (Oct 28). Formatting disconnect: task lists in inconsistent formats. Delays between conceptual agreement and technical delivery.',
      severity: 'high',
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold mb-4 border border-red-500/30">
          TECHNICAL AUDIT
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
          Root Cause Analysis
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl">
          Six interconnected systemic failures preventing effective knowledge transfer, process alignment, and timely delivery. Each root cause multiplies project delays exponentially.
        </p>
      </div>

      {/* Carousel Gallery */}
      <div className="mb-16">
        <div className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-1 overflow-hidden">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {!imageErrors[rootCauses[activeIndex].id] ? (
              <img
                src={rootCauses[activeIndex].image || "/placeholder.svg"}
                alt={rootCauses[activeIndex].title}
                onError={() => handleImageError(rootCauses[activeIndex].id)}
                className="w-full h-full object-contain"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800/50 to-black/50">
                <AlertTriangle className="w-16 h-16 text-orange-400 mb-4" />
                <p className="text-gray-400 text-center px-6">
                  <span className="block font-semibold mb-2">{rootCauses[activeIndex].title}</span>
                  <span className="text-sm">Detailed audit diagram - refer to key insight below</span>
                </p>
              </div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + rootCauses.length) % rootCauses.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % rootCauses.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slide Indicators and Current Info */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            {rootCauses.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-red-500' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Current Cause Details */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg flex-shrink-0 ${
                rootCauses[activeIndex].severity === 'critical' 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-orange-500/20 text-orange-400'
              }`}>
                {React.createElement(rootCauses[activeIndex].icon, { size: 24 })}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{rootCauses[activeIndex].title}</h3>
                <p className="text-sm text-gray-400">{rootCauses[activeIndex].subtitle}</p>
              </div>
              <div className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${
                rootCauses[activeIndex].severity === 'critical'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
              }`}>
                {rootCauses[activeIndex].severity === 'critical' ? 'CRITICAL' : 'HIGH'} SEVERITY
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 ${
              rootCauses[activeIndex].severity === 'critical'
                ? 'bg-red-500/10 border-l-red-500'
                : 'bg-orange-500/10 border-l-orange-500'
            }`}>
              <p className="text-gray-300 leading-relaxed">{rootCauses[activeIndex].keyInsight}</p>
            </div>

            {/* Slide counter */}
            <div className="mt-4 text-xs text-gray-500">
              {activeIndex + 1} of {rootCauses.length}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Impact Box */}
      <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">Compounding Effect: The System-Level Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <div className="text-red-400 text-2xl flex-shrink-0">⚡</div>
            <div>
              <p className="text-sm text-gray-400">Feedback delays</p>
              <p className="text-white font-semibold">Halve development velocity</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-red-400 text-2xl flex-shrink-0">🔄</div>
            <div>
              <p className="text-sm text-gray-400">Manual workflows</p>
              <p className="text-white font-semibold">Prevent automation gains</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-red-400 text-2xl flex-shrink-0">📊</div>
            <div>
              <p className="text-sm text-gray-400">Data inconsistency</p>
              <p className="text-white font-semibold">Block 4 core modules</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
