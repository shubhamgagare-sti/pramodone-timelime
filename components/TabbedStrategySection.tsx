'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SiyaratechAdditions from '@/components/SiyaratechAdditions';
import Timeline from '@/components/Timeline';
import DeliverablesTable from '@/components/DeliverablesTable';
import ProjectRoadmap from '@/components/ProjectRoadmap';
import FutureStrategy from '@/components/FutureStrategy';

const TabbedStrategySection: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <Tabs defaultValue="additional-features" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full h-auto flex-wrap justify-center overflow-x-auto max-w-full">
                            <TabsTrigger
                                value="additional-features"
                                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300"
                            >
                                Additional Features
                            </TabsTrigger>
                            <TabsTrigger
                                value="timeline"
                                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300"
                            >
                                Timeline
                            </TabsTrigger>
                            <TabsTrigger
                                value="deliverables"
                                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300"
                            >
                                Deliverables
                            </TabsTrigger>
                            <TabsTrigger
                                value="roadmap"
                                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300"
                            >
                                Roadmap
                            </TabsTrigger>
                            <TabsTrigger
                                value="future-strategy"
                                className="rounded-full px-6 py-2.5 text-sm md:text-base data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-300"
                            >
                                Future Strategy
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="min-h-[600px]">
                        <TabsContent value="additional-features" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                            <SiyaratechAdditions />
                        </TabsContent>

                        <TabsContent value="timeline" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                            <Timeline />
                        </TabsContent>

                        <TabsContent value="deliverables" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                            <DeliverablesTable />
                        </TabsContent>

                        <TabsContent value="roadmap" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                            <ProjectRoadmap />
                        </TabsContent>

                        <TabsContent value="future-strategy" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                            <FutureStrategy />
                        </TabsContent>
                    </div>
                </Tabs>
            </motion.div>
        </section>
    );
};

export default TabbedStrategySection;
