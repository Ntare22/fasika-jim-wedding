import Image from 'next/image';
import GalleryCarousel from '@/components/GalleryCarousel';

export default function OurStory() {
  // Gallery images
  const galleryImages = [
    '/gallery_1.jpg',
    '/gallery_2.jpg',
    '/gallery_3.jpg',
    '/gallery_4.jpg',
    '/gallery_5.jpg',
    '/gallery_6.jpg',
    '/gallery_7.jpg',
  ];

  return (
    <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">Our Story</h2>
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4 text-center">
              Our story began in Kigali, at an entrepreneurship bootcamp neither of us expected would change our lives. 
              What started as a simple conversation about ideas, building businesses, and the books we loved quickly 
              turned into an effortless friendship.
            </p>
            <p className="text-lg mb-8 text-center">
              In each other, we found someone who dreamed boldly, thought deeply, and saw the world with the same 
              curiosity and ambition. That shared passion sparked a connection that felt natural, inspiring, and meant to be.
            </p>
          </div>
          
          {/* Gallery Carousel */}
          <div className="w-full">
            <GalleryCarousel images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

