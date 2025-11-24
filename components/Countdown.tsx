'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-09T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 sm:gap-6 mb-8">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-1">
          {timeLeft.days}
        </div>
        <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-1">
          {timeLeft.hours}
        </div>
        <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-1">
          {timeLeft.minutes}
        </div>
        <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-1">
          {timeLeft.seconds}
        </div>
        <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
}

