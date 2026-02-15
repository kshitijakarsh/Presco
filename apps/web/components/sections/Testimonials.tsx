'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        quote: "Presco saved me almost 40% on my father's chronic medication. The bidding process is transparent and very easy to use.",
        author: "Rahul S.",
        avatar: "RS"
    },
    {
        quote: "I was skeptical at first, but the medicines were delivered in 20 minutes from a pharmacy just blocks away. Amazing service!",
        author: "Priya M.",
        avatar: "PM"
    },
    {
        quote: "The easiest way to get medicines. No more calling multiple shops to check availability. Just upload and get offers.",
        author: "Ankit K.",
        avatar: "AK"
    }
]

export const Testimonials = () => {
    return (
        <section className="py-8 md:py-16 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-zinc-900 font-title">
                            Trusted by <br />
                            <span className="text-brand font-normal">Thousands.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-zinc-500 max-w-md font-medium leading-relaxed font-sans">
                        See how Presco is helping people save time and money on their healthcare needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="group bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] hover:border-brand/20 hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.1)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                        >
                            {/* Decorative Quote Icon */}
                            <Quote className="absolute -top-4 -right-4 size-24 text-zinc-50 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 translate-y-4 transition-all duration-700 pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-brand text-brand" />
                                    ))}
                                </div>
                                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-4 relative z-10">
                                <div className="size-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark font-black text-xs border border-brand/5 shadow-inner">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-black text-zinc-900 text-sm tracking-tight font-title">{testimonial.author}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
