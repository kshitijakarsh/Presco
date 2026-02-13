'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: "Is it safe to upload my prescription here?",
        answer: "Yes, absolutely. We use industry-standard encryption to protect your data. Your prescription is only shared with verified, licensed pharmacies in our network."
    },
    {
        question: "How do I pay for my medicines?",
        answer: "You can pay directly through the app using various methods like UPI, Credit/Debit cards, or choose Cash on Delivery when your medicines arrive."
    },
    {
        question: "What if the pharmacy sends the wrong medicine?",
        answer: "All pharmacy partners are verified and licensed. However, if there's any discrepancy, you can report it through the app, and our support team will resolve it immediately, including free returns."
    },
    {
        question: "How long does delivery take?",
        answer: "Most orders are delivered within 30-60 minutes, depending on your location and the pharmacy's proximity. You can track your rider in real-time."
    }
]

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-zinc-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group transition-colors"
            >
                <span className="text-xl font-black text-zinc-900 font-title tracking-tight group-hover:text-brand transition-colors">{question}</span>
                {isOpen ? (
                    <Minus className="size-5 text-zinc-400" />
                ) : (
                    <Plus className="size-5 text-zinc-400" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-zinc-500 leading-relaxed font-sans font-medium">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const FAQ = () => {
    return (
        <section id="faq" className="py-8 md:py-16 bg-white relative">
            <div className="mx-auto max-w-3xl px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-zinc-900 font-title">
                        Common
                        <span className="text-brand font-normal"> Questions.</span>
                    </h2>
                    <p className="text-xl text-zinc-500 font-sans font-medium leading-relaxed max-w-md mx-auto">
                        Everything you need to know about the Presco experience.
                    </p>
                </div>

                <div className="bg-brand-light/20 backdrop-blur-sm rounded-[2.5rem] p-10 border border-brand/10">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    )
}
