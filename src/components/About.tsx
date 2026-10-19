import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png"
                alt="Реставратор за работой" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-xl font-semibold">
                  Мастер-реставратор за работой
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Традиционные технологии восстановления
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-6 leading-tight">
              Возвращаем подлинность
            </h2>
            <p className="text-lg text-graphite-light leading-relaxed mb-4">
              <span className="font-semibold text-graphite">Артель реставрации и монтажа «Исторический Облик»</span> специализируется 
              на демонтажных, реставрационных и монтажных работах с историческими конструкциями на объектах культурного наследия. 
              Выполняем комплексные проекты и оказываем услуги столярным мастерским на субподряде. Работаем по ГОСТ и соблюдаем требования 73-ФЗ.
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
