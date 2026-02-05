'use client';

import Hero from '@/components/Hero';
import DashboardAnalysis from '@/components/DashboardAnalysis';
import SiyaratechAdditions from '@/components/SiyaratechAdditions';
import Timeline from '@/components/Timeline';
import DeliverablesTable from '@/components/DeliverablesTable';
import ProjectRoadmap from '@/components/ProjectRoadmap';
import FutureStrategy from '@/components/FutureStrategy';
import TrainingSection from '@/components/TrainingSection';
import { Tabs, TabsContent } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col overflow-x-hidden font-sans">
      <Tabs defaultValue="analysis" className="w-full flex-1 flex flex-col">
        <Hero />

        <div className="container mx-auto px-4 pb-32">
          <TabsContent value="analysis" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <DashboardAnalysis />
          </TabsContent>

          <TabsContent value="additional-features" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <SiyaratechAdditions />
          </TabsContent>

          <TabsContent value="timeline" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <Timeline />
          </TabsContent>

          <TabsContent value="deliverables" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <DeliverablesTable />
          </TabsContent>

          <TabsContent value="training" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <TrainingSection />
          </TabsContent>

          <TabsContent value="roadmap" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ProjectRoadmap />
          </TabsContent>

          <TabsContent value="future-strategy" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <FutureStrategy />
          </TabsContent>
        </div>
      </Tabs>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-auto bg-[var(--bg-primary)]">
        <p>&copy; 2025 Siyaratech | Internal Audit Report</p>
      </footer>
    </div>
  );
}
