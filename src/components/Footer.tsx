import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-dark text-paper-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="4" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" className="text-ochre" />
                <rect x="12" y="8" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-paper/60" />
                <rect x="26" y="8" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-paper/60" />
                <rect x="12" y="26" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-paper/60" />
                <rect x="26" y="26" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-paper/60" />
              </svg>
              <div>
                <div className="font-serif text-lg font-bold text-paper leading-tight">
                  Исторический Облик
                </div>
                <div className="text-xs text-paper-dark tracking-wider uppercase">
                  Артель реставрации
                </div>
              </div>
            </div>
            <p className="font-text text-sm text-paper-dark leading-relaxed mt-4">
              Профессиональная реставрация, демонтаж и монтаж исторической столярки 
              на объектах культурного наследия Санкт-Петербурга.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-paper mb-4 uppercase tracking-wider">
              Навигация
            </h4>
            <nav className="space-y-2">
              {[
                { href: '#about', label: 'О нас' },
                { href: '#services', label: 'Услуги' },
                { href: '#portfolio', label: 'Портфолио' },
                { href: '#documents', label: 'Документы' },
                { href: '#contact', label: 'Контакты' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-text text-sm text-paper-dark hover:text-ochre transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-paper mb-4 uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-2 font-text text-sm text-paper-dark">
              <li>Демонтаж исторической столярки</li>
              <li>Реставрация оконных заполнений</li>
              <li>Восстановление дверей и ворот</li>
              <li>Монтаж отреставрированных элементов</li>
              <li>Консервация подлинных фрагментов</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-base font-bold text-paper mb-4 uppercase tracking-wider">
              Контакты
            </h4>
            <div className="space-y-3">
              <a href="tel:+79001234567" className="flex items-center gap-2 font-text text-sm text-paper-dark hover:text-ochre transition-colors">
                <Phone size={14} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@ist-oblik.ru" className="flex items-center gap-2 font-text text-sm text-paper-dark hover:text-ochre transition-colors">
                <Mail size={14} />
                info@ist-oblik.ru
              </a>
              <div className="flex items-start gap-2 font-text text-sm text-paper-dark">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>г. Санкт-Петербург</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-text text-xs text-paper-dark">
                © {currentYear} Артель «Исторический Облик». Все права защищены.
              </p>
            </div>
            <div className="text-center">
              <p className="font-text text-xs text-paper-dark/70">
                ИП Солонец Виталий Васильевич | ИНН 616619729113 | ОГРНИП 323237500412353
              </p>
              <p className="font-text text-xs text-paper-dark/70 mt-1">
                р/с в ООО «ОЗОН Банк»
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
