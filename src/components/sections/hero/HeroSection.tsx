import { AnimatedGroup } from '@/components/ui/AnimatedGroup'
import { HeroContent } from './HeroContent'
import { HeroMockup } from './HeroMockup'

export function HeroSection() {
    return (
        <>
            <div className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <HeroGlow />
                        <HeroContent />
                    </div>
                </section>
            </div>
        </>
    )
}

const HeroGlow = () => (
    <>
        <AnimatedGroup
            variants={{
                container: {
                    visible: {
                        transition: {
                            delayChildren: 1,
                        },
                    },
                },
                item: {
                    hidden: {
                        opacity: 0,
                        y: 20,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'spring',
                            bounce: 0.3,
                            duration: 2,
                        },
                    },
                },
            }}
            className="absolute inset-0 -z-20">
            <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
            />
        </AnimatedGroup>
        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
    </>
)
