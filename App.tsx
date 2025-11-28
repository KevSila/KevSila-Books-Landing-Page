import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <BookSection />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;