import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative shadow-2xl premium-border">
              <img 
                src="https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png"
                alt="Реставратор за работой" 
                className="w-full h-full object-cover premium-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl font-light">
                  Мастер-реставратор за работой
                </p>
                <p className="text-white/70 text-sm mt-2 font-light tracking-wide">
                  Традиционные технологии восстановления
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="decorative-line mb-8" />
            <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-8 leading-tight">
              Возвращаем подлинность
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed mb-6 font-light">
              <span className="font-medium text-charcoal">Артель реставрации и монтажа «Исторический Облик»</span> специализируется 
              на демонтажных, реставрационных и монтажных работах с историческими конструкциями на объектах культурного наследия. 
              Выполняем комплексные проекты и оказываем услуги столярным мастерским на субподряде. Работаем по ГОСТ и соблюдаем требования 73-ФЗ.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="font-serif text-5xl font-light text-gold mb-2">73-ФЗ</div>
                <div className="text-sm text-silver font-light tracking-wide">Охрана памятников</div>
              </div>
              <div>
                <div className="font-serif text-5xl font-light text-gold mb-2">ГОСТ</div>
                <div className="text-sm text-silver font-light tracking-wide">Р 55567</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-light text-gold mb-2">Минкульт</div>
                <div className="text-sm text-silver font-light tracking-wide">Лицензия РФ</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                  <Shield className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-midnight mb-2">Сохранение подлинности</h4>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed">Максимальное сохранение аутентичных элементов</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                  <Award className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-midnight mb-2">Аутентичные материалы</h4>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed">Древесина аналогичных пород, традиционные технологии</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:bg-gold/20 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-midnight mb-2">Обратимость вмешательств</h4>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed">Все материалы позволяют обратить вмешательства</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
