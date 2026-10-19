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
    <section id="requisites" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Реквизиты
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Полные банковские реквизиты для заключения договоров и оплаты
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-patina to-patina-dark px-8 py-6 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  ИП Солонец Виталий Васильевич
                </h3>
                <p className="text-white/70 text-sm">
                  Артель реставрации и монтажа «Исторический Облик»
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-0 divide-y divide-gray-100">
                {requisites.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-4 py-4 group hover:bg-paper/50 -mx-4 px-4 rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider text-graphite-light mb-1">
                        {item.label}
                      </div>
                      <div className="text-base text-graphite font-medium break-words">
                        {item.value}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="flex-shrink-0 p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-patina/10 transition-all duration-200"
                      title="Скопировать"
                    >
                      {copiedField === item.label ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <Copy size={18} className="text-graphite-light hover:text-patina" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-paper border-t border-gray-100 px-8 py-5 flex items-center gap-3">
              <FileText size={16} className="text-ochre flex-shrink-0" />
              <p className="text-sm text-graphite-light">
                Для получения скана лицензии Минкульта РФ свяжитесь с нами по телефону или email
              </p>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="text-xs uppercase tracking-wider text-graphite-light mb-2">
                Бренд
              </div>
              <div className="font-serif text-lg font-bold text-graphite">
                Артель реставрации и монтажа «Исторический Облик»
              </div>
              <div className="text-sm text-graphite-light mt-1">
                Торговое наименование
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="text-xs uppercase tracking-wider text-graphite-light mb-2">
                Юридическое лицо
              </div>
              <div className="font-serif text-lg font-bold text-graphite">
                ИП Солонец В.В.
              </div>
              <div className="text-sm text-graphite-light mt-1">
                Фигурирует в договорах и счетах
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
