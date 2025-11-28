import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <BookSection />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;