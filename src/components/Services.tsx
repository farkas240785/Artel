import { ArrowDown, Wrench, ArrowUp } from 'lucide-react';

const services = [
  {
    icon: ArrowDown,
    title: 'Демонтаж',
    description: 'Бережное извлечение, маркировка каждого элемента, фотофиксация утрат',
    features: ['Маркировка элементов', 'Фотофиксация', 'Документирование утрат'],
  },
  {
    icon: Wrench,
    title: 'Реставрация',
    description: 'Восполнение дефектов дублированием, подбор древесины, восстановление шип-паз',
    features: ['Дублирование утраченных частей', 'Подбор аналогичной древесины', 'Консервация подлинных фрагментов'],
  },
  {
    icon: ArrowUp,
    title: 'Монтаж',
    description: 'Интеграция в проёмы с регулировкой притворов, обратимые материалы',
    features: ['Точная интеграция в проёмы', 'Регулировка притворов', 'Обратимые материалы'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Технологический цикл
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Полный цикл работ с исторической столяркой
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-patina to-patina-light mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-graphite mb-3">
                {service.title}
              </h3>
              <p className="text-graphite-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-graphite-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-ochre flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-patina/5 border border-patina/20 rounded-xl px-8 py-5">
            <p className="text-graphite">
              <span className="font-semibold text-patina">Важно:</span> Не используем ПВХ, пластик или монтажную пену. 
              Только аутентичные материалы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
