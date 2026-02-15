import Image from 'next/image'
import { AnimatedGroup } from '../../ui/AnimatedGroup'

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
            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20 lg:-mr-56">
                <div
                    aria-hidden
                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
            </div>
        </AnimatedGroup>
    )
}
