import { HeroSection } from "@/components/sections/hero/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Customers } from "@/components/sections/Customers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Customers />
    </>
  );
}
