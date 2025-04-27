"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { ProjectType } from "@/lib/projects"
import { isMobileApp } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectType
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const handleClick = () => {
    const event = new CustomEvent("open-project-modal", { detail: { project } })
    window.dispatchEvent(event)
  }

  const isMobile = mounted && isMobileApp(project)

  return (
    <motion.div suppressHydrationWarning
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
      className="group flex flex-col h-full cursor-pointer overflow-hidden rounded-xl border border-muted/30 bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
    >
      {/* Image Section (fixed aspect ratio) */}
      <div className="relative w-full aspect-video overflow-hidden bg-black">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          style={{ objectFit: 'contain' }}
          className="transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="/placeholder-blur.svg"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tags Overlay */}
        <div className="absolute bottom-0 w-full p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="outline" className="text-xs bg-black/50 backdrop-blur-md text-white">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs bg-black/40 backdrop-blur-md">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {project.description}
        </p>

        {/* Categories pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-1 pt-3">
          {project.categories.map(category => (
            <Badge key={category} variant="outline" className="text-xs border-primary/10 bg-primary/5">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
