'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
    {
        src: '/assets/vision-execution-gap.png',
        title: 'Vision vs. Execution Gap',
        description: 'The fundamental misalignment between MD\'s strategic intent and operational execution.'
    },
    {
        src: '/assets/feedback-latency-loop.png',
        title: 'Feedback Latency Loop',
        description: 'Visualizing how the "7-Day Lag" doubles development time causes context switching costs.'
    },
    {
        src: '/assets/request-receipt-latency.png',
        title: 'Request-to-Receipt Latency',
        description: 'Timeline audit showing the 10-day and 5-day lags in critical data delivery.'
    },
    {
        src: '/assets/technical-execution-lag.png',
        title: 'Technical Execution Lag',
        description: 'Detailed breakdown of the Oct-Nov 2025 planning and formatting disconnects.'
    },
    {
        src: '/assets/financial-logic-blocker.png',
        title: 'Financial Logic Blocker',
        description: 'Impact of incorrect rate analysis and missing planning workflows on the ERP.'
    },
    {
        src: '/assets/operational-workflow-blocker.png',
        title: 'Operational Process Gaps',
        description: 'Undocumented workflows (Subcontractor Billing) and messy data inputs.'
    }
];

const VisualAnalysis: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Visual <span className="text-gradient">Root Cause Analysis</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                Graphical breakdown of the structural and process-oriented bottlenecks identified during the audit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(index)}
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={img.src || "/placeholder.svg"}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="flex items-center text-white font-medium">
                                    <ZoomIn className="w-5 h-5 mr-2" /> View Details
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-1 text-white">{img.title}</h3>
                            <p className="text-sm text-gray-400">{img.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-7xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={images[selectedImage].src || "/placeholder.svg"}
                                alt={images[selectedImage].title}
                                className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/10"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">{images[selectedImage].title}</h3>
                                <p className="text-gray-300">{images[selectedImage].description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VisualAnalysis;
