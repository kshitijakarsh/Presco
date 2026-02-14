'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AnimatedGroup } from '@/components/ui/AnimatedGroup'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const

export const HeroContent = () => {
    return (
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                    <Link
                        href="#link"
                        className="hover:bg-brand-light/50 dark:hover:border-brand/20 bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                        <span className="text-foreground text-sm flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                            The Smartest Way to Save on Medicines
                        </span>
                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                <span className="flex size-6">
                                    <ArrowRight className="m-auto size-3" />
                                </span>
                                <span className="flex size-6">
                                    <ArrowRight className="m-auto size-3" />
                                </span>
                            </div>
                        </div>
                    </Link>

                    <h1
                        className="mt-8 max-w-4xl mx-auto text-balance text-4xl sm:text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-title font-black tracking-tighter leading-[0.95] text-zinc-900">
                        Get Your Medicines at <br />
                        <span className="text-brand">Lowest Prices</span>
                    </h1>
                    <p
                        className="mx-auto mt-6 md:mt-8 max-w-2xl text-balance text-base md:text-lg font-sans text-zinc-500 font-medium px-4 sm:px-0">
                        Upload your prescription and let local pharmacies bid on your order. Choose the best offer and get it delivered to your door in minutes.
                    </p>
                </AnimatedGroup>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                    <div
                        key={1}
                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-xl px-5 text-base">
                            <Link href="#link">
                                <span className="text-nowrap">Upload Prescription</span>
                            </Link>
                        </Button>
                    </div>
                    <Button
                        key={2}
                        asChild
                        size="lg"
                        variant="ghost"
                        className="h-10.5 rounded-xl px-5">
                        <Link href="#link">
                            <span className="text-nowrap">How it Works</span>
                        </Link>
                    </Button>
                </AnimatedGroup>
            </div>
        </div>
    )
}
