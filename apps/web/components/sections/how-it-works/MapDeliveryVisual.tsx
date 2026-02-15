'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Store } from 'lucide-react'

export const MapDeliveryVisual = () => {
    return (
        <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full w-full flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-[480px] aspect-2/1 relative group">
                {/* Abstract Map Background */}
                <svg className="absolute inset-0 w-full h-full text-zinc-100" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 40H400M0 80H400M0 120H400M0 160H400M40 0V200M120 0V200M200 0V200M280 0V200M360 0V200" stroke="currentColor" strokeWidth="1" />
                    <rect x="45" y="45" width="70" height="30" rx="4" fill="currentColor" fillOpacity="0.4" />
                    <rect x="205" y="85" width="70" height="30" rx="4" fill="currentColor" fillOpacity="0.4" />
                    <rect x="125" y="125" width="70" height="30" rx="4" fill="currentColor" fillOpacity="0.4" />
                    <rect x="285" y="45" width="70" height="30" rx="4" fill="currentColor" fillOpacity="0.4" />
                </svg>

                {/* Animated Route */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <motion.path
                        d="M80 80H160V140H320V100"
                        stroke="var(--brand-primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>

                {/* HUB Marker - Positioned at (80, 80) which is 20% left, 40% top */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute left-[20%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-xl bg-white border border-zinc-100 shadow-md flex items-center justify-center">
                            <Store className="size-5 text-brand" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-400 bg-white/80 px-1 rounded">HUB</span>
                    </div>
                </motion.div>

                {/* YOU Marker - Moved to (320, 100) which is 80% left, 50% top */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute left-[80%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-10 rounded-xl bg-brand border border-brand-dark/20 shadow-lg shadow-brand/20 flex items-center justify-center">
                            <div className="size-5 text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-tighter text-brand-dark bg-white/80 px-1 rounded">YOU</span>
                    </div>
                </motion.div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2 text-center">
                <p className="font-black text-xl tracking-tighter uppercase font-title text-brand">Express Delivery</p>
            </div>
        </motion.div>
    )
}
