import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-xl bg-gradient-to-br from-patina/10 to-ochre/10">
              <img 
                src="/images/window-illustration.svg" 
                alt="Историческое деревянное окно" 
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>

          <div>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-6 leading-tight">
              Возвращаем подлинность
            </h2>
            <p className="text-lg text-graphite-light leading-relaxed mb-4">
              <span className="font-semibold text-graphite">Артель реставрации и монтажа «Исторический Облик»</span> специализируется 
              на реставрации деревянных окон, дверей и ворот на объектах культурного наследия. 
              Работаем по ГОСТ и соблюдаем требования 73-ФЗ.
            </p>

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
