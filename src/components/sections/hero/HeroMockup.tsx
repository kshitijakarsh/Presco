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

export const HeroMockup = () => {
    return (
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
            }}>
            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                    aria-hidden
                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15 ring-1">
                    <img
                        className="aspect-15/8 relative rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 object-cover object-top"
                        src="/images/hero.png"
                        alt="Presco Operations Dashboard"
                        width="2700"
                        height="1440"
                    />
                </div>
            </div>
        </AnimatedGroup>
    )
}
