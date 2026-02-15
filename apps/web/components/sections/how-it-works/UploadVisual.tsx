'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileUp, UploadCloud, CheckCircle2 } from 'lucide-react'

export const UploadVisual = () => {
    return (
        <motion.div
            key="step-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full flex flex-col items-center justify-center space-y-10"
        >
            <div className="w-full max-w-[340px] overflow-hidden relative">
                {/* Simple Header */}
                <div className="p-6 border-b border-zinc-50 flex items-center gap-4">
                    <div className="size-10 rounded-2xl bg-brand-light flex items-center justify-center">
                        <FileUp className="size-5 text-brand-dark" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-zinc-900 font-title">Your Prescription</p>
                        <p className="text-[10px] text-zinc-400 font-medium">Safe & Secure Upload</p>
                    </div>
                </div>

                {/* Clean Upload Zone */}
                <div className="p-6 space-y-4">
                    <div className="border-2 border-dashed border-zinc-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-zinc-50/50">
                        <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                            <UploadCloud className="size-6 text-zinc-400" />
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold text-zinc-600 font-title">Select a photo or PDF</p>
                            <p className="text-[10px] text-zinc-400 mt-1">Maximum file size: 10MB</p>
                        </div>
                    </div>

                    {/* Simple File List */}
                    <div className="space-y-3">
                        <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-zinc-100 shadow-sm"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="size-10 rounded-xl bg-brand-light flex items-center justify-center text-[10px] font-bold text-brand-dark">
                                    JPG
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-zinc-900 truncate">prescription_scan.jpg</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                                className="h-full bg-brand"
                                            />
                                        </div>
                                        <CheckCircle2 className="size-3 text-brand" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-black text-xl tracking-tighter uppercase font-title text-brand">Fast Upload</p>
            </div>
        </motion.div>
    )
}
