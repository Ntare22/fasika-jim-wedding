export default function Travel() {
  return (
    <section id="travel" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">Travel & Accommodation</h2>
        
        <div className="space-y-12">
          {/* Travel Information */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Getting to Mombasa</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">By Air</h4>
                <p className="mb-2">
                  Mombasa is easily accessible via Moi International Airport (MBA). The airport is approximately 
                  10 kilometers from the city center and offers both domestic and international flights.
                </p>
                <p>
                  Major airlines including Kenya Airways, Ethiopian Airlines, and Emirates operate regular 
                  flights to Mombasa from Nairobi and other major cities.
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation Recommendations */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Accommodation Recommendations</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sarova Whitesands Beach Resort & Spa</h4>
                <p className="text-gray-700 mb-3">
                  Our wedding venue! Stay at the same location for ultimate convenience. This beachfront resort 
                  offers luxurious accommodations with stunning ocean views.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Distance to venue:</strong> On-site
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Other Recommended Hotels</h4>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-medium">Tamarind Mombasa</p>
                    <p className="text-sm text-gray-600">Luxury hotel with excellent service, approximately 15 minutes from venue</p>
                  </div>
                  <div>
                    <p className="font-medium">Serena Beach Resort & Spa</p>
                    <p className="text-sm text-gray-600">Beachfront resort with beautiful gardens, approximately 20 minutes from venue</p>
                  </div>
                  <div>
                    <p className="font-medium">PrideInn Paradise Beach Resort</p>
                    <p className="text-sm text-gray-600">Modern beachfront hotel, approximately 10 minutes from venue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Need Help with Travel Arrangements?</h3>
            <p className="text-gray-700 mb-4">
              For assistance with travel arrangements, accommodation bookings, or any questions about your stay in Mombasa, 
              please contact:
            </p>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-800">Floyd</p>
                <a 
                  href="tel:+254700000000" 
                  className="text-rose-600 hover:text-rose-700 font-medium"
                >
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

