'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileX, Clock, Database } from 'lucide-react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const Hero: React.FC = () => {
    return (
        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center p-6 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10 animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] -z-10 animate-float" style={{ animationDelay: '2s' }} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
            >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide">
                    Siyaratech & Karan Builders Collaboration Report
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Communication <br />
                    <span className="text-gradient hover:opacity-90 transition-opacity">Breakdown Analysis</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                    A visual timeline identifying critical bottlenecks, document gaps, and scope creep impacting the development velocity and alignment of the MD's vision.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <StatCard
                        icon={<FileX className="w-6 h-6 text-red-400" />}
                        value="0"
                        label="MoMs Shared by KB"
                        description="No signed minutes returned"
                        delay={0.2}
                    />
                    <StatCard
                        icon={<Clock className="w-6 h-6 text-amber-400" />}
                        value="7 Days"
                        label="Avg. Feedback Lag"
                        description="Delay in feedback loops"
                        delay={0.3}
                    />
                    <StatCard
                        icon={<AlertTriangle className="w-6 h-6 text-orange-400" />}
                        value="Critical"
                        label="Scope Creep"
                        description="Unplanned HR requirements"
                        delay={0.4}
                    />
                    <StatCard
                        icon={<Database className="w-6 h-6 text-blue-400" />}
                        value="Oct '25"
                        label="Pending Access Matrix"
                        description="Roles undefined for 4 months"
                        delay={0.5}
                    />
                </div>
            </motion.div>

            {/* Navigation Tabs */}
            <div className="w-full mt-12 sticky bottom-4 md:bottom-8 z-50 flex justify-center">
                <TabsList className="bg-black/60 backdrop-blur-xl border border-white/10 p-1.5 rounded-full h-auto flex-wrap justify-center overflow-x-auto max-w-full shadow-2xl shadow-indigo-500/20">
                    <TabsTrigger
                        value="analysis"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Analysis
                    </TabsTrigger>
                    <TabsTrigger
                        value="additional-features"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Additional Features
                    </TabsTrigger>
                    <TabsTrigger
                        value="timeline"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Timeline
                    </TabsTrigger>
                    <TabsTrigger
                        value="deliverables"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Deliverables
                    </TabsTrigger>
                    <TabsTrigger
                        value="training"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Training
                    </TabsTrigger>
                    <TabsTrigger
                        value="roadmap"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Roadmap
                    </TabsTrigger>
                    <TabsTrigger
                        value="future-strategy"
                        className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                    >
                        Future Strategy
                    </TabsTrigger>
                </TabsList>
            </div >
        </div >
    );
};

interface StatCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    description?: string;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group bg-opacity-10 min-h-[160px]"
    >
        <div className="mb-3 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <div className="text-3xl font-bold text-primary mb-1">{value}</div>
        <div className="text-sm text-secondary font-medium">{label}</div>
        {description && (
            <div className="text-xs text-gray-500 mt-2 max-w-[120px] leading-tight">
                {description}
            </div>
        )}
    </motion.div>
);

export default Hero;
