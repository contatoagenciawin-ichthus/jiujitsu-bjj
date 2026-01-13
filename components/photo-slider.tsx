"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Basta adicionar o nome do arquivo aqui quando colocar uma foto nova em /public/images/
const imageFiles = [
  "katana-01.jpg",
  "katana-02.jpg",
  "katana-03.jpg",
  "katana-04.jpg",
  "katana-05.jpg",
  "katana-06.jpg",
  "katana-07.jpg",
  "katana-08.jpg",
]

// Mapeamento automático para manter o padrão que você solicitou
const photos = imageFiles.map((file) => ({
  url: `/images/${file}`,
  caption: "Katana Cup 2025",
  location: "Americana - S.B.O.",
}))

export function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay || photos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
    setIsAutoPlay(false)
  }

  if (photos.length === 0) return null

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-5xl font-black uppercase tracking-wider text-white md:text-6xl">
          <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Arena em Ação
          </span>
        </h2>

        {/* Main slider */}
        <div
          className="relative mx-auto overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main image with diagonal cut */}
          <div className="relative aspect-video w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{
                backgroundImage: `url(${photos[currentIndex].url})`,
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 border-4 border-red-600/0 transition-all duration-300 hover:border-red-600/100 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]" />
            </div>

            {/* Caption & Location fixos conforme solicitado */}
            <div className="absolute bottom-12 left-8 right-8 z-10">
              <h3 className="mb-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
                {photos[currentIndex].caption}
              </h3>
              <p className="text-lg font-bold text-red-500 uppercase tracking-widest">
                {photos[currentIndex].location}
              </p>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-20 h-16 w-16 -translate-y-1/2 bg-black/50 text-white hover:bg-red-600 hover:text-white"
              style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-20 h-16 w-16 -translate-y-1/2 bg-black/50 text-white hover:bg-red-600 hover:text-white"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`group relative shrink-0 overflow-hidden transition-all duration-300 ${
                  index === currentIndex ? "ring-4 ring-red-600" : "opacity-50 hover:opacity-100"
                }`}
                style={{
                  clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                  width: "150px",
                  height: "100px",
                }}
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${photo.url})` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}