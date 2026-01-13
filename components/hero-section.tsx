"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const backgroundImages = [
  "/jiu-jitsu-competition-action-photo.jpg",
  "/jiu-jitsu-fighter-submission.jpg",
  "/jiu-jitsu-podium-winners.jpg",
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Ember particles effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * -1 - 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(220, 38, 38, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.y += particle.speedY
        particle.x += particle.speedX

        if (particle.y < 0) {
          particle.y = canvas.height
          particle.x = Math.random() * canvas.width
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: currentBgIndex === index ? 0.25 : 0,
          }}
        />
      ))}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.1) 35px, rgba(220, 38, 38, 0.1) 70px)`,
          }}
        />
      </div>

      {/* Animated canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Animated sword slashes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-sword-slash"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-sword-slash"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-sword-slash"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div
          className="text-center"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`,
          }}
        >
          {/* Katana crossed swords decoration */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute h-32 w-1 bg-gradient-to-b from-red-600 to-red-900 rotate-45 transform" />
            <div className="absolute h-32 w-1 bg-gradient-to-b from-red-600 to-red-900 -rotate-45 transform" />
          </div>

          <h1 className="mb-6 text-8xl font-black uppercase tracking-wider md:text-9xl lg:text-[12rem] text-balance">
            <span className="inline-block bg-gradient-to-b from-zinc-800 via-zinc-900 to-black bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              KATANA
            </span>
            <br />
            <span className="inline-block bg-gradient-to-b from-zinc-800 via-zinc-900 to-black bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              CUP
            </span>
          </h1>

          <p className="mb-8 text-xl font-bold uppercase tracking-widest text-red-500 md:text-2xl">
            Campeonato de Jiu-Jitsu 2026
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-red-600 px-8 py-6 text-lg font-bold uppercase tracking-wider text-white hover:bg-red-700"
              asChild
            >
              <a href="https://soucompetidor.com.br/pt-br/eventos/todos-os-eventos/p2596-katana-cup-de-jiu-jitsu-3-edicao/" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Inscreva-se Agora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 bg-transparent px-8 py-6 text-lg font-bold uppercase tracking-wider text-red-600 hover:bg-red-600 hover:text-white"
            >
              Ver Calendário
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-12 w-12 text-red-600" />
        </div>
      </div>

      {/* Red vignette effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black opacity-80" />
    </section>
  )
}
