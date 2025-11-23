import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">Our Story</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg mb-4">
                Our story began in Kigali, at an entrepreneurship bootcamp neither of us expected would change our lives. 
                What started as a simple conversation about ideas, building businesses, and the books we loved quickly 
                turned into an effortless friendship.
              </p>
              <p className="text-lg mb-4">
                In each other, we found someone who dreamed boldly, thought deeply, and saw the world with the same 
                curiosity and ambition. That shared passion sparked a connection that felt natural, inspiring, and meant to be.
              </p>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg h-80 md:h-95 overflow-hidden">
              <Image
                src="/our_story_1.jpg"
                alt="Fasika and Jim"
                fill
                className="object-cover"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div className="relative rounded-lg h-80 md:h-95 overflow-hidden">
              <Image
                src="/our_story_2.jpg"
                alt="Fasika and Jim"
                fill
                className="object-cover"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
            <div>
              <p className="text-lg mb-4">
                From long talks to shared visions and countless moments of laughter, our friendship blossomed into 
                something beautiful — a partnership built on purpose, faith, and genuine love.
              </p>
              <p className="text-lg">
                Now, as we prepare to say "I do," we're filled with gratitude for all the people who have 
                supported us along the way. We can't wait to celebrate this next chapter with you - our family 
                and friends who mean the world to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

