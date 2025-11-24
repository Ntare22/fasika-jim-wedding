export default function Location() {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">Location</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Rehearsal Dinner</h3>
            <div className="space-y-2 text-gray-700">
              <p className="text-lg font-medium">Aqua Garden</p>
              <p className="text-gray-600">February 8th at 5:00 PM</p>
              <p className="text-sm text-gray-600 mt-2">
                Expected temperature: 30 to 33 degrees Celsius
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

