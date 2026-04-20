'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Destinations from '@/components/Destinations';
import Gamification from '@/components/Gamification';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const navLinks = ['Destinos', 'Cultura', 'Retos', 'Negocios'];

  return (
    <main className="min-h-screen bg-arena-light overflow-x-hidden">
      {/* Navigation */}
      <Navbar links={navLinks} />

      {/* Sections */}
      <Hero />
      <ProblemSolution />
      <Destinations />
      <Gamification />
      <Testimonials />
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
