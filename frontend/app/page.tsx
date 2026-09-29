import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { InfrastructureSection } from "@/components/landing/infrastructure-section"
import { DevelopersSection } from "@/components/landing/developers-section"
import { IntegrationsSection } from "@/components/landing/integrations-section"
import { SecuritySection } from "@/components/landing/security-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CtaSection } from "@/components/landing/cta-section"
import { FooterSection } from "@/components/landing/footer-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <DevelopersSection />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
