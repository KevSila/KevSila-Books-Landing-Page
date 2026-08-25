import React from 'react';
import About from './components/About';
import BookDetailPage from './components/BookDetailPage';
import BookSection from './components/BookSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Previews from './components/Previews';
import PrivacyPage from './components/PrivacyPage';
import ReadingPath from './components/ReadingPath';
import Testimonials from './components/Testimonials';
import { getBook } from './data';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <main id="main-content">
      <Hero />
      <ReadingPath />
      <BookSection />
      <Previews />
      <Testimonials />
      <FAQ />
      <About />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

interface AppProps {
  pathOverride?: string;
}

const App: React.FC<AppProps> = ({ pathOverride }) => {
  const path = (pathOverride ?? window.location.pathname).replace(/^\/+|\/+$/g, '');
  const book = getBook(path);

  if (book) {
    return <><Navbar compact /><BookDetailPage book={book} /><Footer /></>;
  }

  if (path === 'privacy') {
    return <><Navbar compact /><PrivacyPage /><Footer /></>;
  }

  return <HomePage />;
};

export default App;
