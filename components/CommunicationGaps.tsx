'use client';

import React from 'react';
import { Mail, Users, FileText, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function CommunicationGaps() {
  const gaps = [
    {
      title: 'Document Management',
      from: 'Shubham',
      to: 'Aishwarya Saha',
      request: 'Upload docs to shared Google Drive (Sep 1)',
      response: 'Documents NOT uploaded (Sep 4 - 58 days later)',
      status: 'failed',
      impact: 'Development blocked for 2 months',
    },
    {
      title: 'Access Matrix & Permissions',
      from: 'Siyaratech',
      to: 'KB Team',
      request: 'Define user roles/permissions (Oct 6)',
      response: 'Never received. KB team never shared MoM back',
      status: 'failed',
      impact: 'Security module halted. No confirmation of accuracy',
    },
    {
      title: 'Scope Definition',
      from: 'Shubham',
      to: 'Sheetal Dhale',
      request: 'HR MIS reports disputed as out-of-scope (Jan 30)',
      response: 'Sheetal claims "they were shared initially" (Jan 31)',
      status: 'disputed',
      impact: 'No single source of truth. Scope definition unclear',
    },
    {
      title: 'Material Library',
      from: 'Prathamesh',
      to: 'KB Team',
      request: 'Complete Material Library with standards (Jan 22)',
      response: 'Pending - incomplete coefficients and naming',
      status: 'pending',
      impact: 'Estimation module delayed',
    },
    {
      title: 'Quality Module Documents',
      from: 'Bharat Sabale',
      to: 'Shubham',
      request: 'Review Quality Docs and revert with concerns (Jan 14)',
      response: 'Acknowledged but no formal review feedback yet',
      status: 'pending',
      impact: 'Quality module progress unclear',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'disputed':
        return <AlertCircle className="w-5 h-5 text-amber-400" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Communication & Delivery Gaps</h2>
        <p className="text-gray-400">Critical hand-offs that stalled development progress</p>
      </div>

      <div className="space-y-4">
        {gaps.map((gap, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{getStatusIcon(gap.status)}</div>

              <div className="flex-1">
                <h3 className="text-white font-semibold mb-3">{gap.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Request</p>
                    <p className="text-sm text-gray-300">
                      <span className="text-amber-400 font-medium">{gap.from}</span> → {gap.to}
                    </p>
                    <p className="text-sm text-gray-400">{gap.request}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Response</p>
                    <p className="text-sm text-gray-300">Status: {gap.response}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-red-300 font-medium">
                    Impact: <span className="text-red-200">{gap.impact}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">Root Cause: Informal Communication Channel</h3>
            <p className="text-gray-300 text-sm mb-3">
              All project requirements, approvals, and feedback flow through unstructured email threads with no centralized tracking.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>No formal change control board or approval process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>No centralized document repository (Google Drive uploads never happened)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>No signed-off requirements document or Minutes of Meeting (MoM) from KB team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>Scope definition relies on scattered emails with no single source of truth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
