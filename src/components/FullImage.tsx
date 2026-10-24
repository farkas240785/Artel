export default function FullImage() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img 
        src="https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png"
        alt="Исторический двор Санкт-Петербурга"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/50 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="decorative-line mb-6" style={{ background: 'linear-gradient(90deg, transparent, #c9a961, transparent)' }} />
            <h2 className="font-serif text-5xl sm:text-6xl font-light text-white mb-6 leading-tight">
              Сохраняем историю<br />
              <span className="text-gold-light">Санкт-Петербурга</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-light">
              Каждый объект культурного наследия — это часть нашего общего наследия. 
              Мы возвращаем историческим зданиям их первоначальный облик.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
