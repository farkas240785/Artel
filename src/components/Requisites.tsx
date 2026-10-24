import { Building2, FileText, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const requisites = [
  { label: 'Наименование', value: 'Индивидуальный предприниматель Солонец Виталий Васильевич' },
  { label: 'ИНН', value: '616619729113' },
  { label: 'ОГРНИП', value: '323237500412353' },
  { label: 'Расчётный счёт', value: '40802810200000076978' },
  { label: 'Корр. счёт', value: '30101810645374525068' },
  { label: 'Банк', value: 'ООО "ОЗОН Банк"' },
  { label: 'БИК', value: '044525068' },
  { label: 'ИНН Банка', value: '9703077050' },
  { label: 'Юр. адрес банка', value: 'РФ, 123112, г. Москва, вн.тер.г. Муниципальный Округ Пресненский, Пресненская наб., дом 10, этаж 19' },
];

export default function Requisites() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="requisites" className="py-32 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="decorative-line mx-auto mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-midnight mb-6">
            Реквизиты
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Полные банковские реквизиты для заключения договоров и оплаты
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-ivory rounded-sm shadow-2xl premium-border overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-midnight to-midnight-light px-10 py-8 flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/30 backdrop-blur-sm">
                <Building2 className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-white mb-1">
                  ИП Солонец Виталий Васильевич
                </h3>
                <p className="text-gold-light text-sm font-light tracking-wide">
                  Артель реставрации и монтажа «Исторический Облик»
                </p>
              </div>
            </div>

            {/* Requisites List */}
            <div className="p-10">
              <div className="space-y-0 divide-y divide-gold/10">
                {requisites.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-6 py-5 group hover:bg-ivory-dark/50 -mx-4 px-4 rounded-sm transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-[0.15em] text-silver mb-2 font-light">
                        {item.label}
                      </div>
                      <div className="text-base text-midnight font-medium break-words">
                        {item.value}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="flex-shrink-0 p-3 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-gold/10 transition-all duration-300 premium-border"
                      title="Скопировать"
                    >
                      {copiedField === item.label ? (
                        <CheckCircle size={20} className="text-gold" strokeWidth={1.5} />
                      ) : (
                        <Copy size={20} className="text-silver hover:text-gold transition-colors" strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-ivory-dark border-t border-gold/10 px-10 py-6 flex items-center gap-4">
              <FileText size={18} className="text-gold flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-charcoal-light font-light">
                Для получения скана лицензии Минкульта РФ свяжитесь с нами по телефону или email
              </p>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-ivory rounded-sm p-7 premium-border">
              <div className="text-xs uppercase tracking-[0.15em] text-silver mb-3 font-light">
                Бренд
              </div>
              <div className="font-serif text-xl font-medium text-midnight">
                Артель реставрации и монтажа «Исторический Облик»
              </div>
              <div className="text-sm text-charcoal-light mt-2 font-light">
                Торговое наименование
              </div>
            </div>
            <div className="bg-ivory rounded-sm p-7 premium-border">
              <div className="text-xs uppercase tracking-[0.15em] text-silver mb-3 font-light">
                Юридическое лицо
              </div>
              <div className="font-serif text-xl font-medium text-midnight">
                ИП Солонец В.В.
              </div>
              <div className="text-sm text-charcoal-light mt-2 font-light">
                Фигурирует в договорах и счетах
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
