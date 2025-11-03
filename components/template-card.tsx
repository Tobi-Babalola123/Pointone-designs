"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Template {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  buyUrl: string
}

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5">
        {/* Image Container */}
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          <Image
            src={template.image || "/placeholder.svg"}
            alt={template.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-balance text-xl font-semibold tracking-tight text-card-foreground">{template.name}</h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{template.description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {template.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-medium backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 font-medium transition-all hover:bg-secondary bg-transparent"
              asChild
            >
              <a href={template.demoUrl}>View Demo</a>
            </Button>
            <Button className="flex-1 font-medium transition-all" asChild>
              <a href={template.buyUrl}>Buy Template</a>
            </Button>
          </div>
        </div>

        {/* Glassmorphism overlay on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border/50 transition-all duration-300 group-hover:ring-primary/20" />
      </div>
    </motion.div>
  )
}
