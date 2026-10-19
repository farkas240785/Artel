export default function FullImage() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
        alt="Исторический двор Санкт-Петербурга"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="decorative-line mb-4" style={{ background: 'linear-gradient(90deg, #e8b84a, transparent)' }} />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Сохраняем историю<br />Санкт-Петербурга
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Каждый объект культурного наследия — это часть нашего общего наследия. 
              Мы возвращаем историческим зданиям их первоначальный облик.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
