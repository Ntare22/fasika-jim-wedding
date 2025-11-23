import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import OurStory from '@/components/sections/OurStory';
import RSVP from '@/components/sections/RSVP';
import Location from '@/components/sections/Location';
import Travel from '@/components/sections/Travel';
import FAQs from '@/components/sections/FAQs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OurStory />
      <RSVP />
      <Location />
      <Travel />
      <FAQs />
      <Footer />
    </div>
  );
}
