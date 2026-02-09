'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Customers = () => {
    return (
        <section className="bg-background pb-16 pt-16 md:pb-32">
            <div className="group relative m-auto max-w-5xl px-6">
                <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Link
                        href="/"
                        className="block text-sm duration-150 hover:opacity-75">
                        <span> Meet Our Customers</span>

                        <ChevronRight className="ml-1 inline-block size-3" />
                    </Link>
                </div>
                <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                    {[
                        { src: 'nvidia.svg', alt: 'Nvidia Logo', h: 'h-5' },
                        { src: 'column.svg', alt: 'Column Logo', h: 'h-4' },
                        { src: 'github.svg', alt: 'GitHub Logo', h: 'h-4' },
                        { src: 'nike.svg', alt: 'Nike Logo', h: 'h-5' },
                        { src: 'lemonsqueezy.svg', alt: 'Lemon Squeezy Logo', h: 'h-5' },
                        { src: 'laravel.svg', alt: 'Laravel Logo', h: 'h-4' },
                        { src: 'lilly.svg', alt: 'Lilly Logo', h: 'h-7' },
                        { src: 'openai.svg', alt: 'OpenAI Logo', h: 'h-6' },
                    ].map((customer, i) => (
                        <div key={i} className="flex">
                            <img
                                className={cn("mx-auto w-fit dark:invert", customer.h)}
                                src={`https://html.tailus.io/blocks/customers/${customer.src}`}
                                alt={customer.alt}
                                height="20"
                                width="auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
