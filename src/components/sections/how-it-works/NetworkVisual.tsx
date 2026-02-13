'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Database, Store } from 'lucide-react'

export const NetworkVisual = () => {
    return (
        <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full flex flex-col items-center justify-center space-y-10"
        >
            <div className="w-full max-w-[340px] rounded-[2.5rem] overflow-hidden relative p-8">
                <div className="relative size-48 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 border border-zinc-100 rounded-full" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border border-dashed border-zinc-200 rounded-full"
                    />

                    <div className="bg-brand size-16 rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(var(--brand-primary),0.4)] z-10 relative">
                        <Database className="size-8 text-white" />
                    </div>

                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <motion.div
                            key={angle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="absolute size-10 bg-white border border-zinc-100 rounded-xl flex items-center justify-center shadow-sm"
                            style={{
                                transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)`
                            }}
                        >
                            <Store className="size-5 text-zinc-900" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-black text-xl tracking-tighter uppercase font-title text-brand">Pharmacy Network</p>
            </div>
        </motion.div>
    )
}
