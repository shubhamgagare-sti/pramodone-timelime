import React from 'react';
import SummaryStats from '@/components/SummaryStats';
import VisualAnalysis from '@/components/VisualAnalysis';
import BottleneckCards from '@/components/BottleneckCards';
import CommunicationGaps from '@/components/CommunicationGaps';
import DelaySummary from '@/components/DelaySummary';
import RootCauseAnalysis from '@/components/RootCauseAnalysis';

const DashboardAnalysis: React.FC = () => {
    return (
        <div className="flex flex-col gap-10">
            <SummaryStats />
            <VisualAnalysis />
            <BottleneckCards />
            <CommunicationGaps />
            <DelaySummary />
            <RootCauseAnalysis />
        </div>
    );
};

export default DashboardAnalysis;
