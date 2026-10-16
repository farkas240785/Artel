import { useState } from 'react';
import { FileText, X, Award, Users, BookOpen } from 'lucide-react';

const documents = [
  {
    id: 1,
    title: 'Лицензия Минкульта РФ',
    description: 'Лицензия на проведение работ по сохранению объектов культурного наследия',
    icon: Award,
    type: 'Лицензия',
  },
  {
    id: 2,
    title: 'Аттестаты специалистов',
    description: 'Аттестаты реставраторов, допущенных к проведению работ на ОКН',
    icon: Users,
    type: 'Аттестаты',
  },
  {
    id: 3,
    title: 'Журнал работ (форма КС-6)',
    description: 'Пример ведения журнала производства работ по сохранению ОКН',
    icon: BookOpen,
    type: 'Документация',
  },
];

export default function Documents() {
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);

  return (
    <section id="documents" className="py-24 bg-paper-dark/30 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="decorative-line max-w-md mx-auto mb-6">
            <span className="font-text text-sm uppercase tracking-[0.3em] text-ochre">Подтверждение квалификации</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-patina-dark mb-6">
            Документы и лицензии
          </h2>
          <p className="font-body text-xl text-graphite-light max-w-3xl mx-auto leading-relaxed">
            Все работы выполняются на основании действующей лицензии Министерства культуры РФ 
            и в соответствии с требованиями законодательства
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc.id)}
              className="bg-paper border border-ochre/20 rounded-sm p-8 cursor-pointer hover:border-ochre/50 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-patina/10 border border-patina/20 group-hover:bg-patina/20 transition-colors duration-300">
                <doc.icon className="w-10 h-10 text-patina" />
              </div>
              <h3 className="font-serif text-xl font-bold text-patina-dark mb-3">
                {doc.title}
              </h3>
              <p className="font-text text-graphite-light text-sm leading-relaxed mb-4">
                {doc.description}
              </p>
              <span className="inline-flex items-center gap-2 font-text text-sm text-ochre uppercase tracking-wider group-hover:text-patina transition-colors">
                <FileText size={16} />
                Подробнее
              </span>
            </div>
          ))}
        </div>

        {/* License highlight */}
        <div className="bg-patina/5 border-2 border-patina/20 rounded-sm p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-patina mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-patina-dark mb-4">
              Лицензия Министерства культуры Российской Федерации
            </h3>
            <p className="font-text text-graphite leading-relaxed mb-6">
              Артель «Исторический Облик» (ИП Солонец В.В.) имеет действующую лицензию 
              Минкульта РФ на проведение работ по сохранению объектов культурного наследия. 
              Это гарантирует профессиональное выполнение всех реставрационных работ 
              в соответствии с федеральным законодательством.
            </p>
            <div className="inline-flex items-center gap-3 bg-paper border border-ochre/30 rounded-sm px-6 py-3">
              <FileText className="text-ochre" size={20} />
              <span className="font-text text-patina-dark font-medium">
                Для получения копии лицензии свяжитесь с нами
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-dark/80 backdrop-blur-sm">
          <div className="bg-paper rounded-sm max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-2 text-graphite-light hover:text-patina transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              {(() => {
                const doc = documents.find(d => d.id === selectedDoc);
                if (!doc) return null;
                return (
                  <>
                    <doc.icon className="w-16 h-16 text-patina mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-patina-dark mb-4">
                      {doc.title}
                    </h3>
                    <p className="font-text text-graphite leading-relaxed mb-6">
                      {doc.description}
                    </p>
                    <div className="bg-paper-dark border border-ochre/20 rounded-sm p-6 mb-6">
                      <p className="font-text text-sm text-graphite-light italic">
                        Документ доступен для ознакомления по запросу. 
                        Свяжитесь с нами для получения копии.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setSelectedDoc(null)}
                      className="inline-block px-6 py-3 bg-patina text-paper font-text uppercase tracking-wider rounded-sm hover:bg-patina-dark transition-colors"
                    >
                      Связаться с нами
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
