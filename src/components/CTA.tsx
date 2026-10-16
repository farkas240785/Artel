import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-patina via-patina-dark to-graphite-dark relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Нужна реставрация<br />исторической столярки?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Бесплатная консультация. Оценим состояние, предложим технологию, 
          рассчитаем стоимость.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-patina-dark font-semibold rounded-md hover:bg-paper transition-colors shadow-lg"
          >
            Оставить заявку
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+79001234567"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
