"use client"

import { useState, useEffect } from "react"

const quotes = [
  "PRESS START TO BEGIN YOUR JOURNEY",
  "LOADING NEXT LEVEL OF INSPIRATION...",
  "ACHIEVEMENT UNLOCKED: NEW PERSPECTIVE",
  "SAVING PROGRESS... KEEP GOING!",
  "PLAYER 1 READY FOR NEW CHALLENGES",
]

export default function QuoteBox() {
  const [quote, setQuote] = useState<string>("")
  const [isTyping, setIsTyping] = useState(true)
  const [displayedQuote, setDisplayedQuote] = useState("")

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  useEffect(() => {
    if (!quote) return

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= quote.length) {
        setDisplayedQuote(quote.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [quote])

  return (
    <div className="pixel-border bg-[#1a1b3b] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 pixel-font text-center">System Message</h2>
      <p className="text-lg pixel-font text-green-500 min-h-[100px] flex items-center justify-center text-center">
        {displayedQuote}
        {isTyping ? "_" : ""}
      </p>
    </div>
  )
}

