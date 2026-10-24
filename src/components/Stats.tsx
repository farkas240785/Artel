const stats = [
  {
    number: '50+',
    label: 'Объектов реставрации',
    description: 'Окна, двери, ворота',
  },
  {
    number: '15',
    label: 'Лет опыта',
    description: 'В реставрации',
  },
  {
    number: '100%',
    label: 'Соответствие ГОСТ',
    description: 'Р 55567',
  },
  {
    number: '24/7',
    label: 'Поддержка',
    description: 'Консультации',
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23c9a961' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="font-serif text-6xl sm:text-7xl font-light text-gold mb-3 group-hover:text-gold-light transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-white mb-2 tracking-wide">
                {stat.label}
              </div>
              <div className="text-sm text-white/50 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
