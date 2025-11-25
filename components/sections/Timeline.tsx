export default function Timeline() {
  const events = [
    {
      time: '3:00 PM',
      title: 'Welcome',
      description: 'Guest gathering, refreshments, and getting acquainted',
    },
    {
      time: '4:00 PM',
      title: 'Ceremony',
      description: 'Wedding ceremony at Sarova Whitesands',
    },
    {
      time: '5:00 PM',
      title: 'Reception',
      description: 'Cocktail hour and celebration',
    },
    {
      time: '6:00 PM',
      title: 'Dinner',
      description: 'Wedding dinner and toasts',
    },
    {
      time: '7:00 PM',
      title: 'Dancing',
      description: 'Music, dancing, and celebration',
    },
    {
      time: '11:00 PM',
      title: 'Final',
      description: 'We hope our celebration will be memorable for you',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-16">Wedding Day Timeline</h2>
        <div className="relative">
          {/* Vertical line - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-center"
              >
                {/* Time circle - centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-20 h-20 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
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

