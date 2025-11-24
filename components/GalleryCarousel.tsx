'use client';

import Image from 'next/image';

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex gap-4 animate-scroll items-center">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-96 overflow-hidden"
            style={{ width: 'auto' }}
          >
            <Image
              src={image}
              alt={`Gallery image ${(index % images.length) + 1}`}
              width={400}
              height={384}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

