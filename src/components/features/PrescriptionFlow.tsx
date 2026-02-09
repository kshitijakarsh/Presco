'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface UploadScreenProps {
    onUpload?: () => void
}

function UploadScreen({ onUpload }: UploadScreenProps) {
    return (
        <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center py-8"
        >
            <div className="w-full max-w-[240px] aspect-video border-2 border-dashed border-zinc-200 rounded-2xl flex flex-col items-center justify-center mb-8 group cursor-pointer hover:border-zinc-300 transition-colors bg-zinc-50/50">
                <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="size-6 text-zinc-600 stroke-[1.5]" />
                </div>
                <p className="text-[11px] font-medium text-zinc-500">Drag & drop or click to upload</p>
            </div>

            <button
                onClick={onUpload}
                className="w-full max-w-[200px] h-11 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-zinc-200 hover:bg-zinc-800 transition-all active:scale-[0.98]"
            >
                <FileText className="size-4 text-zinc-400" />
                <span className="text-[13px] font-semibold tracking-tight text-white">Upload Prescription</span>
            </button>

            <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="size-5 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center overflow-hidden">
                            <span className="text-[8px] font-bold text-zinc-400">{String.fromCharCode(64 + i)}</span>
                        </div>
                    ))}
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">Joined by 10k+ patients</span>
            </div>
        </motion.div>
    )
}

export function PrescriptionFlow() {
    return (
        <div className={cn(
            "relative w-full mx-auto transition-all duration-500 ease-in-out max-w-md"
        )}>
            <div className={cn(
                "bg-white border border-zinc-200 rounded-[2rem] shadow-xl overflow-hidden flex flex-col p-6 transition-all duration-500 min-h-[400px]"
            )}>
                <div className="flex-1 flex flex-col relative">
                    <UploadScreen />
                </div>
            </div>

            <div className="absolute -z-10 -top-4 -right-4 size-32 bg-zinc-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-4 -left-4 size-32 bg-zinc-100 rounded-full blur-3xl opacity-50" />
        </div>
    )
}
