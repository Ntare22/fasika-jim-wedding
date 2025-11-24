export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-serif text-gray-800 hover:text-gray-900 transition-colors cursor-pointer">F & J</a>
          <div className="hidden md:flex space-x-8">
            <a href="/#our-story" className="text-gray-700 hover:text-gray-900 transition-colors">Our Story</a>
            <a href="/#rsvp" className="text-gray-700 hover:text-gray-900 transition-colors">RSVP</a>
            <a href="/#location" className="text-gray-700 hover:text-gray-900 transition-colors">Location</a>
            <a href="/#travel" className="text-gray-700 hover:text-gray-900 transition-colors">Travel</a>
            <a href="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">Gallery</a>
            <a href="/#faqs" className="text-gray-700 hover:text-gray-900 transition-colors">FAQs</a>
          </div>
          <div className="md:hidden">
            <a href="#rsvp" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">RSVP</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

