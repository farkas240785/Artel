import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  address: string;
  year: string;
  category: string;
  description: string;
  before: string[];
  after: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Реставрация оконных заполнений',
    address: 'наб. реки Мойки, д. 16',
    year: '2024',
    category: 'Окна',
    description: 'Комплексная реставрация исторических оконных блоков XVIII века. Восстановление утраченных элементов методом дублирования, подбор древесины аналогичной породы, консервация подлинных фрагментов.',
    before: [
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
    ],
  },
  {
    id: 2,
    title: 'Восстановление входных дверей',
    address: 'Литейный пр., д. 9',
    year: '2024',
    category: 'Двери',
    description: 'Реставрация исторической филенчатой двери с восстановлением утраченных декоративных элементов. Сохранение подлинной фурнитуры, подбор аналогичной древесины для восполнения утрат.',
    before: [
      'https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png',
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/2de8c5e8-7d6e-45eb-8ae5-07859e2786d2/_result.png',
      'https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png',
    ],
  },
  {
    id: 3,
    title: 'Реставрация ворот и калиток',
    address: 'ул. Рубинштейна, д. 5',
    year: '2023',
    category: 'Ворота',
    description: 'Восстановление исторических ворот с коваными элементами. Бережный демонтаж, реставрация каркаса, восполнение утраченных декоративных накладок, обратный монтаж с регулировкой.',
    before: [
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
      'https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png',
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
    ],
  },
  {
    id: 4,
    title: 'Комплексная реставрация конструкций',
    address: 'Казанская ул., д. 7',
    year: '2023',
    category: 'Комплекс',
    description: 'Комплексная реставрация исторических деревянных конструкций: окна, двери, ворота. Полный цикл работ от демонтажа до монтажа с применением традиционных технологий и аутентичных материалов.',
    before: [
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
      'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
    ],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab('before');
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    const images = activeTab === 'before' ? selectedProject?.before : selectedProject?.after;
    if (images && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
            Примеры выполненных проектов на объектах культурного наследия. Нажмите на проект для просмотра галереи.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img 
                src={project.after[0]}
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
                <div className="mt-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  Нажмите для просмотра галереи →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div className="bg-white rounded-2xl max-w-5xl w-full relative shadow-2xl">
              {/* Close button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
              >
                <X size={24} className="text-graphite" />
              </button>

              {/* Project Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-patina/10 text-patina rounded-full text-xs font-medium">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-graphite-light">
                    <Calendar size={14} />
                    {selectedProject.year}
                  </div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-graphite mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-graphite-light mb-4">
                  <MapPin size={14} />
                  {selectedProject.address}
                </div>
                <p className="text-graphite-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => {
                    setActiveTab('before');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-4 font-semibold transition-colors ${
                    activeTab === 'before'
                      ? 'text-patina border-b-2 border-patina'
                      : 'text-graphite-light hover:text-graphite'
                  }`}
                >
                  Было ({selectedProject.before.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('after');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-4 font-semibold transition-colors ${
                    activeTab === 'after'
                      ? 'text-patina border-b-2 border-patina'
                      : 'text-graphite-light hover:text-graphite'
                  }`}
                >
                  Стало ({selectedProject.after.length})
                </button>
              </div>

              {/* Gallery */}
              <div className="p-8">
                <div className="relative">
                  <img
                    src={activeTab === 'before' ? selectedProject.before[currentImageIndex] : selectedProject.after[currentImageIndex]}
                    alt={`${activeTab === 'before' ? 'До' : 'После'} реставрации`}
                    className="w-full h-[500px] object-cover rounded-xl"
                  />

                  {/* Navigation arrows */}
                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronLeft size={24} className="text-graphite" />
                    </button>
                  )}
                  {currentImageIndex < (activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length) - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronRight size={24} className="text-graphite" />
                    </button>
                  )}

                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-6 grid grid-cols-4 gap-4">
                  {(activeTab === 'before' ? selectedProject.before : selectedProject.after).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx
                          ? 'border-patina shadow-lg'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
