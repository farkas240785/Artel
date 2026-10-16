import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/60 to-paper" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner ornaments */}
        <svg className="absolute top-24 left-8 w-24 h-24 text-ochre/30" viewBox="0 0 100 100" fill="none">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 25 L25 25 L25 80 L20 80 Z" fill="currentColor" opacity="0.5" />
        </svg>
        <svg className="absolute top-24 right-8 w-24 h-24 text-ochre/30 rotate-90" viewBox="0 0 100 100" fill="none">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor" />
          <path d="M20 20 L80 20 L80 25 L25 25 L25 80 L20 80 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Top decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-ochre/60" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-ochre" fill="currentColor">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z" />
          </svg>
          <div className="w-16 h-[1px] bg-ochre/60" />
        </div>

        <p className="font-text text-sm sm:text-base uppercase tracking-[0.3em] text-patina mb-6 animate-fade-in-up">
          Артель реставрации и монтажа
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-patina-dark leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Сохраняем исторический облик
          <span className="block text-ochre mt-2">памятников архитектуры</span>
          <span className="block text-patina-dark mt-1">Санкт-Петербурга</span>
        </h1>

        <p className="font-body text-xl sm:text-2xl md:text-3xl text-graphite-light max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Профессиональная реставрация, демонтаж и монтаж исторической столярки.
          <span className="block mt-2 text-patina font-medium">Лицензия Минкульта РФ.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#services"
            className="px-8 py-4 bg-patina text-paper font-text text-base uppercase tracking-wider rounded-sm hover:bg-patina-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Наши услуги
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-patina text-patina font-text text-base uppercase tracking-wider rounded-sm hover:bg-patina hover:text-paper transition-all duration-300"
          >
            Портфолио
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-patina">73-ФЗ</div>
            <div className="font-text text-sm text-graphite-light mt-1">Охрана памятников</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-patina">ГОСТ</div>
            <div className="font-text text-sm text-graphite-light mt-1">Р 55567</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-patina">Минкульт</div>
            <div className="font-text text-sm text-graphite-light mt-1">Лицензия РФ</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-flex flex-col items-center text-patina/60 hover:text-patina transition-colors">
            <span className="font-text text-xs uppercase tracking-wider mb-2">Подробнее</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
