import { useState } from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Реставрация оконных заполнений',
    address: 'наб. реки Мойки, д. 16',
    status: 'Объект культурного наследия федерального значения',
    year: '2024',
    works: [
      'Демонтаж 24 оконных блоков XVIII века',
      'Реставрация дублированием утраченных фрамуг',
      'Восстановление profiliрованных переплётов из сосны',
      'Обратный монтаж с регулировкой притворов',
    ],
    category: 'Окна',
  },
  {
    id: 2,
    title: 'Восстановление входных дверей',
    address: 'Литейный пр., д. 9',
    status: 'Выявленный объект культурного наследия',
    year: '2024',
    works: [
      'Консервация подлинных дверных полотен',
      'Восполнение утраченных филенок методом дублирования',
      'Реставрация дверных приборов (ручки, петли)',
      'Установка по историческим чертежам',
    ],
    category: 'Двери',
  },
  {
    id: 3,
    title: 'Реставрация ворот и калиток',
    address: 'ул. Рубинштейна, д. 5',
    status: 'Объект культурного наследия регионального значения',
    year: '2023',
    works: [
      'Бережный демонтаж воротных створок',
      'Восстановление каркасной конструкции ворот',
      'Реставрация декоративных накладок',
      'Монтаж с сохранением исторической фурнитуры',
    ],
    category: 'Ворота',
  },
  {
    id: 4,
    title: 'Комплексная реставрация столярки',
    address: 'Казанская ул., д. 7',
    status: 'Объект культурного наследия федерального значения',
    year: '2023',
    works: [
      'Демонтаж и маркировка 36 оконных блоков',
      'Реставрация коробок и переплётов',
      'Восстановление ставней с подбором аналогичной древесины',
      'Монтаж с применением обратимых герметиков',
    ],
    category: 'Комплекс',
  },
];

const categories = ['Все', 'Окна', 'Двери', 'Ворота', 'Комплекс'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProjects = activeCategory === 'Все'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-paper paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="decorative-line max-w-md mx-auto mb-6">
            <span className="font-text text-sm uppercase tracking-[0.3em] text-ochre">Наши работы</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-patina-dark mb-6">
            Портфолио
          </h2>
          <p className="font-body text-xl text-graphite-light max-w-3xl mx-auto leading-relaxed">
            Примеры выполненных работ на объектах культурного наследия Санкт-Петербурга 
            с описанием применённых технологий восстановления
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 font-text text-sm uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-patina text-paper border-patina'
                  : 'bg-transparent text-graphite border-paper-darker hover:border-patina hover:text-patina'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-paper-dark/50 border border-ochre/20 rounded-sm overflow-hidden hover:border-ochre/40 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="bg-patina/5 border-b border-ochre/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-text text-xs uppercase tracking-wider text-ochre bg-ochre/10 px-3 py-1 rounded-sm">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-graphite-light">
                    <Calendar size={14} />
                    <span className="font-text text-sm">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-patina-dark mb-3 group-hover:text-patina transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-ochre mt-0.5 flex-shrink-0" />
                  <span className="font-text text-graphite">{project.address}</span>
                </div>
                <p className="font-text text-sm text-graphite-light mb-5 italic">
                  {project.status}
                </p>

                {/* Works list */}
                <div className="space-y-2">
                  <p className="font-text text-sm uppercase tracking-wider text-patina font-medium mb-3">
                    Выполненные работы:
                  </p>
                  {project.works.map((work, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-patina mt-0.5 flex-shrink-0" />
                      <span className="font-text text-sm text-graphite">{work}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
