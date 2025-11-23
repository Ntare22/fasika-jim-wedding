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
                Our story began like many great love stories do - with a chance encounter that felt like destiny. 
                What started as a simple conversation quickly blossomed into something beautiful and profound.
              </p>
              <p className="text-lg mb-4">
                Through shared adventures, quiet moments, and everything in between, we discovered that we were 
                not just partners, but best friends. Every day together has been a new chapter in our journey, 
                filled with laughter, love, and countless memories.
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
                Now, as we prepare to say "I do," we're filled with gratitude for all the people who have 
                supported us along the way. Your presence in our lives has made our love story even more special.
              </p>
              <p className="text-lg">
                We can't wait to celebrate this next chapter with you - our family and friends who mean the world to us. 
                Join us as we begin our forever together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

