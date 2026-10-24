import { ArrowDown, Wrench, ArrowUp } from 'lucide-react';

const services = [
  {
    icon: ArrowDown,
    title: 'Демонтажные работы',
    description: 'Бережное извлечение, маркировка каждого элемента, фотофиксация утрат',
    features: ['Маркировка элементов', 'Фотофиксация', 'Документирование утрат'],
    image: 'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
  },
  {
    icon: Wrench,
    title: 'Реставрационные работы',
    description: 'Восполнение дефектов дублированием, подбор древесины, восстановление шип-паз',
    features: ['Дублирование утраченных частей', 'Подбор аналогичной древесины', 'Консервация подлинных фрагментов'],
    image: 'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
  },
  {
    icon: ArrowUp,
    title: 'Монтажные работы',
    description: 'Интеграция в проёмы с регулировкой притворов, обратимые материалы. Оказываем услуги столярным мастерским на субподряде.',
    features: ['Точная интеграция в проёмы', 'Регулировка притворов', 'Обратимые материалы', 'Субподряд для мастерских'],
    image: 'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="decorative-line mx-auto mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-6">
            Направления работ
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Выполняем работы как комплексно, так и по отдельным направлениям. Оказываем услуги монтажных работ столярным мастерским на субподряде.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="premium-card group bg-ivory rounded-sm overflow-hidden premium-border"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover premium-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-sm bg-ivory/95 backdrop-blur-sm shadow-xl border border-gold/20">
                    <service.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl font-medium text-midnight mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-light mb-8 leading-relaxed font-light">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-charcoal-light font-light">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
