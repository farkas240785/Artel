import { MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Реставрация оконных заполнений',
    address: 'наб. реки Мойки, д. 16',
    year: '2024',
    category: 'Окна',
    color: 'from-patina/20 to-ochre/20',
  },
  {
    id: 2,
    title: 'Восстановление входных дверей',
    address: 'Литейный пр., д. 9',
    year: '2024',
    category: 'Двери',
    color: 'from-ochre/20 to-patina/20',
  },
  {
    id: 3,
    title: 'Реставрация ворот и калиток',
    address: 'ул. Рубинштейна, д. 5',
    year: '2023',
    category: 'Ворота',
    color: 'from-patina-light/20 to-ochre-light/20',
  },
  {
    id: 4,
    title: 'Комплексная реставрация столярки',
    address: 'Казанская ул., д. 7',
    year: '2023',
    category: 'Комплекс',
    color: 'from-ochre-dark/20 to-patina-dark/20',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Примеры выполненных проектов на объектах культурного наследия
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='20' height='20' fill='none' stroke='%232d5a3d' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-ochre-light transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={14} />
                  {project.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
