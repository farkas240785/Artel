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

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
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
