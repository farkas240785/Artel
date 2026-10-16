import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '', consent: false });
  };

  return (
    <section id="contact" className="py-24 bg-paper paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="decorative-line max-w-md mx-auto mb-6">
            <span className="font-text text-sm uppercase tracking-[0.3em] text-ochre">Свяжитесь с нами</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-patina-dark mb-6">
            Контакты
          </h2>
          <p className="font-body text-xl text-graphite-light max-w-3xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект реставрации. Свяжитесь с нами 
            для консультации и расчёта стоимости работ.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-patina-dark mb-8">
              Наши координаты
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-patina/10 flex-shrink-0">
                  <Phone className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <p className="font-text text-sm uppercase tracking-wider text-ochre mb-1">Телефон</p>
                  <a href="tel:+79001234567" className="font-text text-lg text-patina-dark hover:text-patina transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-patina/10 flex-shrink-0">
                  <Mail className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <p className="font-text text-sm uppercase tracking-wider text-ochre mb-1">Электронная почта</p>
                  <a href="mailto:info@ist-oblik.ru" className="font-text text-lg text-patina-dark hover:text-patina transition-colors">
                    info@ist-oblik.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-patina/10 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <p className="font-text text-sm uppercase tracking-wider text-ochre mb-1">Адрес мастерской</p>
                  <p className="font-text text-lg text-patina-dark">
                    г. Санкт-Петербург
                  </p>
                  <p className="font-text text-graphite-light">
                    Точный адрес сообщается при согласовании визита
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-patina/10 flex-shrink-0">
                  <Clock className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <p className="font-text text-sm uppercase tracking-wider text-ochre mb-1">Режим работы</p>
                  <p className="font-text text-lg text-patina-dark">
                    Пн–Пт: 9:00–18:00
                  </p>
                  <p className="font-text text-graphite-light">
                    Сб–Вс: по договорённости
                  </p>
                </div>
              </div>
            </div>

            {/* Legal info */}
            <div className="bg-paper-dark/50 border border-ochre/20 rounded-sm p-6">
              <h4 className="font-serif text-lg font-bold text-patina-dark mb-3">
                Юридическая информация
              </h4>
              <div className="space-y-2 font-text text-sm text-graphite-light">
                <p>ИП Солонец Виталий Васильевич</p>
                <p>ИНН: 616619729113</p>
                <p>ОГРНИП: 323237500412353</p>
                <p>р/с в ООО «ОЗОН Банк»</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-paper-dark/30 border border-ochre/20 rounded-sm p-8">
              <h3 className="font-serif text-2xl font-bold text-patina-dark mb-6">
                Оставить заявку
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-patina mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-bold text-patina-dark mb-2">
                    Заявка отправлена!
                  </h4>
                  <p className="font-text text-graphite-light">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-text text-sm uppercase tracking-wider text-graphite mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-paper border border-paper-darker rounded-sm font-text text-graphite focus:border-patina focus:outline-none transition-colors"
                      placeholder="Иван Иванович"
                    />
                  </div>

                  <div>
                    <label className="block font-text text-sm uppercase tracking-wider text-graphite mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-paper border border-paper-darker rounded-sm font-text text-graphite focus:border-patina focus:outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block font-text text-sm uppercase tracking-wider text-graphite mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-paper border border-paper-darker rounded-sm font-text text-graphite focus:border-patina focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-text text-sm uppercase tracking-wider text-graphite mb-2">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-paper border border-paper-darker rounded-sm font-text text-graphite focus:border-patina focus:outline-none transition-colors resize-none"
                      placeholder="Опишите ваш объект и необходимые работы..."
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-patina"
                    />
                    <label htmlFor="consent" className="font-text text-sm text-graphite-light leading-relaxed">
                      Я даю согласие на обработку персональных данных в соответствии с 
                      <span className="text-patina"> Федеральным законом №152-ФЗ</span> «О персональных данных»
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.consent}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-patina text-paper font-text text-base uppercase tracking-wider rounded-sm hover:bg-patina-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
