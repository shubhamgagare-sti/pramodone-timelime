'use client';

import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Eye,
  MapPin,
  Plus,
  ChevronRight,
  Zap,
  ClipboardList,
} from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'core' | 'advanced' | 'minor';
  modules: string[];
  impact: string;
}

const SiyaratechAdditions: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'labour-mgmt',
      name: 'Labour Management Module',
      description:
        'Comprehensive workforce tracking and management system with role-based access, attendance records, skill matrices, and performance metrics.',
      icon: <Users className="w-6 h-6" />,
      category: 'core',
      modules: ['HR', 'Payroll', 'Attendance', 'Skills Database'],
      impact: 'Enables real-time workforce visibility and automated payroll integration',
    },
    {
      id: 'subcontractor-mgmt',
      name: 'Subcontractor Management',
      description:
        'End-to-end subcontractor lifecycle management including vendor registration, billing workflows, performance tracking, and compliance documentation.',
      icon: <Briefcase className="w-6 h-6" />,
      category: 'core',
      modules: ['Billing', 'Contracts', 'Work Orders', 'Rating System'],
      impact: 'Streamlines vendor payments and eliminates manual billing reconciliation',
    },
    {
      id: 'face-detection',
      name: 'Face Detection Attendance',
      description:
        'Advanced biometric attendance system using facial recognition with real-time photo capture, spoofing detection, and geolocation verification.',
      icon: <Eye className="w-6 h-6" />,
      category: 'advanced',
      modules: ['Attendance', 'Security', 'Audit Logs', 'Compliance'],
      impact: 'Eliminates time-theft and provides tamper-proof attendance records',
    },
    {
      id: 'geotagged-photos',
      name: 'Geotagged Photo Capture',
      description:
        'Location-aware photo documentation system for work progress, site visits, quality inspections, and field verification with timestamp and GPS coordinates.',
      icon: <MapPin className="w-6 h-6" />,
      category: 'advanced',
      modules: ['Quality Assurance', 'Site Management', 'Inspections', 'Reports'],
      impact: 'Provides irrefutable proof-of-work and site presence verification',
    },
    {
      id: 'task-centralised-system',
      name: 'Task Centralised System',
      description:
        'A unified system offering complete transparency into resource utilisation, ensuring optimal allocation and efficient task tracking.',
      icon: <ClipboardList className="w-6 h-6" />,
      category: 'advanced',
      modules: ['Task Management', 'Resource Allocation', 'Utilization Tracking'],
      impact: 'Provides real-time visibility into workforce and resource efficiency',
    },
  ];

  const categoryColors = {
    core: 'from-purple-600 to-indigo-600',
    advanced: 'from-blue-600 to-cyan-600',
    minor: 'from-emerald-600 to-teal-600',
  };

  const categoryLabels = {
    core: 'Core Module',
    advanced: 'Advanced Feature',
    minor: 'Enhancement',
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
          <Plus className="w-4 h-4 text-green-400" />
          <span className="text-green-300 text-sm font-semibold">Siyaratech Additions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Additional Things from<br />
          <span className="text-gradient">Siyaratech Team</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Beyond the original 12 modules, Siyaratech has engineered advanced capabilities
          specifically designed for construction operations, workforce management, and field verification.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group cursor-pointer"
            onClick={() => setExpandedId(expandedId === feature.id ? null : feature.id)}
          >
            <div
              className={`glass-card p-6 rounded-xl h-full border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${categoryColors[feature.category]}`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${categoryColors[feature.category]} text-white`}
                  >
                    {feature.icon}
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded bg-gradient-to-r ${categoryColors[feature.category]} text-white`}
                  >
                    {categoryLabels[feature.category]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>

                {/* Short description */}
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  {feature.description}
                </p>

                {/* Modules preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {feature.modules.slice(0, 2).map((module) => (
                    <span key={module} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                      {module}
                    </span>
                  ))}
                  {feature.modules.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                      +{feature.modules.length - 2}
                    </span>
                  )}
                </div>

                {/* Expand button */}
                <div className="flex items-center text-sm text-indigo-400 group-hover:text-indigo-300">
                  <span>{expandedId === feature.id ? 'Less' : 'More'} Details</span>
                  <ChevronRight
                    className={`w-4 h-4 ml-1 transition-transform ${expandedId === feature.id ? 'rotate-90' : ''}`}
                  />
                </div>

                {/* Expanded content */}
                {expandedId === feature.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Full Description</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Related Modules</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.modules.map((module) => (
                          <span key={module} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-200">
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 rounded bg-indigo-500/10 border border-indigo-500/30">
                      <p className="text-xs text-indigo-200 font-semibold">💡 Key Impact</p>
                      <p className="text-xs text-indigo-100 mt-1">{feature.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
          <div className="text-sm text-gray-400">New Capabilities</div>
        </div>
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
          <div className="text-sm text-gray-400">Core Modules</div>
        </div>
        <div className="glass-card p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-2">3</div>
          <div className="text-sm text-gray-400">Advanced Features</div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mt-16 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold mb-4 text-green-300">Business Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Operational Efficiency</p>
              <p className="text-gray-300">
                Eliminates manual data entry, reduces administrative overhead, and enables real-time
                decision-making across the entire operation.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Risk Mitigation</p>
              <p className="text-gray-300">
                Biometric verification, geotagged proof-of-work, and tamper-proof logs provide
                accountability and compliance auditing.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Cost Optimization</p>
              <p className="text-gray-300">
                Accurate subcontractor billing, workforce tracking, and resource optimization reduce
                cost overruns and improve profitability.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Data Intelligence</p>
              <p className="text-gray-300">
                Advanced analytics transform operations data into predictive insights for better
                planning and resource allocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiyaratechAdditions;
