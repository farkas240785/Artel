import { ArrowDown, Wrench, ArrowUp } from 'lucide-react';

const services = [
  {
    icon: ArrowDown,
    number: '01',
    title: 'Демонтаж',
    subtitle: 'Бережное извлечение',
    description: 'Аккуратное извлечение исторических столярных элементов из проёмов с обязательной маркировкой каждого элемента и фотофиксацией всех утрат и повреждений.',
    details: [
      'Маркировка каждого элемента для последующей сборки',
      'Фотофиксация состояния до начала работ',
      'Документирование всех утрат и дефектов',
      'Бережная транспортировка в мастерскую',
    ],
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Реставрация',
    subtitle: 'Восполнение и консервация',
    description: 'Профессиональное восполнение дефектов методом дублирования, подбор древесины аналогичной породы, восстановление традиционных соединений шип-паз.',
    details: [
      'Дублирование утраченных элементов',
      'Подбор древесины аналогичной породы',
      'Восстановление узлов шип-паз',
      'Консервация подлинных фрагментов',
    ],
  },
  {
    icon: ArrowUp,
    number: '03',
    title: 'Монтаж',
    subtitle: 'Интеграция в проёмы',
    description: 'Точная интеграция отреставрированных элементов в исторические проёмы с регулировкой притворов и использованием только обратимых материалов.',
    details: [
      'Интеграция в исторические проёмы',
      'Регулировка притворов',
      'Использование обратимых материалов',
      'Финальная отделка аутентичными составами',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-graphite-dark text-paper relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-paper" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="decorative-line max-w-md mx-auto mb-6">
            <span className="font-text text-sm uppercase tracking-[0.3em] text-ochre-light">Технологический цикл</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-paper mb-6">
            Наши услуги
          </h2>
          <p className="font-body text-xl text-paper-dark max-w-3xl mx-auto leading-relaxed">
            Полный цикл работ с исторической столяркой: от бережного демонтажа 
            до профессионального монтажа с сохранением подлинности
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-graphite/50 border border-paper/10 rounded-sm p-8 hover:border-ochre/40 transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-serif text-6xl font-bold text-paper/5 group-hover:text-ochre/10 transition-colors duration-500">
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-ochre/10 border border-ochre/30 mb-6 group-hover:bg-ochre/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-ochre" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-paper mb-2">
                {service.title}
              </h3>
              <p className="font-text text-ochre text-sm uppercase tracking-wider mb-4">
                {service.subtitle}
              </p>
              <p className="font-text text-paper-dark leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Details list */}
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-text text-sm text-paper-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-ochre mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-graphite/50 border border-ochre/20 rounded-sm px-8 py-6">
            <p className="font-text text-paper-dark text-lg">
              <span className="text-ochre font-medium">Важно:</span> Мы не используем ПВХ, пластик или монтажную пену. 
              Только аутентичные материалы и обратимые технологии.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
