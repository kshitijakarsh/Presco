'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <div className="relative flex size-8 items-center justify-center">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7 h-auto">
                    {/* Modern Medical Cross / Prescription Symbol */}
                    <rect
                        x="10"
                        y="3"
                        width="4"
                        height="8"
                        rx="2"
                        fill="url(#logo-gradient-1)"
                        className="opacity-90"
                    />
                    <rect
                        x="10"
                        y="13"
                        width="4"
                        height="8"
                        rx="2"
                        fill="url(#logo-gradient-2)"
                    />
                    <rect
                        x="3"
                        y="10"
                        width="8"
                        height="4"
                        rx="2"
                        fill="url(#logo-gradient-1)"
                        className="opacity-90"
                    />
                    <rect
                        x="13"
                        y="10"
                        width="8"
                        height="4"
                        rx="2"
                        fill="url(#logo-gradient-2)"
                    />
                    <defs>
                        <linearGradient
                            id="logo-gradient-1"
                            x1="0"
                            y1="0"
                            x2="24"
                            y2="24"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#18181b" />
                            <stop
                                offset="1"
                                stopColor="#52525b"
                            />
                        </linearGradient>
                        <linearGradient
                            id="logo-gradient-2"
                            x1="0"
                            y1="0"
                            x2="24"
                            y2="24"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3f3f46" />
                            <stop
                                offset="1"
                                stopColor="#a1a1aa"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="flex items-baseline">
                <span className="text-2xl font-bold tracking-tighter text-zinc-950">Pres</span>
                <span className="text-2xl font-medium tracking-tighter text-zinc-500">co.</span>
            </div>
        </div>
    )
}
