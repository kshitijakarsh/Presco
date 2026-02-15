'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { FileUp } from 'lucide-react'

export const CTASection = () => {
    return (
        <section className="py-8 md:py-16 bg-zinc-900 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="relative overflow-hidden rounded-[4rem] bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 px-8 py-24 text-center shadow-2xl sm:px-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <h2 className="mx-auto max-w-2xl text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white font-title">
                            Ready to Save on Your 
                            <span className="text-brand font-normal underline decoration-brand/30 underline-offset-8">  Prescription?</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 font-sans font-medium">
                            Join thousands of patients who are getting their medicines at the best prices with lightning-fast delivery.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-2xl px-8 h-12 bg-white text-zinc-900 hover:bg-zinc-100 shadow-xl shadow-white/10"
                            >
                                <Link href="#link" className="flex items-center gap-2">
                                    <FileUp className="size-4" />
                                    <span>Upload Now</span>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Decorative Blobs */}
                    <div className="absolute -top-24 -left-24 size-64 bg-zinc-700/50 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 size-64 bg-zinc-700/50 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    )
}
