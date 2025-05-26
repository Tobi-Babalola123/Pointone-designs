"use client"

import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

interface FloatingMenuButtonProps {
  onMenuToggle: () => void
}

export default function FloatingMenuButton({ onMenuToggle }: FloatingMenuButtonProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={onMenuToggle}
      className="fixed top-8 right-8 z-40 bg-white/90 backdrop-blur-sm border border-purple-200 text-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 group"
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      <Menu size={24} className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  )
}
