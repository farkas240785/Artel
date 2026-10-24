import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProjects } from '../admin/storage';
import type { Project as AdminProject } from '../admin/types';

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

// Дефолтные проекты (используются если в localStorage нет проектов)
const defaultProjects: Project[] = [
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
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Загрузка проектов из localStorage
  useEffect(() => {
    const adminProjects = getProjects();
    if (adminProjects.length > 0) {
      // Преобразуем AdminProject в Project формат
      const convertedProjects: Project[] = adminProjects.map((p: AdminProject) => ({
        id: parseInt(p.id),
        title: p.title,
        address: p.address,
        year: p.year,
        category: p.category,
        description: p.description,
        before: p.beforeImages,
        after: p.afterImages,
      }));
      setProjects(convertedProjects);
    }
  }, []);

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
    <section id="portfolio" className="py-32 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="decorative-line mx-auto mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-6">
            Наши работы
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Примеры выполненных проектов на объектах культурного наследия. Нажмите на проект для просмотра галереи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="premium-card group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer premium-border"
            >
              <img 
                src={project.after[0]}
                alt={project.title}
                className="w-full h-full object-cover premium-image"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-sm text-xs font-medium text-gold-light tracking-wide">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-white/70 font-light">
                    <Calendar size={14} strokeWidth={1.5} />
                    {project.year}
                  </div>
                </div>
                <h3 className="font-serif text-3xl font-medium mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/70 font-light">
                  <MapPin size={14} strokeWidth={1.5} />
                  {project.address}
                </div>
                <div className="mt-4 text-sm text-gold-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light tracking-wide">
                  Нажмите для просмотра галереи →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-md overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div className="bg-ivory rounded-sm max-w-5xl w-full relative shadow-2xl premium-border">
              <button
                onClick={closeProject}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-sm bg-ivory hover:bg-ivory-dark transition-colors shadow-lg premium-border"
              >
                <X size={24} className="text-midnight" strokeWidth={1.5} />
              </button>

              <div className="p-10 border-b border-gold/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-sm text-xs font-medium text-gold tracking-wide">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-charcoal-light font-light">
                    <Calendar size={14} strokeWidth={1.5} />
                    {selectedProject.year}
                  </div>
                </div>
                <h3 className="font-serif text-4xl font-medium text-midnight mb-3">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-charcoal-light mb-5 font-light">
                  <MapPin size={14} strokeWidth={1.5} />
                  {selectedProject.address}
                </div>
                <p className="text-charcoal-light leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex border-b border-gold/10">
                <button
                  onClick={() => {
                    setActiveTab('before');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-5 font-medium tracking-wide transition-all duration-300 ${
                    activeTab === 'before'
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-charcoal-light hover:text-midnight'
                  }`}
                >
                  Было ({selectedProject.before.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('after');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-5 font-medium tracking-wide transition-all duration-300 ${
                    activeTab === 'after'
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-charcoal-light hover:text-midnight'
                  }`}
                >
                  Стало ({selectedProject.after.length})
                </button>
              </div>

              <div className="p-10">
                <div className="relative">
                  <img
                    src={activeTab === 'before' ? selectedProject.before[currentImageIndex] : selectedProject.after[currentImageIndex]}
                    alt={`${activeTab === 'before' ? 'До' : 'После'} реставрации`}
                    className="w-full h-[500px] object-cover rounded-sm"
                  />

                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-sm bg-ivory/95 backdrop-blur-sm hover:bg-ivory transition-colors shadow-lg premium-border"
                    >
                      <ChevronLeft size={28} className="text-midnight" strokeWidth={1.5} />
                    </button>
                  )}
                  {currentImageIndex < (activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length) - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-sm bg-ivory/95 backdrop-blur-sm hover:bg-ivory transition-colors shadow-lg premium-border"
                    >
                      <ChevronRight size={28} className="text-midnight" strokeWidth={1.5} />
                    </button>
                  )}

                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-midnight/80 backdrop-blur-sm rounded-sm text-white text-sm font-light tracking-wide">
                    {currentImageIndex + 1} / {activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-4 gap-6">
                  {(activeTab === 'before' ? selectedProject.before : selectedProject.after).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                        currentImageIndex === idx
                          ? 'border-gold shadow-lg'
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
