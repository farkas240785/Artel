import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-patina/20 to-ochre/20 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 500" className="w-3/4 h-3/4 opacity-30" fill="none">
                  <rect x="50" y="50" width="300" height="400" rx="4" stroke="currentColor" strokeWidth="2" className="text-patina" />
                  <rect x="70" y="70" width="110" height="150" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                  <rect x="220" y="70" width="110" height="150" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                  <rect x="70" y="250" width="110" height="150" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                  <rect x="220" y="250" width="110" height="150" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                  <line x1="125" y1="70" x2="125" y2="220" stroke="currentColor" strokeWidth="1" className="text-patina/60" />
                  <line x1="70" y1="145" x2="180" y2="145" stroke="currentColor" strokeWidth="1" className="text-patina/60" />
                  <line x1="275" y1="70" x2="275" y2="220" stroke="currentColor" strokeWidth="1" className="text-patina/60" />
                  <line x1="220" y1="145" x2="330" y2="145" stroke="currentColor" strokeWidth="1" className="text-patina/60" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-patina/40 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-6 leading-tight">
              Возвращаем подлинность
            </h2>
            <p className="text-lg text-graphite-light leading-relaxed mb-8">
              Специализируемся на реставрации деревянных окон, дверей и ворот 
              на объектах культурного наследия. Работаем по ГОСТ и соблюдаем 
              требования 73-ФЗ.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="font-serif text-4xl font-bold text-patina mb-1">73-ФЗ</div>
                <div className="text-sm text-graphite-light">Охрана памятников</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-patina mb-1">ГОСТ</div>
                <div className="text-sm text-graphite-light">Р 55567</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-patina mb-1">Минкульт</div>
                <div className="text-sm text-graphite-light">Лицензия РФ</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <Shield className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Сохранение подлинности</h4>
                  <p className="text-sm text-graphite-light">Максимальное сохранение аутентичных элементов</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <Award className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Аутентичные материалы</h4>
                  <p className="text-sm text-graphite-light">Древесина аналогичных пород, традиционные технологии</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Обратимость вмешательств</h4>
                  <p className="text-sm text-graphite-light">Все материалы позволяют обратить вмешательства</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
