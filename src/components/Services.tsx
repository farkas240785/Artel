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
    <section id="services" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Направления работ
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Выполняем работы как комплексно, так и по отдельным направлениям. Оказываем услуги монтажных работ столярным мастерским на субподряде.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                    <service.icon className="w-7 h-7 text-patina" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-graphite mb-3">
                  {service.title}
                </h3>
                <p className="text-graphite-light mb-6 leading-relaxed">
                  {service.description}
                </p>

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


      </div>
    </section>
  );
}
