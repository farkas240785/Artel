import { Leaf, Eye, RotateCcw, TreePine } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'Сохранение подлинности',
    description: 'Максимальное сохранение аутентичных элементов. Реставрация, а не замена.',
  },
  {
    icon: TreePine,
    title: 'Аутентичные материалы',
    description: 'Подбор древесины аналогичных пород. Традиционные технологии обработки.',
  },
  {
    icon: RotateCcw,
    title: 'Обратимость вмешательств',
    description: 'Все применяемые материалы и технологии позволяют при необходимости обратить вмешательства.',
  },
  {
    icon: Leaf,
    title: 'Консервация',
    description: 'Приоритет консервации над восполнением. Каждый подлинный фрагмент ценен.',
  },
];

export default function Principles() {
  return (
    <section className="py-20 bg-patina/5 border-y border-patina/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-patina-dark mb-4">
            Наши принципы
          </h2>
          <p className="font-text text-graphite-light max-w-2xl mx-auto">
            Специализация — столярные заполнения (окна, двери, ворота) 
            и деревянные конструкции исторических зданий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-paper border-2 border-patina/20 group-hover:border-ochre/40 group-hover:bg-paper-dark transition-all duration-300">
                <principle.icon className="w-7 h-7 text-patina group-hover:text-ochre transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-patina-dark mb-2">
                {principle.title}
              </h3>
              <p className="font-text text-sm text-graphite-light leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
