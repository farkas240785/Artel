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
    <section id="contact" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="decorative-line mx-auto mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-6">
            Контакты
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Свяжитесь с нами для консультации и расчёта стоимости
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 mb-12">
              <a href="tel:+79603008797" className="premium-card flex items-center gap-5 p-6 bg-ivory-dark rounded-sm premium-border">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20">
                  <Phone className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-silver uppercase tracking-[0.15em] mb-2 font-light">Телефон</div>
                  <div className="text-xl font-medium text-midnight">+7 (960) 300-87-97</div>
                </div>
              </a>

              <a href="mailto:info@ist-oblik.ru" className="premium-card flex items-center gap-5 p-6 bg-ivory-dark rounded-sm premium-border">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20">
                  <Mail className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-silver uppercase tracking-[0.15em] mb-2 font-light">Email</div>
                  <div className="text-xl font-medium text-midnight">info@ist-oblik.ru</div>
                </div>
              </a>

              <div className="premium-card flex items-center gap-5 p-6 bg-ivory-dark rounded-sm premium-border">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20">
                  <MapPin className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-silver uppercase tracking-[0.15em] mb-2 font-light">Адрес офиса</div>
                  <div className="text-xl font-medium text-midnight">г. Санкт-Петербург</div>
                  <div className="text-sm text-charcoal-light font-light mt-1">пр-кт Лахтинский, д. 129А, помещение 27.1</div>
                </div>
              </div>

              <div className="premium-card flex items-center gap-5 p-6 bg-ivory-dark rounded-sm premium-border">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20">
                  <Clock className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-silver uppercase tracking-[0.15em] mb-2 font-light">Режим работы</div>
                  <div className="text-xl font-medium text-midnight">Пн–Пт: 9:00–18:00</div>
                </div>
              </div>
            </div>

            <div className="bg-ivory-dark rounded-sm p-8 premium-border">
              <h4 className="font-serif text-2xl font-medium text-midnight mb-4">Юридическая информация</h4>
              <div className="space-y-2 text-sm text-charcoal-light font-light">
                <p>ИП Солонец Виталий Васильевич</p>
                <p>ИНН: 616619729113</p>
                <p>ОГРНИП: 323237500412353</p>
                <p>р/с: 40802810200000076978</p>
                <p>ООО "ОЗОН Банк"</p>
                <p>БИК: 044525068</p>
                <p>к/с: 30101810645374525068</p>
              </div>
              <a
                href="#requisites"
                className="inline-block mt-4 text-sm text-gold hover:text-gold-dark font-medium transition-colors tracking-wide"
              >
                Все реквизиты →
              </a>
            </div>
          </div>

          <div className="bg-ivory-dark rounded-sm p-10 premium-border">
            <h3 className="font-serif text-3xl font-medium text-midnight mb-8">
              Оставить заявку
            </h3>

            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" strokeWidth={1.5} />
                <h4 className="font-serif text-3xl font-medium text-midnight mb-3">
                  Заявка отправлена!
                </h4>
                <p className="text-charcoal-light font-light">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-midnight mb-3 tracking-wide">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-ivory border border-gold/20 rounded-sm focus:border-gold transition-all duration-300 font-light"
                    placeholder="Иван Иванович"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight mb-3 tracking-wide">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-ivory border border-gold/20 rounded-sm focus:border-gold transition-all duration-300 font-light"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight mb-3 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-ivory border border-gold/20 rounded-sm focus:border-gold transition-all duration-300 font-light"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight mb-3 tracking-wide">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-ivory border border-gold/20 rounded-sm focus:border-gold transition-all duration-300 resize-none font-light"
                    placeholder="Опишите ваш объект и необходимые работы..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-gold"
                  />
                  <label htmlFor="consent" className="text-sm text-charcoal-light leading-relaxed font-light">
                    Согласие на обработку персональных данных (152-ФЗ)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.consent}
                  className="premium-button w-full flex items-center justify-center gap-3 px-8 py-5 bg-gold text-midnight font-medium rounded-sm hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
                >
                  <Send size={18} strokeWidth={1.5} />
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
