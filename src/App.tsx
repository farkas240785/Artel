import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Documents from './components/Documents';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Requisites from './components/Requisites';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Stats />
        <Portfolio />
        <Documents />
        <CTA />
        <Contact />
        <Requisites />
      </main>
      <Footer />
    </div>
  );
}
