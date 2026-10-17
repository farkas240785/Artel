import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <rect x="4" y="2" width="32" height="36" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-ochre" />
                <rect x="8" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-white/60" />
                <rect x="22" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-white/60" />
                <rect x="8" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-white/60" />
                <rect x="22" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-white/60" />
              </svg>
              <div>
                <div className="font-serif text-lg font-semibold leading-none">
                  Артель реставрации и монтажа
                </div>
                <div className="text-xs text-white/60 tracking-wider uppercase mt-1">
                  «Исторический Облик»
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Артель реставрации и монтажа «Исторический Облик». Реставрация исторической столярки на объектах культурного наследия.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#about', label: 'О нас' },
                { href: '#services', label: 'Услуги' },
                { href: '#portfolio', label: 'Работы' },
                { href: '#documents', label: 'Документы' },
                { href: '#contact', label: 'Контакты' },
                { href: '#requisites', label: 'Реквизиты' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-ochre transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Демонтаж столярки</li>
              <li>Реставрация окон</li>
              <li>Восстановление дверей</li>
              <li>Монтаж элементов</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <div className="space-y-3">
              <a href="tel:+79001234567" className="flex items-center gap-2 text-sm text-white/60 hover:text-ochre transition-colors">
                <Phone size={14} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@ist-oblik.ru" className="flex items-center gap-2 text-sm text-white/60 hover:text-ochre transition-colors">
                <Mail size={14} />
                info@ist-oblik.ru
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>г. Санкт-Петербург,<br />пр-кт Лахтинский, д. 129А</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs text-white/40">
              © {currentYear} Артель реставрации и монтажа «Исторический Облик». Все права защищены.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <p>ИП Солонец Виталий Васильевич | ИНН 616619729113 | ОГРНИП 323237500412353</p>
              <p>р/с 40802810200000076978 | ООО "ОЗОН Банк" | БИК 044525068</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
