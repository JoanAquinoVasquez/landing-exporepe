'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Market from '@/components/Market';
import BusinessModel from '@/components/BusinessModel';
import Traction from '@/components/Traction';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const navLinks = ['Problema', 'Solucion', 'Mercado', 'Modelo', 'Traccion', 'Equipo'];

  return (
    <main className="min-h-screen bg-arena-light overflow-x-hidden">
      {/* Navigation */}
      <Navbar links={navLinks} />

      {/* Sections */}
      <Hero />
      <ProblemSolution />
      <Market />
      <BusinessModel />
      <Traction />
      <Team />
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
