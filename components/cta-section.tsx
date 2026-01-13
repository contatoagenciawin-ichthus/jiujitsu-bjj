"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Trophy } from "lucide-react"

function Counter({ target, label, icon: Icon }: { target: number; label: string; icon: any }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById(`counter-${label}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [label])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.floor(increment * currentStep), target))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div id={`counter-${label}`} className="flex flex-col items-center">
      <Icon className="mb-4 h-12 w-12 text-red-600" />
      <div className="mb-2 text-5xl font-black text-white md:text-6xl">{count}+</div>
      <div className="text-lg font-bold uppercase tracking-wide text-red-500">{label}</div>
    </div>
  )
}

export function CtaSection() {
  const [scrollY, setScrollY] = useState(0)
  
  // Link do WhatsApp com mensagem pré-definida
  const WHATSAPP_URL = "https://wa.me/5519981539373?text=Olá! Gostaria de receber mais informações sobre os planos de patrocínio do Katana Cup."

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank")
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="patrocinio" className="relative overflow-hidden bg-black py-32">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=jiu-jitsu+tournament+arena+crowd)`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Dark overlay with red gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20" />

      {/* Angular geometric shapes */}
      <div
        className="absolute left-0 top-0 h-64 w-64 bg-red-600/10"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="absolute right-0 bottom-0 h-64 w-64 bg-red-600/10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Main headline */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-6xl font-black uppercase tracking-wider text-white md:text-7xl lg:text-8xl text-balance">
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Seja um
            </span>
            <br />
            <span className="text-white">Patrocinador</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-semibold text-red-100 md:text-2xl leading-relaxed">
            Fortaleça sua marca junto ao maior evento de Jiu-Jitsu do Brasil
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <Counter target={500} label="Atletas" icon={Users} />
          <Counter target={2000} label="Espectadores" icon={TrendingUp} />
          <Counter target={15} label="Categorias" icon={Trophy} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden bg-red-600 px-10 py-7 text-xl font-black uppercase tracking-wider text-white hover:bg-red-700"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              <span className="relative z-10">Plano Premium</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-800 to-red-900 transition-transform duration-300 group-hover:translate-x-0" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-red-600 bg-black/50 px-10 py-7 text-xl font-black uppercase tracking-wider text-red-600 hover:bg-red-600 hover:text-white"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              Plano Gold
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-red-600 bg-black/50 px-10 py-7 text-xl font-black uppercase tracking-wider text-red-600 hover:bg-red-600 hover:text-white"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              Plano Silver
            </Button>
          </div>

          <div
            onClick={handleWhatsAppClick}
            className="mt-4 flex items-center gap-4 border-2 border-red-600 bg-black/50 px-8 py-4 cursor-pointer hover:bg-red-600/10 transition-colors"
            style={{ clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)" }}
          >
            <div className="h-12 w-12 animate-glow-pulse rounded-full border-2 border-red-600 bg-red-600/20" />
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-wide text-red-500">Vagas Limitadas</p>
              <p className="text-lg font-black text-white">Entre em contato agora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}