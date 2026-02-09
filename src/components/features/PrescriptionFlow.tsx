'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, FileText, CheckCircle2, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlowState = 'idle' | 'transition' | 'uploaded' | 'extracted'

export function PrescriptionFlow() {
    const [state, setState] = useState<FlowState>('idle')

    useEffect(() => {
        const sequence = async () => {
            // idle -> transition
            await new Promise(r => setTimeout(r, 4000))
            setState('transition')

            // transition -> uploaded
            await new Promise(r => setTimeout(r, 400))
            setState('uploaded')

            // uploaded -> extracted
            await new Promise(r => setTimeout(r, 2000))
            setState('extracted')

            // extracted -> idle
            await new Promise(r => setTimeout(r, 6000))
            setState('idle')
        }

        const interval = setInterval(() => {
            if (state === 'idle') sequence()
        }, 100) // Small check to trigger sequence

        return () => clearInterval(interval)
    }, [state])

    return (
        <div className="relative w-full max-w-[280px] aspect-9/16 bg-white border border-zinc-200 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col mx-auto">
            <div className="flex-1 flex flex-col px-6 py-4 overflow-hidden relative">
                <AnimatePresence mode="wait">
                    {state === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col items-center justify-center -mt-8"
                        >
                            <div className="w-full aspect-square border border-dashed border-zinc-300 rounded-xl flex flex-col items-center justify-center mb-6">
                                <Upload className="size-10 text-black stroke-[1.5]" />
                            </div>
                            <div className="w-full h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                                <FileText className="size-3.5 text-zinc-400" />
                                <span className="text-[10px] font-bold tracking-tight text-zinc-900">Upload Prescription</span>
                            </div>
                        </motion.div>
                    )}

                    {state === 'transition' && (
                        <motion.div
                            key="black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black z-50"
                        />
                    )}

                    {(state === 'uploaded' || state === 'extracted') && (
                        <motion.div
                            key="success-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex-1 flex flex-col pt-4"
                        >
                            <div className="w-full aspect-square border border-dashed border-zinc-300 rounded-xl flex flex-col items-center justify-center mb-6 relative">
                                <Layers className="size-11 text-black stroke-[1.5]" />
                                <span className="absolute bottom-6 text-[8px] font-bold text-zinc-900">Prescription.pdf</span>
                            </div>

                            <div className="w-full h-10 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center gap-2 mb-6">
                                <FileText className="size-3.5 text-zinc-400" />
                                <span className="text-[10px] font-bold tracking-tight text-zinc-800 italic">Uploaded Prescription</span>
                            </div>

                            {state === 'extracted' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="space-y-1.5 overflow-hidden"
                                >
                                    {['Paracetamol', 'Betadine', 'Dolo 650', 'Montair LC'].map((medicine, i) => (
                                        <motion.div
                                            key={medicine}
                                            initial={{ y: 5, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="w-full h-8 bg-white border border-zinc-200 rounded-md flex items-center justify-center text-[9px] font-bold text-zinc-900"
                                        >
                                            {medicine}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
