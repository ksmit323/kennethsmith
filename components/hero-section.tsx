"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  const phrases = [
    "Cool Things",
    "Smart Contracts",
    "DeFi Protocols", 
    "Web Applications",
    "Robust Backends"
  ]

  useEffect(() => {
    const currentPhrase = phrases[textIndex]
    const speed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const type = () => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      const nextText = isDeleting 
        ? currentPhrase.substring(0, displayText.length - 1)
        : currentPhrase.substring(0, displayText.length + 1)

      setDisplayText(nextText)
    }

    const timer = setTimeout(type, speed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex])


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20)

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        const color = `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.1})`

        const velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        }

        particles.push({ x, y, radius, color, velocity })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 1 - distance / 150
            ctx.beginPath()
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Kenneth <span className="text-primary">Smith</span>
          </h1>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground h-[1.5em]">
            Build <span className="text-foreground border-r-2 border-primary animate-pulse pr-1">{displayText}</span>
          </h3>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fullstack developer specializing in blockchain technology, building secure smart contracts and intuitive web interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
              <a href="#projects">
                View Work
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 h-12 text-lg border-primary/20 hover:bg-primary/5"
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="sr-only">Scroll down</span>
        <ArrowRight className="h-6 w-6 rotate-90" />
      </motion.div>
    </section>
  )
}

