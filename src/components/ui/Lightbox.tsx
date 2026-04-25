'use client'

import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <button
        aria-label="Previous image"
        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        <ChevronLeft size={40} />
      </button>
      <div
        className="relative w-full max-w-5xl max-h-[85vh] mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1200}
          height={800}
          className="object-contain w-full h-full max-h-[85vh] rounded-lg"
          priority
        />
        <p className="text-center text-white/50 text-sm mt-4">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
      <button
        aria-label="Next image"
        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}
