'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { timelineData } from '@/lib/timelineData';

const DelaySummary: React.FC = () => {
  const delayedItems = timelineData.filter(item => item.delayDays && item.delayDays > 3).sort((a, b) => (b.delayDays || 0) - (a.delayDays || 0));

  const totalDelayDays = delayedItems.reduce((sum, item) => {
    if (item.delayDays && item.delayDays < 999) return sum + item.delayDays;
    return sum;
  }, 0);

  const criticalDelays = delayedItems.filter(item => (item.delayDays || 0) >= 25);
  const outstandingItems = delayedItems.filter(item => (item.delayDays || 0) >= 999);

  return (
    <div className="relative container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">KB Team Response Delays</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Tracking all items where KB Karan Builders took more than 3 days to respond or deliver</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-white/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-3xl font-bold text-red-400">{delayedItems.length}</span>
            </div>
            <div className="text-gray-400 text-sm">Total Delayed Items</div>
            <div className="text-xs text-gray-500 mt-2">More than 3 days</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-xl border border-white/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-3xl font-bold text-orange-400">{criticalDelays.length}</span>
            </div>
            <div className="text-gray-400 text-sm">Critical Delays</div>
            <div className="text-xs text-gray-500 mt-2">25+ days or outstanding</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl border border-white/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="bg-red-600/20 p-3 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-3xl font-bold text-red-500">{outstandingItems.length}</span>
            </div>
            <div className="text-gray-400 text-sm">Outstanding Items</div>
            <div className="text-xs text-gray-500 mt-2">Never delivered / 120+ days</div>
          </motion.div>
        </div>

        {/* Delay Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Delay Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Severity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Reason</th>
                </tr>
              </thead>
              <tbody>
                {delayedItems.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-400">{item.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono font-bold">
                      {item.delayDays && item.delayDays >= 999 ? (
                        <span className="text-red-400">OUTSTANDING (120+ days)</span>
                      ) : (
                        <span className={
                          item.delayDays && item.delayDays >= 84 ? 'text-red-400' :
                          item.delayDays && item.delayDays >= 25 ? 'text-orange-400' :
                          'text-yellow-400'
                        }>
                          {item.delayDays} days
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        'badge text-xs font-bold',
                        item.delayDays && item.delayDays >= 999 ? 'bg-red-600/30 text-red-200 border border-red-500/50' :
                        item.delayDays && item.delayDays >= 84 ? 'bg-red-500/30 text-red-200 border border-red-500/50' :
                        item.delayDays && item.delayDays >= 25 ? 'bg-orange-500/30 text-orange-200 border border-orange-500/50' :
                        'bg-yellow-500/30 text-yellow-200 border border-yellow-500/50'
                      )}>
                        {item.delayDays && item.delayDays >= 999 ? 'CRITICAL' :
                         item.delayDays && item.delayDays >= 84 ? 'HIGH' :
                         item.delayDays && item.delayDays >= 25 ? 'MEDIUM' :
                         'LOW'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-400 max-w-xs">
                      {item.delayReason}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-red-500/30"
          >
            <h3 className="text-lg font-bold text-red-400 mb-3">Critical Pattern</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              KB Karan Builders has {outstandingItems.length} outstanding deliverables (120+ days overdue). Most critically, the Access Matrix and Material Library reviews remain incomplete since October and January respectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-orange-500/30"
          >
            <h3 className="text-lg font-bold text-orange-400 mb-3">Impact Assessment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Average response time of 25+ days for critical items has created a compounding effect on development velocity. These delays directly contributed to scope disputes and rework cycles in January.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DelaySummary;

function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
