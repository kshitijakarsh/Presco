import { HeroContent } from './HeroContent'
import { HeroMockup } from './HeroMockup'

export function HeroSection() {
    return (
        <>
            <div className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <HeroContent />
                        <HeroMockup />
                    </div>
                </section>
            </div>
        </>
    )
}