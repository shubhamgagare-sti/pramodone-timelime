'use client';

import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import AuditDashboard from '@/components/audit/AuditDashboard';
import DevelopmentJourney from '@/components/journey/DevelopmentJourney';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col overflow-x-hidden font-sans">
      <Hero />
      <div className="container mx-auto px-4 pb-32">
        <AuditDashboard />
        <DevelopmentJourney />
        <Timeline />
      </div>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-auto bg-[var(--bg-primary)]">
        <p>&copy; 2025 Siyaratech | Internal Audit Report</p>
      </footer>
    </div>
  );
}
