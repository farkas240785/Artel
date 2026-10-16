import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#documents', label: 'Документы' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-sm shadow-md border-b border-ochre/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="4" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" className="text-patina" />
                <rect x="12" y="8" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                <rect x="26" y="8" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                <rect x="12" y="26" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                <rect x="26" y="26" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                <line x1="17" y1="8" x2="17" y2="22" stroke="currentColor" strokeWidth="0.8" className="text-patina" />
                <line x1="12" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="0.8" className="text-patina" />
                <line x1="31" y1="8" x2="31" y2="22" stroke="currentColor" strokeWidth="0.8" className="text-patina" />
                <line x1="26" y1="15" x2="36" y2="15" stroke="currentColor" strokeWidth="0.8" className="text-patina" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-patina-dark leading-tight tracking-wide">
                Исторический Облик
              </span>
              <span className="text-xs text-graphite-light font-text tracking-wider uppercase">
                Артель реставрации
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-text text-sm uppercase tracking-wider text-graphite hover:text-patina transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-ochre after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-patina text-paper font-text text-sm uppercase tracking-wider rounded-sm hover:bg-patina-dark transition-colors duration-300"
            >
              Связаться
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-patina"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-paper/98 backdrop-blur-sm border-t border-ochre/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-text text-base uppercase tracking-wider text-graphite hover:text-patina transition-colors py-2 border-b border-paper-darker"
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
