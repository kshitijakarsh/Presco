'use client'

import { FileUp, Store, Gavel, Truck } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: <FileUp className="size-6 text-zinc-900" />,
        title: "Upload Prescription",
        description: "Upload your prescription image. Our AI instantly digitizes it for pharmacies to read.",
    },
    {
        icon: <Store className="size-6 text-zinc-900" />,
        title: "Pharmacies Connect",
        description: "Verified local pharmacies receive your request and review the medicine availability.",
    },
    {
        icon: <Gavel className="size-6 text-zinc-900" />,
        title: "Smart Bidding",
        description: "Pharmacies bid in real-time. You automatically get the lowest price offer.",
    },
    {
        icon: <Truck className="size-6 text-zinc-900" />,
        title: "Fast Delivery",
        description: "Accept the best offer and get your medicines delivered to your doorstep.",
    }
]

export default function HowItWorks() {
    return (
        <section className="py-24 bg-zinc-50/50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Prescription to Delivery
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        Our streamlined process makes managing medication simple, fast, and secure. Just a few clicks to better health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-zinc-100"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                {/* Circular Icon Background */}
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-zinc-100/50 blur-xl" />
                                    <div className="relative size-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                                        {step.icon}
                                    </div>

                                    {/* Static Orbital Ring Decoration */}
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-32 opacity-40" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-200 dashed-circle" />
                                    </svg>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-zinc-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}