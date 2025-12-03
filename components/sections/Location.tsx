export default function Location() {
  const events = [
    {
      date: 'February 8th',
      time: '5:00 PM',
      title: 'Rehearsal Dinner',
      description: 'Aqua Garden - Expected temperature: 30 to 33 degrees Celsius',
    },
    {
      date: 'February 9th',
      time: '4:30 PM',
      title: 'Ring Ceremony',
      description: 'Wedding ceremony at Sarova Whitesands Beach Resort & Spa',
    },
    {
      date: 'February 9th',
      time: '6:30 PM',
      title: 'Reception',
      description: 'Cocktail hour and celebration',
    },
  ];

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-16">Wedding Day Timeline</h2>
        <div className="relative">
          {/* Vertical line - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-400"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center"
              >
                {/* Time circle - centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-24 h-24 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center px-2">
                    <div className="text-xs font-semibold text-gray-800 mb-1">
                      {event.date}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      {event.time.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-600">
                      {event.time.split(' ')[1]}
                    </div>
                  </div>
                </div>
                
                {/* Content - alternating sides */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'}`}>
                  <h3 className="text-xl md:text-2xl font-serif text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

