import { HeroSection } from "@/components/hero-section"
import { PhotoSlider } from "@/components/photo-slider"
import { CtaSection } from "@/components/cta-section"
import { EventTimeline } from "@/components/event-timeline"
import { Testimonials, FaqSection, BrandStatement } from "@/components/info-sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      
      {/* Posicionamento estratégico para autoridade */}
      <BrandStatement />
      
      {/* Fotos reais do evento para prova visual */}
      <PhotoSlider />
      
      {/* Depoimentos para prova social */}
      <Testimonials />
      
      {/* Monetização e busca de parceiros */}
      <CtaSection />
      
      {/* Informação logística para atletas */}
      <EventTimeline />
      
      {/* Suporte final e entrada social */}
      <FaqSection />

      <footer className="py-12 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm uppercase tracking-widest font-bold">
          © 2026 Katana Cup Jiu-Jitsu • Powered by Ichthus Mkt
        </p>
      </footer>
    </main>
  )
}