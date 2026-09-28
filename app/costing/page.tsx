import type { Metadata } from 'next';
import CostEstimate from '@/components/costing/CostEstimate';

export const metadata: Metadata = {
  title: 'Development Costing | Siyaratech',
  robots: { index: false, follow: false },
};

export default function CostingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col overflow-x-hidden font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-200 text-xs font-medium tracking-wide">
            Internal · Siyaratech
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Development Costing</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">PramodOne ERP · effort converted to cost against the original 12-week quote</p>
        </div>
        <CostEstimate />
      </div>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-auto bg-[var(--bg-primary)]">
        <p>&copy; 2026 Siyaratech | Internal costing</p>
      </footer>
    </div>
  );
}
