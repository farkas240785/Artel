import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Работы' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
  { href: '#requisites', label: 'Реквизиты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-ivory/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <rect x="4" y="2" width="32" height="36" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
                <rect x="8" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-gold-light" />
                <rect x="22" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-gold-light" />
                <rect x="8" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-gold-light" />
                <rect x="22" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-gold-light" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className={`font-serif text-xl font-medium leading-tight transition-colors duration-500 ${
                isScrolled ? 'text-midnight' : 'text-white'
              }`}>
                Артель реставрации и монтажа
              </div>
              <div className={`text-[10px] tracking-[0.25em] uppercase mt-1 transition-colors duration-500 font-light ${
                isScrolled ? 'text-gold-dark' : 'text-gold-light'
              }`}>
                «Исторический Облик»
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-charcoal-light hover:text-gold' 
                    : 'text-white/90 hover:text-gold-light'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`premium-button px-6 py-3 text-sm font-medium rounded-sm transition-all duration-500 ${
                isScrolled
                  ? 'bg-gold text-midnight hover:bg-gold-light'
                  : 'bg-gold/20 backdrop-blur-sm text-white border border-gold/40 hover:bg-gold/30'
              }`}
            >
              Оставить заявку
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-midnight' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-md border-t border-gold/10">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-base text-charcoal hover:text-gold transition-colors font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
