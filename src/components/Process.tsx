import { ClipboardCheck, Package, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Обследование',
    description: 'Осмотр объекта, фотофиксация, составление дефектной ведомости',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Package,
    number: '02',
    title: 'Демонтаж',
    description: 'Бережное извлечение с маркировкой каждого элемента',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Реставрация',
    description: 'Восполнение утрат, подбор древесины, восстановление соединений',
    color: 'bg-patina/10 border-patina/30',
    iconColor: 'text-patina',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Монтаж',
    description: 'Интеграция в проёмы, регулировка, финальная отделка',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Четыре этапа от первого осмотра до готового результата
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent z-0" />
              )}

              <div className={`relative z-10 rounded-2xl p-6 border-2 ${step.color} hover:shadow-lg transition-shadow duration-300`}>
                {/* Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 font-serif text-sm font-bold text-graphite shadow-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-graphite mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-graphite-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png"
            alt="Процесс реставрации"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
