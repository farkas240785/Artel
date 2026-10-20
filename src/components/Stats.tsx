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
    <section className="py-20 bg-gradient-to-br from-patina via-patina-dark to-graphite-dark relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-ochre-light mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
