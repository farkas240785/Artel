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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Контакты
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчёта стоимости
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-10">
              <a href="tel:+79001234567" className="flex items-center gap-4 p-4 bg-paper rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-patina/10">
                  <Phone className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <div className="text-xs text-graphite-light uppercase tracking-wider mb-1">Телефон</div>
                  <div className="text-lg font-semibold text-graphite">+7 (900) 123-45-67</div>
                </div>
              </a>

              <a href="mailto:info@ist-oblik.ru" className="flex items-center gap-4 p-4 bg-paper rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-patina/10">
                  <Mail className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <div className="text-xs text-graphite-light uppercase tracking-wider mb-1">Email</div>
                  <div className="text-lg font-semibold text-graphite">info@ist-oblik.ru</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-paper rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-patina/10">
                  <MapPin className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <div className="text-xs text-graphite-light uppercase tracking-wider mb-1">Адрес офиса</div>
                  <div className="text-lg font-semibold text-graphite">г. Санкт-Петербург</div>
                  <div className="text-sm text-graphite-light">пр-кт Лахтинский, д. 129А, помещение 27.1</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-paper rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-patina/10">
                  <Clock className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <div className="text-xs text-graphite-light uppercase tracking-wider mb-1">Режим работы</div>
                  <div className="text-lg font-semibold text-graphite">Пн–Пт: 9:00–18:00</div>
                </div>
              </div>
            </div>

            <div className="bg-paper rounded-xl p-6">
              <h4 className="font-semibold text-graphite mb-3">Юридическая информация</h4>
              <div className="space-y-1 text-sm text-graphite-light">
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
                className="inline-block mt-3 text-sm text-patina hover:text-patina-dark font-medium transition-colors"
              >
                Все реквизиты →
              </a>
            </div>
          </div>

          <div className="bg-paper rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-graphite mb-6">
              Оставить заявку
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-patina mx-auto mb-4" />
                <h4 className="font-serif text-xl font-bold text-graphite mb-2">
                  Заявка отправлена!
                </h4>
                <p className="text-graphite-light">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-patina focus:ring-2 focus:ring-patina/20 outline-none transition-all"
                    placeholder="Иван Иванович"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-patina focus:ring-2 focus:ring-patina/20 outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-patina focus:ring-2 focus:ring-patina/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-patina focus:ring-2 focus:ring-patina/20 outline-none transition-all resize-none"
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
                    className="mt-1 w-4 h-4 accent-patina"
                  />
                  <label htmlFor="consent" className="text-sm text-graphite-light leading-relaxed">
                    Согласие на обработку персональных данных (152-ФЗ)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.consent}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-patina text-white font-semibold rounded-lg hover:bg-patina-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
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
