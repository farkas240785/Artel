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
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-patina/10 to-ochre/10 relative overflow-hidden">
                <img 
                  src="/images/workshop.jpg" 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                    <service.icon className="w-7 h-7 text-patina" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
