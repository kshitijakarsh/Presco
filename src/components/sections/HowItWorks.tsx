'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { UploadVisual } from './how-it-works/UploadVisual'
import { NetworkVisual } from './how-it-works/NetworkVisual'
import { BiddingVisual } from './how-it-works/BiddingVisual'
import { MapDeliveryVisual } from './how-it-works/MapDeliveryVisual'

const steps = [
    {
        id: "step-1",
        title: "Digitizing Prescription",
        description: "Your handwritten or digital prescription is processed by our AI. We extract medicine names, dosages, and quantities instantly.",
    },
    {
        id: "step-2",
        title: "Pharmacy Network",
        description: "Verified local pharmacies receive a notification. They check their inventory and confirm availability within seconds.",
    },
    {
        id: "step-3",
        title: "Competitive Bidding",
        description: "Pharmacies place bids to offer you the best price. Our algorithm automatically filters and shows the most value-for-money offers.",
    },
    {
        id: "step-4",
        title: "Smart Logistics",
        description: "Once you accept, a nearby rider is assigned. They pick up the verified packet and deliver it to you using the fastest route.",
    }
]

const IllustrativeVisual = ({ activeStep }: { activeStep: number }) => {
    return (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white rounded-[2.5rem] border border-zinc-100 shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden relative group">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-50/50 to-transparent" />

            <div className="relative h-full flex flex-col items-center justify-center p-8">
                <AnimatePresence mode="wait">
                    {activeStep === 0 && <UploadVisual />}
                    {activeStep === 1 && <NetworkVisual />}
                    {activeStep === 2 && <BiddingVisual />}
                    {activeStep === 3 && <MapDeliveryVisual />}
                </AnimatePresence>
            </div>
        </div >
    )
}


const StepContent = ({
    step,
    index,
    setActiveStep
}: {
    step: typeof steps[0],
    index: number,
    setActiveStep: (i: number) => void
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-40% 0px -40% 0px",
    })

    React.useEffect(() => {
        if (isInView) {
            setActiveStep(index)
        }
    }, [isInView, index, setActiveStep])

    return (
        <section
            ref={ref}
            className="md:h-[60vh] flex items-center py-20 md:py-0"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold text-zinc-900 tracking-tight leading-none font-title">
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-lg text-zinc-500 leading-relaxed max-w-md font-medium font-sans">
                        {step.description}
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

const IntroContent = ({ setActiveStep }: { setActiveStep: (i: number) => void }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-40% 0px -40% 0px",
    })

    React.useEffect(() => {
        if (isInView) {
            setActiveStep(0)
        }
    }, [isInView, setActiveStep])

    return (
        <div ref={ref} className="md:min-h-[50vh] flex items-center py-20 md:py-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold text-zinc-900 tracking-tight leading-none font-title">
                            {steps[0].title}
                        </h3>
                    </div>
                    <p className="text-lg text-zinc-500 leading-relaxed max-w-md font-medium font-sans">
                        {steps[0].description}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeStep, setActiveStep] = React.useState(0)

    return (
        <section id="how-it-works" className="relative z-20 pt-32 md:pt-48 bg-white" ref={containerRef}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-5xl lg:text-8xl font-black tracking-tighter leading-[0.8] text-zinc-900 font-title">
                        Simplified <br />
                        <span className="text-brand font-normal">Healthcare.</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-16 md:gap-32 relative">
                    {/* Left Side: Sticky Visuals */}
                    <div className="w-full md:w-1/2 md:h-screen sticky top-16 md:top-0 flex items-center py-6 md:py-0 z-30 bg-white md:bg-transparent">
                        <div className="w-full">
                            <IllustrativeVisual activeStep={activeStep} />
                        </div>
                    </div>

                    {/* Right Side: Scrollable Information */}
                    <div className="w-full md:w-1/2 space-y-[20vh] md:space-y-0">
                        {/* Static Intro / Step 1 - Out of scroll range triggers */}
                        <IntroContent setActiveStep={setActiveStep} />

                        {/* Remaining Steps that trigger sticky changes */}
                        {steps.slice(1).map((step, index) => (
                            <StepContent
                                key={step.id}
                                step={step}
                                index={index + 1}
                                setActiveStep={setActiveStep}
                            />
                        ))}
                        {/* Buffer spacing for final step to stay active */}
                        <div className="h-[10vh] md:h-[20vh]" />
                    </div>
                </div>
            </div>
        </section>
    )
}