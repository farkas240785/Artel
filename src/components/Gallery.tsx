const galleryItems = [
  {
    title: 'Историческое окно',
    subtitle: 'XVIII век',
    gradient: 'from-amber-800/30 to-amber-600/30',
    pattern: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <rect x="20" y="20" width="160" height="160" rx="4" stroke="currentColor" strokeWidth="2" className="text-amber-900/40" />
        <rect x="30" y="30" width="65" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-amber-800/50" />
        <rect x="105" y="30" width="65" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-amber-800/50" />
        <rect x="30" y="110" width="65" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-amber-800/50" />
        <rect x="105" y="110" width="65" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-amber-800/50" />
        <path d="M30 30 Q62 15 95 30" stroke="currentColor" strokeWidth="1.5" className="text-amber-700/40" />
        <path d="M105 30 Q137 15 170 30" stroke="currentColor" strokeWidth="1.5" className="text-amber-700/40" />
        <line x1="62" y1="30" x2="62" y2="100" stroke="currentColor" strokeWidth="0.8" className="text-amber-900/30" />
        <line x1="30" y1="65" x2="95" y2="65" stroke="currentColor" strokeWidth="0.8" className="text-amber-900/30" />
        <line x1="137" y1="30" x2="137" y2="100" stroke="currentColor" strokeWidth="0.8" className="text-amber-900/30" />
        <line x1="105" y1="65" x2="170" y2="65" stroke="currentColor" strokeWidth="0.8" className="text-amber-900/30" />
      </svg>
    ),
  },
  {
    title: 'Резная дверь',
    subtitle: 'Филенчатая конструкция',
    gradient: 'from-patina/30 to-patina-light/30',
    pattern: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <rect x="40" y="10" width="120" height="180" rx="3" stroke="currentColor" strokeWidth="2" className="text-patina-dark/40" />
        <rect x="50" y="20" width="100" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina/50" />
        <rect x="50" y="80" width="100" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina/50" />
        <rect x="50" y="130" width="100" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-patina/50" />
        <circle cx="140" cy="100" r="4" fill="currentColor" className="text-ochre/60" />
        <line x1="100" y1="20" x2="100" y2="70" stroke="currentColor" strokeWidth="0.8" className="text-patina/30" />
        <line x1="100" y1="80" x2="100" y2="120" stroke="currentColor" strokeWidth="0.8" className="text-patina/30" />
        <line x1="100" y1="130" x2="100" y2="180" stroke="currentColor" strokeWidth="0.8" className="text-patina/30" />
      </svg>
    ),
  },
  {
    title: 'Фасад здания',
    subtitle: 'Мойка, 16',
    gradient: 'from-stone-700/30 to-stone-500/30',
    pattern: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        <rect x="10" y="30" width="180" height="150" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-stone-800/40" />
        <line x1="10" y1="30" x2="190" y2="30" strokeWidth="2" className="text-stone-700/50" />
        <line x1="10" y1="25" x2="190" y2="25" strokeWidth="1" className="text-stone-600/30" />
        {/* Windows row 1 */}
        <rect x="25" y="45" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="70" y="45" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="115" y="45" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="160" y="45" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        {/* Windows row 2 */}
        <rect x="25" y="100" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="70" y="100" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="115" y="100" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        <rect x="160" y="100" width="30" height="40" rx="1" stroke="currentColor" strokeWidth="1" className="text-stone-700/50" />
        {/* Door */}
        <rect x="80" y="150" width="40" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-stone-700/50" />
      </svg>
    ),
  },
  {
    title: 'Инструменты мастера',
    subtitle: 'Традиционные технологии',
    gradient: 'from-ochre/30 to-ochre-dark/30',
    pattern: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Chisel */}
        <rect x="30" y="40" width="8" height="80" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre-dark/50" />
        <polygon points="30,120 38,120 34,135" stroke="currentColor" strokeWidth="1" className="text-ochre-dark/50" />
        {/* Plane */}
        <rect x="70" y="60" width="60" height="25" rx="3" stroke="currentColor" strokeWidth="1.5" className="text-ochre-dark/50" />
        <rect x="85" y="50" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1" className="text-ochre-dark/40" />
        <line x1="70" y1="85" x2="130" y2="85" strokeWidth="2" className="text-ochre-dark/30" />
        {/* Hammer */}
        <rect x="150" y="50" width="6" height="70" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre-dark/50" />
        <rect x="140" y="40" width="26" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-ochre-dark/50" />
        {/* Ruler */}
        <rect x="40" y="150" width="120" height="8" rx="1" stroke="currentColor" strokeWidth="1" className="text-ochre-dark/40" />
        <line x1="50" y1="150" x2="50" y2="158" strokeWidth="0.5" className="text-ochre-dark/30" />
        <line x1="60" y1="150" x2="60" y2="155" strokeWidth="0.5" className="text-ochre-dark/30" />
        <line x1="70" y1="150" x2="70" y2="158" strokeWidth="0.5" className="text-ochre-dark/30" />
        <line x1="80" y1="150" x2="80" y2="155" strokeWidth="0.5" className="text-ochre-dark/30" />
        <line x1="90" y1="150" x2="90" y2="158" strokeWidth="0.5" className="text-ochre-dark/30" />
      </svg>
    ),
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Детали имеют значение
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Каждый элемент — часть истории, которую мы бережно сохраняем
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} cursor-pointer hover:shadow-xl transition-all duration-500`}
            >
              {/* Pattern */}
              <div className="absolute inset-0 p-6 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500">
                {item.pattern}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">
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
