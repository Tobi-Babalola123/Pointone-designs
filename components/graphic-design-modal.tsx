"use client";

import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface GraphicDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    year: string;
    imageUrl: string;
    link: string;
    description: string;
  } | null;
}

export default function GraphicDesignModal({
  isOpen,
  onClose,
  project,
}: GraphicDesignModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-background shadow-2xl"
      >
        <button
          onClick={onClose}
          className="sticky top-0 right-0 z-10 flex items-center justify-center bg-background p-2 hover:bg-muted"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6 flex justify-center bg-muted p-4 rounded-lg">
            <div className="relative">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="max-w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {project.title}
              </h2>
              <p className="text-muted-foreground mt-1">{project.year}</p>
            </div>

            <p className="text-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-3 pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <span>View on Portfolio</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
