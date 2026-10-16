import Header from './components/Header';
import Hero from './components/Hero';
import TreeNavigation from './components/TreeNavigation';
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
import SiteMap from './components/SiteMap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        
        {/* Tree Navigation Section - First Level of Tree */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Tree Navigation */}
              <div className="lg:col-span-1">
                <TreeNavigation />
              </div>
              
              {/* Quick Overview */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-patina/5 via-paper to-ochre/5 rounded-2xl p-8 border border-patina/10">
                  <h3 className="font-serif text-2xl font-bold text-graphite mb-4">
                    Навигация по сайту
                  </h3>
                  <p className="text-graphite-light leading-relaxed mb-6">
                    Сайт организован по древовидному принципу: от главной страницы 
                    отходят основные разделы, каждый из которых содержит подразделы. 
                    Используйте дерево слева для быстрой навигации или листайте вниз 
                    для последовательного ознакомления с контентом.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <a href="#about" className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-patina/30 hover:shadow-md transition-all">
                      <div className="font-semibold text-graphite mb-1">О нас</div>
                      <div className="text-xs text-graphite-light">Миссия и принципы</div>
                    </a>
                    <a href="#services" className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-patina/30 hover:shadow-md transition-all">
                      <div className="font-semibold text-graphite mb-1">Услуги</div>
                      <div className="text-xs text-graphite-light">3 направления</div>
                    </a>
                    <a href="#portfolio" className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-patina/30 hover:shadow-md transition-all">
                      <div className="font-semibold text-graphite mb-1">Портфолио</div>
                      <div className="text-xs text-graphite-light">Наши работы</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content - Linear Flow */}
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
        
        {/* Site Map - Visual Tree Structure */}
        <SiteMap />
      </main>
      <Footer />
    </div>
  );
}
