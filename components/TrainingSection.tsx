import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, FileText, Video, Users } from 'lucide-react';

const TrainingSection: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-100 to-white">
                    Training & Support
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive training resources available directly within the application to ensure smooth onboarding and verified workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all group">
                    <div className="p-4 rounded-full bg-teal-500/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">In-App Video Tutorials</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Watch step-by-step workflow guides directly inside the module you are working on. No need to leave the app.
                    </p>
                </div>

                <div className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all group">
                    <div className="p-4 rounded-full bg-indigo-500/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">System Mindmaps</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Visual mindmaps demonstrating how forms and modules are interconnected to ensure data integrity.
                    </p>
                </div>

                <div className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all group">
                    <div className="p-4 rounded-full bg-pink-500/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-8 h-8 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Detailed manuals and SOPs will be available progressively after the February 20th release.
                    </p>
                </div>

                <div className="glass-card p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all group">
                    <div className="p-4 rounded-full bg-amber-500/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">On-Site Session</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        One on-site hands-on training session scheduled around the <span className="text-amber-300 font-semibold">end of February</span>. Exact dates to be confirmed.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TrainingSection;
