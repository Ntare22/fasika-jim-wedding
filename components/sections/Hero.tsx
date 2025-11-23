import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Fasika and Jim"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 85%' }}
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 mt-32">
        <p className="text-lg sm:text-xl text-white mb-4 font-light tracking-wider drop-shadow-lg">We're Getting Married!</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg">
          Fasika & Jim
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-white/80"></div>
          <p className="text-xl sm:text-2xl text-white font-light drop-shadow-lg">February 9, 2026</p>
          <div className="h-px w-16 bg-white/80"></div>
        </div>
        <a
          href="#rsvp"
          className="inline-block bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium shadow-lg"
        >
          RSVP
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

