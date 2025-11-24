'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RSVP() {
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietary: '',
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission - you can integrate with a backend or email service
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    setRsvpForm({ name: '', email: '', guests: '1', attending: 'yes', dietary: '' });
  };

  return (
    <section id="rsvp" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/rsvp.jpg"
          alt="RSVP Background"
          fill
          className="object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 mb-12">RSVP</h2>
        <div className="bg-white shadow-lg p-8 sm:p-10">
          <form onSubmit={handleRsvpSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={rsvpForm.name}
                onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={rsvpForm.email}
                onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="attending" className="block text-sm font-medium text-gray-700 mb-2">
                Will you be attending? *
              </label>
              <select
                id="attending"
                required
                value={rsvpForm.attending}
                onChange={(e) => setRsvpForm({ ...rsvpForm, attending: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, I can't make it</option>
              </select>
            </div>
            {rsvpForm.attending === 'yes' && (
              <>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    required
                    value={rsvpForm.guests}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, guests: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Restrictions or Allergies
                  </label>
                  <textarea
                    id="dietary"
                    value={rsvpForm.dietary}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, dietary: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none"
                    rows={3}
                    placeholder="Please let us know about any dietary restrictions or allergies..."
                  />
                </div>
              </>
            )}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

