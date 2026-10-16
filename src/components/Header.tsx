import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Работы' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <rect x="4" y="2" width="32" height="36" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                <rect x="8" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="22" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="8" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="22" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg font-semibold text-graphite leading-none">
                Исторический Облик
              </div>
              <div className="text-[10px] text-graphite-light tracking-[0.2em] uppercase mt-0.5">
                Реставрация
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-graphite-light hover:text-patina transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-patina text-white text-sm font-medium rounded-md hover:bg-patina-dark transition-colors"
            >
              Связаться
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-graphite"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-base text-graphite hover:text-patina"
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
