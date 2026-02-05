'use client';

import React from 'react';
import { Calendar, CheckCircle2, CircleDollarSign, AlertCircle, ArrowRight, Construction, FileText, BadgeAlert, LayoutDashboard, Rocket, Globe, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectRoadmap = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-1 border-indigo-500/30 rounded-3xl max-w-6xl mx-auto"
            >
                <div className="bg-[var(--bg-secondary)]/80 rounded-[22px] p-8 md:p-12">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-full mb-6 ring-1 ring-indigo-500/40"
                        >
                            <Calendar className="w-8 h-8 text-indigo-400" />
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200">
                            Project Roadmap to Completion
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                            <div className="px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                                <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">Target Delivery</span>
                                <span className="text-white font-bold text-lg">February 20, 2026</span>
                            </div>
                            <div className="px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
                                <BadgeAlert className="w-5 h-5 text-amber-500" />
                                <span className="text-amber-200 text-sm">Critical Inputs Needed by Tuesday</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Development Status & Accounting */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Development Status</h3>
                                    <span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 mt-1 inline-block">Focus: Accounts & Linking</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-200 font-medium">Completed Modules</p>
                                        <p className="text-sm text-gray-400">Developed all forms with linking for all modules (except Accounts & Billing).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Construction className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-200 font-medium">Remaining: Accounts Linking</p>
                                        <p className="text-sm text-gray-400">Link Accounts with Central Hub (Store) & Site to track <span className="text-indigo-300">Investment & ROI on Machinery</span> details.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Construction className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-200 font-medium">Rate Analysis Document</p>
                                        <p className="text-sm text-amber-300">Required by <strong>Tuesday</strong> to proceed with related dependencies.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-200 font-medium">Quality Documentation</p>
                                        <p className="text-sm text-amber-300">Docs shared; need clarification by <strong>Tuesday</strong> on which are for the system vs client-side.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Billing Module Status */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-500/20 rounded-lg">
                                    <FileText className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Billing Module</h3>
                                    <span className="text-xs text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 mt-1 inline-block">Action Required</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center mt-0.5 bg-gray-800/50">
                                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                                    </div>
                                    <div className="opacity-60">
                                        <p className="text-gray-200 font-medium">Subcontractor Billing</p>
                                        <p className="text-sm text-gray-400">Waiting for workflow explanation.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center mt-0.5 bg-gray-800/50">
                                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                                    </div>
                                    <div className="opacity-60">
                                        <p className="text-gray-200 font-medium">Client Billing</p>
                                        <p className="text-sm text-gray-400">Waiting for workflow explanation.</p>
                                    </div>
                                </li>

                            </ul>

                            <div className="mt-6 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-indigo-200 font-medium mb-1">Tuesday Deadline</p>
                                        <p className="text-xs text-indigo-300/80 leading-relaxed">
                                            We need <span className="text-white font-semibold">Subcontractor & Client Billing Understanding</span> by Tuesday to meet the Feb 25th delivery date.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>



                        {/* Deployment & Training */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="lg:col-span-2 bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-teal-500/20 rounded-lg">
                                    <Rocket className="w-6 h-6 text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Deployment & Support</h3>
                                    <span className="text-xs text-teal-300 bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20 mt-1 inline-block">UAT Phase</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                {/* Step 1: Initial Deployment */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center relative shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                            <Globe className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div className="w-0.5 grow bg-gradient-to-b from-blue-500 to-teal-500 my-2"></div>
                                    </div>
                                    <div className="pb-12 flex-1">
                                        <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                                            <h4 className="text-xl font-bold text-blue-200 mb-2">1. Initial Deployment</h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                Siyaratech team will deploy <span className="text-blue-300 font-semibold">all modules</span> on UAT environment as the first step on <span className="text-blue-300 font-bold">Feb 20</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: Training & UAT */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center relative shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                                            <Globe className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div className="w-0.5 grow bg-gradient-to-b from-teal-500 to-indigo-500 my-2"></div>
                                    </div>
                                    <div className="pb-12 flex-1">
                                        <div className="p-6 rounded-xl bg-teal-500/5 border border-teal-500/20 hover:border-teal-500/40 transition-all">
                                            <h4 className="text-xl font-bold text-teal-200 mb-2">2. Training & UAT</h4>
                                            <p className="text-gray-300 leading-relaxed mb-3">
                                                KB team to go through training videos & UAT from <span className="text-teal-300 font-bold">Feb 21 - Feb 28</span> at <span className="text-teal-300 break-all">pramodone.karanbuilders.com</span>.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed mb-3">
                                                <span className="text-teal-300 font-semibold">Action Required:</span> We need user permissions (Access Matrix) defined: <span className="italic">who will have how much access</span>, once you try out the UAT environment.
                                            </p>
                                            <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3 mb-3">
                                                <p className="text-xs text-teal-200 leading-relaxed">
                                                    <span className="font-bold text-teal-300 block mb-1">Critical:</span>
                                                    Any new requirements not mentioned earlier will be treated as <span className="text-white font-semibold">Change Requests</span> and will delay production deployment.
                                                </p>
                                            </div>
                                            <p className="text-sm text-teal-200/70 border-l-2 border-teal-500/30 pl-3 italic">
                                                "If doubts persist, Siyaratech team will conduct clarification sessions with respective HODs to ensure full understanding."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Reports */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center relative shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                            <FileText className="w-6 h-6 text-indigo-300" />
                                        </div>
                                        <div className="w-0.5 grow bg-gradient-to-b from-indigo-500 to-emerald-500 my-2"></div>
                                    </div>
                                    <div className="pb-12 flex-1">
                                        <div className="p-6 rounded-xl bg-indigo-500/5 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
                                            <h4 className="text-xl font-bold text-indigo-200 mb-2">3. Reports</h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                Work on reports begins only after UAT confirms no further changes. <span className="text-indigo-300/80 italic text-sm block mt-1">Crucial for data stability</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4: Production */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center relative shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                            <Rocket className="w-6 h-6 text-emerald-300" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                                            <h4 className="text-xl font-bold text-emerald-200 mb-2">4. Production Deployment</h4>
                                            <p className="text-gray-300 leading-relaxed mb-3">
                                                Production deployment proceeds only after all modules are confirmed ready by KB team.
                                            </p>
                                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                                                <p className="text-sm text-emerald-100 leading-relaxed">
                                                    <span className="font-semibold text-emerald-300">Handling New Changes:</span> New requirements will be analyzed for feasibility in the current release. They must be developed, tested, and verified on UAT first. Depending on the Change Request, they will either be part of this production roll-out or scheduled for the next release.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectRoadmap;
