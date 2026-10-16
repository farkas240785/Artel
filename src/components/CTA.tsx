import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-patina relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-paper" />
            <rect x="20" y="20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-paper" />
          </pattern>
          <rect width="200" height="200" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-paper mb-6">
          Нужна реставрация исторической столярки?
        </h2>
        <p className="font-body text-xl text-paper/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Свяжитесь с нами для бесплатной консультации. Оценим состояние элементов, 
          предложим технологию восстановления и рассчитаем стоимость работ.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ochre text-graphite-dark font-text text-base uppercase tracking-wider rounded-sm hover:bg-ochre-light transition-all duration-300 shadow-lg"
          >
            Оставить заявку
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+79001234567"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-paper/40 text-paper font-text text-base uppercase tracking-wider rounded-sm hover:bg-paper/10 transition-all duration-300"
          >
            <Phone size={18} />
            Позвонить
          </a>
        </div>

        <p className="font-text text-sm text-paper/50 mt-8">
          Работаем на объектах культурного наследия Санкт-Петербурга и Ленинградской области
        </p>
      </div>
    </section>
  );
}
