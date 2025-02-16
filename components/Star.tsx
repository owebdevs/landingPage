export function Star({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <div
      className="absolute w-2 h-2 animate-twinkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        background: `
          linear-gradient(45deg, transparent 45%, #ffd700 45%, #ffd700 55%, transparent 55%),
          linear-gradient(-45deg, transparent 45%, #ffd700 45%, #ffd700 55%, transparent 55%)
        `,
      }}
    />
  )
}

