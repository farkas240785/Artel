import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Documents from './components/Documents';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Principles />
        <Services />
        <Portfolio />
        <Documents />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
