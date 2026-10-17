import { MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Реставрация оконных заполнений',
    address: 'наб. реки Мойки, д. 16',
    year: '2024',
    category: 'Окна',
    image: 'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
  },
  {
    id: 2,
    title: 'Восстановление входных дверей',
    address: 'Литейный пр., д. 9',
    year: '2024',
    category: 'Двери',
    image: 'https://image.qwenlm.ai/generated-images/2de8c5e8-7d6e-45eb-8ae5-07859e2786d2/_result.png',
  },
  {
    id: 3,
    title: 'Реставрация ворот и калиток',
    address: 'ул. Рубинштейна, д. 5',
    year: '2023',
    category: 'Ворота',
    image: 'https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png',
  },
  {
    id: 4,
    title: 'Комплексная реставрация конструкций',
    address: 'Казанская ул., д. 7',
    year: '2023',
    category: 'Комплекс',
    image: 'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Примеры выполненных проектов на объектах культурного наследия
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
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
