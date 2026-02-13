'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Store } from 'lucide-react'
import { cn } from '@/lib/utils'

export const BiddingVisual = () => {
    return (
        <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full flex flex-col items-center justify-center space-y-12"
        >
            <div className="w-full max-w-[500px] relative">
                {/* Top Search Indicator */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <div className="relative flex">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/75 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-brand"></span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark">Live Search</span>
                    </div>
                    <span className="text-[10px] font-medium text-zinc-400">3 bids found</span>
                </div>

                <div className="flex flex-col gap-4">
                    {[
                        { p: "₹420", shop: "Shop 1", delay: 0 },
                        { p: "₹385", shop: "Shop 2", highlight: true, delay: 0.2 },
                        { p: "₹405", shop: "Shop 3", delay: 0.4 },
                    ].map((bid, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: bid.delay, duration: 0.5 }}
                            className={cn(
                                "px-5 py-4 rounded-3xl border flex items-center justify-between transition-all",
                                bid.highlight
                                    ? "bg-brand border-brand/80 text-white scale-105 z-10"
                                    : "bg-white border-zinc-100 text-zinc-900 group-hover/card:border-zinc-200"
                            )}
                        >
                            <div className="flex items-center justify-center gap-12 w-full">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "size-8 rounded-2xl flex items-center justify-center shrink-0 ",
                                        bid.highlight ? "bg-white/20" : "bg-brand-light"
                                    )}>
                                        <Store className={cn("size-4", bid.highlight ? "text-white" : "text-brand")} />
                                    </div>
                                    <span className="text-[13px] font-black tracking-tight leading-none">{bid.shop}</span>
                                </div>
                                <span className="text-lg font-black tracking-tighter leading-none">{bid.p}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-black text-xl tracking-tighter uppercase font-title text-brand">Live Biddings</p>
            </div>
        </motion.div>
    )
}
