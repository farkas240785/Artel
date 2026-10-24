import { ClipboardCheck, Package, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Обследование',
    description: 'Осмотр объекта, фотофиксация, составление дефектной ведомости',
  },
  {
    icon: Package,
    number: '02',
    title: 'Демонтаж',
    description: 'Бережное извлечение с маркировкой каждого элемента',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Реставрация',
    description: 'Восполнение утрат, подбор древесины, восстановление соединений',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Монтаж',
    description: 'Интеграция в проёмы, регулировка, финальная отделка',
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="decorative-line mx-auto mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-6">
            Этапы работы
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Работы могут выполняться как комплексно, так и по отдельным этапам в зависимости от задач проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-ivory-dark rounded-sm p-8 premium-border hover:border-gold/40 transition-all duration-500">
                <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-sm bg-gold border border-gold-dark font-serif text-sm font-medium text-midnight shadow-lg">
                  {step.number}
                </div>

                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl font-medium text-midnight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className="rounded-sm overflow-hidden shadow-2xl premium-border">
          <img 
            src="https://image.qwenlm.ai/generated-images/f1b42c25-cf7d-45de-809b-4168f57dfd97/_result.png"
            alt="Мастер работает отверткой"
            className="w-full h-96 object-cover premium-image"
          />
        </div>
      </div>
    </section>
  );
}
