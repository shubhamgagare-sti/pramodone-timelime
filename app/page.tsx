import Hero from '@/components/Hero';
import SummaryStats from '@/components/SummaryStats';
import VisualAnalysis from '@/components/VisualAnalysis';
import BottleneckCards from '@/components/BottleneckCards';
import CommunicationGaps from '@/components/CommunicationGaps';
import DelaySummary from '@/components/DelaySummary';
import RootCauseAnalysis from '@/components/RootCauseAnalysis';
import SiyaratechAdditions from '@/components/SiyaratechAdditions';
import Timeline from '@/components/Timeline';
import DeliverablesTable from '@/components/DeliverablesTable';
import FutureStrategy from '@/components/FutureStrategy';
import ProjectRoadmap from '@/components/ProjectRoadmap';

export const metadata = {
  title: 'Communication Breakdown Analysis | Siyaratech Report',
  description:
    'A comprehensive visual timeline identifying critical bottlenecks, document gaps, and scope creep impacting development velocity and alignment.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col gap-10 overflow-x-hidden pb-32 font-sans">
      <Hero />
      <SummaryStats />
      <VisualAnalysis />
      <BottleneckCards />
      <CommunicationGaps />
      <DelaySummary />
      <RootCauseAnalysis />
      <SiyaratechAdditions />
      <Timeline />
      <DeliverablesTable />
      <ProjectRoadmap />
      <FutureStrategy />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>&copy; 2026 Siyaratech. Confidential Report.</p>
      </footer>
    </div>
  );
}
