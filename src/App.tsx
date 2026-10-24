import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import FullImage from './components/FullImage';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Requisites from './components/Requisites';
import Footer from './components/Footer';
import Admin from './admin/Admin';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminRoute = () => {
      setIsAdmin(window.location.hash === '#/admin');
    };

    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    return () => window.removeEventListener('hashchange', checkAdminRoute);
  }, []);

  if (isAdmin) {
    return <Admin />;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <FullImage />
        <Stats />
        <Portfolio />
        <Contact />
        <Requisites />
      </main>
      <Footer />
    </div>
  );
}
