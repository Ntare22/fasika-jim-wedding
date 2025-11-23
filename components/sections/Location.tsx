export default function Location() {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">Location</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Ceremony & Reception</h3>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg font-medium">Sarova Whitesands Beach Resort & Spa</p>
                <p>Nyali Beach Road</p>
                <p>Mombasa, Kenya</p>
                <p className="text-gray-600 mt-4">Ceremony: 4:00 PM</p>
                <p className="text-gray-600">Reception: 5:00 PM - 11:00 PM</p>
                <a
                  href="https://www.google.com/maps/search/Sarova+Whitesands+Beach+Resort+Mombasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-rose-600 hover:text-rose-700 underline mt-2"
                >
                  View on Map
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">About the Venue</h4>
              <p className="text-gray-700 text-sm">
                Sarova Whitesands is a stunning beachfront resort located on the beautiful Nyali Beach. 
                The venue offers breathtaking ocean views and a perfect setting for our special day.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Sarova Whitesands Beach Resort</p>
              <p className="text-sm mt-2">Mombasa, Kenya</p>
              <p className="text-xs mt-4 text-gray-400">You can integrate Google Maps here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

