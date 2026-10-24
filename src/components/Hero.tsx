import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/42cff70b-f39f-41b2-bc47-b329fbffa30b/_result.png"
          alt="Историческое здание Санкт-Петербурга"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/85 via-midnight/70 to-midnight/85" />
        
        {/* Premium gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent via-midnight/40 to-ivory" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-md border border-gold/30 rounded-full">
            <span className="text-sm text-gold-light font-light tracking-[0.2em] uppercase">
              Артель реставрации и монтажа
            </span>
          </div>
        </div>
        
        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-6 py-2 bg-gold/10 backdrop-blur-md border border-gold/40 rounded-full">
            <span className="text-xs text-gold-light font-light tracking-[0.15em] uppercase">
              Лицензия Минкульта РФ
            </span>
          </div>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Сохраняем
          <span className="block text-gold-light mt-4 font-medium">исторический облик</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Профессиональные демонтажные, реставрационные и монтажные работы на объектах культурного наследия Санкт-Петербурга
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#services"
            className="premium-button px-10 py-5 bg-gold text-midnight font-medium tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300 shadow-2xl"
          >
            Наши услуги
          </a>
          <a
            href="#portfolio"
            className="premium-button px-10 py-5 border-2 border-white/30 text-white font-medium tracking-wide rounded-sm hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
          >
            Смотреть работы
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gold/60 hover:text-gold transition-colors">
          <span className="text-xs uppercase tracking-[0.2em] mb-3 font-light">Листайте</span>
          <ChevronDown size={24} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
}
