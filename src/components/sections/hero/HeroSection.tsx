import { AnimatedGroup } from '@/components/ui/AnimatedGroup'
import { HeroHeader } from '@/components/layout/Header'
import { HeroContent } from './HeroContent'
import { HeroMockup } from './HeroMockup'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <HeroBackground />
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <HeroGlow />
                        <HeroContent />
                        <HeroMockup />
                    </div>
                </section>
            </main>
        </>
    )
}

const HeroBackground = () => (
    <div
        aria-hidden
        className="z-2 absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-140 h-320 -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
    </div>
)

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
