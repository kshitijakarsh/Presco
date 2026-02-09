'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { UploadCloud, Zap, PackageCheck, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'

import { PrescriptionFlow } from '@/components/features/PrescriptionFlow'

const IllustrationOne = () => (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner group-hover:bg-zinc-100/50 transition-colors p-4">
        <div className="absolute inset-0 bg-linear-to-br bg-zinc-900/5 to-transparent" />
        <div className="w-full max-w-[300px]">
            <PrescriptionFlow />
        </div>
    </div>
)

const IllustrationTwo = () => (
    <div className="relative h-40 w-full flex items-center justify-center overflow-hidden rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner">
        <div className="absolute inset-0 bg-linear-to-br bg-zinc-900/5 to-transparent" />
        <div className="relative z-10 w-52 space-y-2">
            {[
                { name: "Apollo Pharmacy", price: "$12.50", lowest: true, delay: 0 },
                { name: "MedPlus Store", price: "$14.00", lowest: false, delay: 0.1 },
                { name: "Local Wellness", price: "$15.20", lowest: false, delay: 0.2 }
            ].map((bid, i) => (
                <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: bid.delay }}
                    viewport={{ once: true }}
                    className={cn(
                        "flex items-center justify-between p-2 rounded-lg bg-white border border-zinc-200 shadow-sm",
                        bid.lowest && "border-zinc-900 bg-zinc-50 shadow-md"
                    )}
                >
                    <div className="flex items-center gap-2">
                        <div className={cn("size-6 rounded-full flex items-center justify-center text-[10px] font-bold", bid.lowest ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-400")}>
                            {bid.name[0]}
                        </div>
                        <span className="text-[10px] font-medium text-zinc-600">{bid.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={cn("text-xs font-bold", bid.lowest ? "text-zinc-900" : "text-zinc-600")}>{bid.price}</span>
                        {bid.lowest && <div className="size-1.5 rounded-full bg-zinc-900 animate-pulse" />}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

const IllustrationThree = () => (
    <div className="relative h-40 w-full flex items-center justify-center overflow-hidden rounded-xl bg-zinc-50 border border-zinc-200 shadow-inner">
        <div className="absolute inset-0 bg-linear-to-br bg-zinc-900/5 to-transparent" />
        <div className="relative z-10 w-full px-6 flex flex-col items-center">
            {/* Minimal Map Path */}
            <div className="w-full h-12 relative flex items-center justify-center mb-4">
                <div className="absolute inset-x-0 h-0.5 bg-zinc-200 rounded-full" />
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute left-0 h-0.5 bg-zinc-900 rounded-full"
                />
                {/* Dots */}
                <div className="absolute left-0 size-2 bg-zinc-300 rounded-full" />
                <div className="absolute right-0 size-2 bg-zinc-900 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" />

                {/* Delivery Icon */}
                <motion.div
                    initial={{ left: "0%" }}
                    whileInView={{ left: "65%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute -translate-x-1/2 -top-6 flex flex-col items-center"
                >
                    <div className="bg-white p-1 rounded-md border border-zinc-900 shadow-sm mb-1">
                        <PackageCheck className="size-3 text-zinc-900" />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 bg-zinc-900 text-white px-3 py-1.5 rounded-full shadow-lg"
            >
                <div className="size-1.5 rounded-full bg-zinc-300 animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider uppercase">Out for Delivery</span>
            </motion.div>
        </div>
    </div>
)

const HowItWorksCard = ({ number, title, description, illustration }: { number: string, title: string, description: string, illustration: React.ReactNode }) => (
    <div className="relative flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm transition-all duration-300 hover:border-zinc-300 group">
        <div className="flex items-center gap-4 mb-8">
            <div className="flex size-10 items-center justify-center rounded-full bg-zinc-900 text-white font-bold text-sm overflow-hidden relative">
                <span className="relative z-10">{number}</span>
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
        </div>
        <div className="mb-8">
            {illustration}
        </div>
        <p className="text-zinc-600 leading-relaxed">{description}</p>
    </div>
)

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">How it Works</h2>
                    <p className="text-lg text-zinc-600">Our seamless process ensures you get the best medical care at the most competitive local prices.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <HowItWorksCard
                        number="01"
                        title="Upload Prescription"
                        description="Securely upload your doctor's prescription. Our platform handles your medical data with enterprise-grade privacy."
                        illustration={<IllustrationOne />}
                    />
                    <HowItWorksCard
                        number="02"
                        title="Get Live Bids"
                        description="Verified local pharmacies receive your request and bid their most competitive prices instantly."
                        illustration={<IllustrationTwo />}
                    />
                    <HowItWorksCard
                        number="03"
                        title="Choose & Deliver"
                        description="Review the bids, select your preferred pharmacy, and relax while your medicines are delivered to your door."
                        illustration={<IllustrationThree />}
                    />
                </div>
            </div>
        </section>
    )
}
