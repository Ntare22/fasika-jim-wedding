export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-4">Fasika & Jim</h3>
        <p className="text-gray-400 mb-6">We can't wait to celebrate with you!</p>
        <div className="flex justify-center space-x-6 flex-wrap gap-2">
          <a href="#our-story" className="text-gray-400 hover:text-white transition-colors">Our Story</a>
          <a href="#rsvp" className="text-gray-400 hover:text-white transition-colors">RSVP</a>
          <a href="#location" className="text-gray-400 hover:text-white transition-colors">Location</a>
          <a href="#travel" className="text-gray-400 hover:text-white transition-colors">Travel</a>
          <a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
        </div>
        <p className="text-gray-500 text-sm mt-8">© 2025 Fasika & Jim. Made with ❤️</p>
      </div>
    </footer>
  );
}

