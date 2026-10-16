export default function SiteMap() {
  return (
    <section id="sitemap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Структура сайта
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Древовидная организация контента для удобной навигации
          </p>
        </div>

        {/* Tree Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-paper rounded-2xl p-8 border border-gray-100">
            {/* Root Node */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-br from-patina to-patina-dark text-white px-8 py-4 rounded-xl shadow-lg">
                <div className="font-serif text-xl font-bold">Главная страница</div>
                <div className="text-sm text-white/80 mt-1">Артель «Исторический Облик»</div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-ochre/30" />
            </div>

            {/* First Level Branches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'О нас', items: ['Миссия', 'Принципы'] },
                { title: 'Услуги', items: ['Демонтаж', 'Реставрация', 'Монтаж'] },
                { title: 'Портфолио', items: ['Проекты'] },
                { title: 'Контакты', items: ['Информация', 'Заявка'] },
              ].map((branch, idx) => (
                <div key={idx} className="relative">
                  {/* Connection to parent */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-ochre/30" />
                  
                  <div className="bg-white rounded-xl p-4 border-2 border-ochre/30 hover:border-ochre transition-colors">
                    <div className="font-serif text-lg font-bold text-graphite mb-3 text-center">
                      {branch.title}
                    </div>
                    <div className="space-y-2">
                      {branch.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="text-sm text-graphite-light text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Level - Additional branches */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { title: 'Документы', items: ['Лицензия', 'Аттестаты'] },
                { title: 'Реквизиты', items: ['Банковские данные'] },
                { title: 'Процесс', items: ['Этапы работы'] },
              ].map((branch, idx) => (
                <div key={idx} className="bg-paper-dark/30 rounded-xl p-4 border border-gray-200">
                  <div className="font-semibold text-graphite mb-2 text-center">
                    {branch.title}
                  </div>
                  <div className="space-y-1">
                    {branch.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="text-xs text-graphite-light text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-patina to-patina-dark rounded" />
              <span className="text-graphite-light">Корневой узел</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-ochre rounded" />
              <span className="text-graphite-light">Основные разделы</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-paper-dark/30 border border-gray-200 rounded" />
              <span className="text-graphite-light">Дополнительные разделы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
