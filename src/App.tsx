import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Fleet from './components/Fleet';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import References from './components/References';
import Services from './components/Services';

function App() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Services />
      <Fleet />
      <References />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}

export default App;