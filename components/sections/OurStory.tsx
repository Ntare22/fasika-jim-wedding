import Image from 'next/image';

export default function OurStory() {
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
          
          {/* Polaroid Pictures Scattered */}
          <div className="relative max-w-5xl mx-auto py-12">
            <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Polaroid 1 */}
              <div 
                className="relative w-64 h-80 bg-white p-2"
                style={{ 
                  transform: 'rotate(-5deg)',
                  transformOrigin: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/our_story_new1.jpg"
                    alt="Fasika and Jim"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Polaroid 2 */}
              <div 
                className="relative w-64 h-80 bg-white p-2"
                style={{ 
                  transform: 'rotate(8deg)',
                  transformOrigin: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/our_story_new2.jpg"
                    alt="Fasika and Jim"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Polaroid 3 */}
              <div 
                className="relative w-64 h-80 bg-white p-2"
                style={{ 
                  transform: 'rotate(-3deg)',
                  transformOrigin: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/our_story_new3.jpg"
                    alt="Fasika and Jim"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

