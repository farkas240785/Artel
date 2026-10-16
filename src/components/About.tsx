import { Shield, BookOpen, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-paper paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="decorative-line max-w-md mx-auto mb-6">
            <span className="font-text text-sm uppercase tracking-[0.3em] text-ochre">О нашей артели</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-patina-dark mb-6">
            Возвращаем подлинность
          </h2>
          <p className="font-body text-xl text-graphite-light max-w-3xl mx-auto leading-relaxed">
            Наша миссия — возвращение аутентичного вида столярным заполнениям 
            (окна, двери, ворота) без утраты подлинности исторических объектов
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-patina-dark mb-6">
              Артель «Исторический Облик»
            </h3>
            <div className="space-y-4 font-text text-graphite leading-relaxed text-lg">
              <p>
                Мы специализируемся на профессиональной реставрации деревянных окон, 
                дверей и ворот на объектах культурного наследия Санкт-Петербурга. 
                Каждый проект — это кропотливая работа по сохранению исторической 
                подлинности с применением традиционных технологий.
              </p>
              <p>
                Термин «исторический облик» является ключевым в законодательстве 
                об охране памятников (73-ФЗ). Мы работаем на возврат объекту его 
                первоначального вида, а не на «модернизацию».
              </p>
              <p>
                Наша артель объединяет мастеров-реставраторов, владеющих традиционными 
                технологиями обработки древесины, восстановления узлов шип-паз, 
                подбора материалов аналогичных пород.
              </p>
            </div>
          </div>

          {/* Decorative illustration */}
          <div className="relative">
            <div className="bg-paper-dark rounded-sm border border-ochre/30 p-8 relative overflow-hidden">
              {/* SVG illustration of a historical window */}
              <svg viewBox="0 0 300 400" className="w-full max-w-sm mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Window frame */}
                <rect x="30" y="20" width="240" height="360" rx="4" stroke="currentColor" strokeWidth="3" className="text-patina" />
                <rect x="40" y="30" width="220" height="340" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina/60" />
                
                {/* Arch top */}
                <path d="M50 120 Q150 40 250 120" stroke="currentColor" strokeWidth="2" className="text-ochre" fill="none" />
                
                {/* Window panes */}
                <rect x="55" y="130" width="85" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                <rect x="160" y="130" width="85" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                <rect x="55" y="245" width="85" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                <rect x="160" y="245" width="85" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                
                {/* Mullions */}
                <line x1="97" y1="130" x2="97" y2="230" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="55" y1="180" x2="140" y2="180" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="202" y1="130" x2="202" y2="230" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="160" y1="180" x2="245" y2="180" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="97" y1="245" x2="97" y2="345" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="55" y1="295" x2="140" y2="295" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="202" y1="245" x2="202" y2="345" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                <line x1="160" y1="295" x2="245" y2="295" stroke="currentColor" strokeWidth="1" className="text-ochre/50" />
                
                {/* Decorative elements */}
                <rect x="130" y="235" width="40" height="8" rx="2" fill="currentColor" className="text-ochre/40" />
                <circle cx="150" cy="100" r="15" stroke="currentColor" strokeWidth="1.5" className="text-ochre" fill="none" />
                <circle cx="150" cy="100" r="8" stroke="currentColor" strokeWidth="1" className="text-ochre/60" fill="none" />
                
                {/* Annotations */}
                <line x1="270" y1="130" x2="290" y2="110" stroke="currentColor" strokeWidth="0.8" className="text-graphite-light" strokeDasharray="3 3" />
                <line x1="270" y1="245" x2="290" y2="245" stroke="currentColor" strokeWidth="0.8" className="text-graphite-light" strokeDasharray="3 3" />
              </svg>
              
              <p className="text-center font-text text-sm text-graphite-light mt-4 italic">
                Чертеж исторического оконного заполнения
              </p>
            </div>
          </div>
        </div>

        {/* Standards cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-paper-dark/50 border border-ochre/20 rounded-sm p-8 text-center hover:border-ochre/50 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-patina/10">
              <Shield className="w-8 h-8 text-patina" />
            </div>
            <h4 className="font-serif text-xl font-bold text-patina-dark mb-3">ГОСТ Р 55567</h4>
            <p className="font-text text-graphite-light leading-relaxed">
              Соблюдение стандартов реставрации и консервации объектов культурного наследия
            </p>
          </div>

          <div className="bg-paper-dark/50 border border-ochre/20 rounded-sm p-8 text-center hover:border-ochre/50 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-patina/10">
              <BookOpen className="w-8 h-8 text-patina" />
            </div>
            <h4 className="font-serif text-xl font-bold text-patina-dark mb-3">СП 48.13330</h4>
            <p className="font-text text-graphite-light leading-relaxed">
              Организация строительства. Нормы и правила проведения реставрационных работ
            </p>
          </div>

          <div className="bg-paper-dark/50 border border-ochre/20 rounded-sm p-8 text-center hover:border-ochre/50 transition-colors duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-patina/10">
              <Award className="w-8 h-8 text-patina" />
            </div>
            <h4 className="font-serif text-xl font-bold text-patina-dark mb-3">73-ФЗ</h4>
            <p className="font-text text-graphite-light leading-relaxed">
              Работа в соответствии с Федеральным законом об объектах культурного наследия
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
