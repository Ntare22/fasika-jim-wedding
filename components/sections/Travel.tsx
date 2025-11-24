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
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Recommended Airbnbs</h4>
                <p className="text-gray-700 text-sm">
                  For those looking for alternative accommodation options, there are several Airbnb properties 
                  available in the Nyali and Mombasa area. These offer a more local experience and can be a 
                  great option for groups or extended stays.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Contact Floyd for recommendations and assistance with bookings.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:+254746538399" 
                    className="text-rose-600 hover:text-rose-700 font-medium text-sm"
                  >
                    +254 746 538 399
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Logistics</h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Getting to Your Accommodation</h4>
              <p className="text-gray-700 mb-3">
                Uber is available in Mombasa and is a convenient way to reach your accommodation from the airport 
                or anywhere in the city. The service is reliable and affordable.
              </p>
              <p className="text-gray-700 mb-3">
                For assistance with transportation arrangements or if you have any questions about getting around Mombasa, 
                please contact Floyd.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Floyd</p>
                  <a 
                    href="tel:+254746538399" 
                    className="text-rose-600 hover:text-rose-700 font-medium text-sm"
                  >
                    +254 746 538 399
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Places to Visit */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Places to Visit</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Fort Jesus</h4>
                <p className="text-gray-700 mb-2">
                  A UNESCO World Heritage Site, Fort Jesus is a 16th-century Portuguese fort overlooking the Old Port of Mombasa. 
                  It's one of the most visited historical sites in Kenya and offers stunning views of the Indian Ocean.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Nkrumah Road, Mombasa Old Town
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Mombasa Old Town</h4>
                <p className="text-gray-700 mb-2">
                  Explore the narrow streets of Old Town with its mix of Swahili, Arabic, and European architecture. 
                  The area is filled with colorful buildings, local markets, and traditional shops.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Near Fort Jesus, Mombasa
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Haller Park</h4>
                <p className="text-gray-700 mb-2">
                  A nature park and wildlife sanctuary featuring giraffes, hippos, crocodiles, and various bird species. 
                  Perfect for a family outing or nature lovers.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Bamburi, Mombasa
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Nyali Beach & Mombasa Marine National Park</h4>
                <p className="text-gray-700 mb-2">
                  Beautiful beaches perfect for relaxation, water sports, and snorkeling. The marine park offers 
                  opportunities to see colorful coral reefs and marine life.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Nyali, Mombasa (near the wedding venue)
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Mombasa Tusks</h4>
                <p className="text-gray-700 mb-2">
                  Iconic aluminum elephant tusks that form an arch over Moi Avenue, built to commemorate Queen Elizabeth's 
                  visit in 1952. A must-see landmark and great photo opportunity.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Moi Avenue, Mombasa
                </p>
              </div>
            </div>
          </div>

          {/* Visa Requirements */}
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Visa Requirements</h3>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Yellow Fever Vaccination</h4>
              <p className="text-gray-700 mb-3">
                Kenya requires a valid Yellow Fever vaccination certificate for travelers coming from or 
                transiting through countries with risk of Yellow Fever transmission.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Important:</strong> Make sure to get your Yellow Fever vaccination at least 10 days 
                before your travel date. The certificate is valid for life once you've received the vaccination.
              </p>
              <p className="text-gray-700 text-sm">
                Please check with your local health department or travel clinic for the most up-to-date 
                requirements and to schedule your vaccination.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

