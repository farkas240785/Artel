import { Award, Users, BookOpen, FileCheck } from 'lucide-react';

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Документы и лицензии
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Все работы выполняются на основании действующей лицензии Минкульта РФ
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-patina/10">
              <Award className="w-8 h-8 text-patina" />
            </div>
            <h3 className="font-serif text-xl font-bold text-graphite mb-2">
              Лицензия Минкульта
            </h3>
            <p className="text-sm text-graphite-light">
              Действующая лицензия на работы по сохранению ОКН
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-patina/10">
              <Users className="w-8 h-8 text-patina" />
            </div>
            <h3 className="font-serif text-xl font-bold text-graphite mb-2">
              Аттестаты специалистов
            </h3>
            <p className="text-sm text-graphite-light">
              Аттестаты реставраторов, допущенных к работам на ОКН
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-patina/10">
              <BookOpen className="w-8 h-8 text-patina" />
            </div>
            <h3 className="font-serif text-xl font-bold text-graphite mb-2">
              Журнал работ (КС-6)
            </h3>
            <p className="text-sm text-graphite-light">
              Пример ведения журнала производства работ
            </p>
          </div>
        </div>

        {/* License highlight */}
        <div className="bg-gradient-to-br from-patina to-patina-dark rounded-2xl p-10 text-center text-white">
          <FileCheck className="w-12 h-12 mx-auto mb-4 text-ochre-light" />
          <h3 className="font-serif text-2xl font-bold mb-3">
            Лицензия Министерства культуры РФ
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Гарантирует профессиональное выполнение реставрационных работ 
            в соответствии с федеральным законодательством
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-white text-patina-dark font-semibold rounded-md hover:bg-paper transition-colors"
          >
            Запросить копию лицензии
          </a>
        </div>
      </div>
    </section>
  );
}
