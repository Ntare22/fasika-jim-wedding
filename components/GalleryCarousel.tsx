'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (isPaused || isScrolling || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (isPaused || isScrolling) return;
      
      scrollPosition += scrollSpeed;
      const maxScroll = container.scrollWidth / 2;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isScrolling]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    setIsScrolling(true);
    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="relative w-full py-8">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 items-center overflow-x-auto scrollbar-hide scroll-smooth"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 h-96 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Gallery image ${(index % images.length) + 1}`}
              width={320}
              height={384}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

