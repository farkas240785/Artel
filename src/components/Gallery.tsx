const galleryItems = [
  {
    title: 'Историческое окно',
    subtitle: 'XVIII век',
    image: 'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
  },
  {
    title: 'Резная дверь',
    subtitle: 'Филенчатая конструкция',
    image: 'https://image.qwenlm.ai/generated-images/2de8c5e8-7d6e-45eb-8ae5-07859e2786d2/_result.png',
  },
  {
    title: 'Фасад здания',
    subtitle: 'Мойка, 16',
    image: 'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
  },
  {
    title: 'Мастерская',
    subtitle: 'Традиционные технологии',
    image: 'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Детали имеют значение
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Каждый элемент — часть истории, которую мы бережно сохраняем
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
