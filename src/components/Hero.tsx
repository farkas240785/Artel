import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/42cff70b-f39f-41b2-bc47-b329fbffa30b/_result.png"
          alt="Историческое здание Санкт-Петербурга"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-patina-dark/70 via-patina/60 to-graphite-dark/70" />
        {/* Smooth fade to white at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="mb-6">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Артель реставрации и монтажа «Исторический Облик»
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="inline-block px-4 py-1.5 bg-ochre/20 backdrop-blur-sm border border-ochre/30 rounded-full">
            <span className="text-sm text-ochre-light font-medium tracking-wide">
              Лицензия Минкульта РФ
            </span>
          </div>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
          Сохраняем
          <span className="block text-ochre-light mt-2">исторический облик</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Профессиональная реставрация окон, дверей и ворот на объектах культурного наследия Санкт-Петербурга
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-4 bg-white text-patina-dark font-semibold rounded-md hover:bg-paper transition-colors shadow-lg"
          >
            Наши услуги
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            Смотреть работы
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-white mb-1">73-ФЗ</div>
            <div className="text-sm text-white/60">Охрана памятников</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-white mb-1">ГОСТ</div>
            <div className="text-sm text-white/60">Р 55567</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-white mb-1">Минкульт</div>
            <div className="text-sm text-white/60">Лицензия РФ</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-wider mb-2">Листайте</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
