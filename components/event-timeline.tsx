"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

const events = [
  {
    date: "15",
    month: "MAR",
    year: "2026",
    title: "3º KATANA CUP",
    location: "Americana, SP",
    venue: "Ginásio Municipal",
  },
  {
    date: "17",
    month: "MAI",
    year: "2026",
    title: "4º KATANA CUP",
    location: "S.B.O., SP",
    venue: "Ginásio Municipal",
  },
  {
    date: "02",
    month: "AGO",
    year: "2026",
    title: "5º KATANA CUP",
    location: "Piracicaba, SP",
    venue: "Complexo Esportivo",
  },
  {
    date: "01",
    month: "NOV",
    year: "2026",
    title: "6º KATANA CUP",
    location: "N.O., SP",
    venue: "Centro de Eventos Nova Odessa",
  },
]

export function EventTimeline() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = document.querySelectorAll(".event-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-20 text-center text-5xl font-black uppercase tracking-wider text-white md:text-6xl">
          <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Calendário 2026
          </span>
        </h2>

        {/* Desktop: Vertical Timeline */}
        <div className="relative hidden md:block">
          {/* Vertical red line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-600 via-red-500 to-red-600" />

          {/* Events */}
          <div className="space-y-24">
            {events.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`event-card relative transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                      ? "-translate-x-20 opacity-0"
                      : "translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div
                      className="group relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                    >
                      {/* Date */}
                      <div
                        className={`mb-4 flex items-baseline gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <span className="text-7xl font-black text-red-600">{event.date}</span>
                        <div className="flex flex-col">
                          <span className="text-2xl font-black text-white">{event.month}</span>
                          <span className="text-sm font-bold text-red-500">{event.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mb-4 text-3xl font-black uppercase tracking-wide text-white">{event.title}</h3>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-2 text-red-500 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg font-bold">{event.location}</span>
                      </div>

                      <p className="mt-2 text-lg font-semibold text-zinc-400">{event.venue}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                    <div className="h-6 w-6 animate-glow-pulse rounded-full border-4 border-red-600 bg-black" />
                  </div>

                  <div className="w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Cards */}
        <div className="md:hidden">
          <div className="relative">
            {/* Horizontal red line */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`event-card relative pl-20 transition-all duration-700 ${
                    visibleCards.includes(index) ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-5 top-8 z-10 h-6 w-6 animate-glow-pulse rounded-full border-4 border-red-600 bg-black" />

                  {/* Card */}
                  <div
                    className="group relative overflow-hidden border-2 border-red-600 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                  >
                    {/* Date */}
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-6xl font-black text-red-600">{event.date}</span>
                      <div className="flex flex-col">
                        <span className="text-xl font-black text-white">{event.month}</span>
                        <span className="text-xs font-bold text-red-500">{event.year}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-2xl font-black uppercase tracking-wide text-white">{event.title}</h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-red-500">
                      <MapPin className="h-4 w-4" />
                      <span className="font-bold">{event.location}</span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-zinc-400">{event.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
