'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

            </motion.div>

        </div >
    );
};


export default Hero;
