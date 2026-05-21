import Featured from "@/component/Featured";
import Hero from "@/component/Hero";
import ServiceCategory from "@/component/ServiceCategory";
import HowItWorks from "@/component/HowItWorks";
import StatsSection from "@/component/StatsSection";
import PlatformBenefits from "@/component/PlatformBenefits";
import Testimonials from "@/component/Testimonials";
import NewsletterCta from "@/component/NewsletterCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <PlatformBenefits />
      <ServiceCategory />
      <Testimonials />
      <HowItWorks />
      <Featured />
      <NewsletterCta />
    </>
  );
}
