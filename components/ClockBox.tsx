"use client"

import { useState, useEffect } from "react"

export default function ClockBox() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pixel-border bg-[#1a1b3b] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 pixel-font text-center">System Time</h2>
      <div className="grid grid-cols-3 gap-2 mt-8">
        {time.split(":").map((digit, i) => (
          <div key={i} className="bg-[#0a0b1e] p-4 pixel-border-sm flex items-center justify-center">
            <span className="text-4xl font-mono text-green-500 digital-font">{digit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

