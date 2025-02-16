"use client"

import { useState, useEffect } from "react"
import WeatherBox from "../components/WeatherBox"
import ClockBox from "../components/ClockBox"
import QuoteBox from "../components/QuoteBox"
import { Star } from "../components/Star"

export default function Home() {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    // Create random stars
    const newStars = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setStars(newStars)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0b1e] relative overflow-hidden">
      {/* Decorative stars */}
      {stars.map((star, i) => (
        <Star key={i} x={star.x} y={star.y} delay={star.delay} />
      ))}

      {/* Pixel art background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwMDAiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6IiBmaWxsPSIjMTExMjJhIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-center mb-12">
          <span className="font-mono text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 pixel-font">
            Weather Station v1.0
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <WeatherBox />
          <ClockBox />
          <QuoteBox />
        </div>
      </div>
    </main>
  )
}

