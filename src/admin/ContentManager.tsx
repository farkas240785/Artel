import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { getContent, saveContent } from './storage';
import type { SiteContent } from './types';

export default function ContentManager() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setContent(getContent());
  }, []);

  const handleSave = () => {
    if (content) {
      saveContent(content);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  if (!content) return <div>Загрузка...</div>;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl font-medium text-midnight mb-2">
            Контент
          </h1>
          <p className="text-gray-500 font-light">
            Управление текстами и изображениями сайта
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-gold text-midnight font-medium rounded-lg hover:bg-gold-light transition-colors"
        >
          <Save size={20} strokeWidth={1.5} />
          {saved ? 'Сохранено!' : 'Сохранить'}
        </button>
      </div>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Главный экран (Hero)
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Заголовок
              </label>
              <input
                type="text"
                value={content.hero.title}
                onChange={(e) => setContent({
                  ...content,
                  hero: { ...content.hero, title: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Подзаголовок
              </label>
              <textarea
                rows={3}
                value={content.hero.subtitle}
                onChange={(e) => setContent({
                  ...content,
                  hero: { ...content.hero, subtitle: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                URL фонового изображения
              </label>
              <input
                type="text"
                value={content.hero.backgroundImage}
                onChange={(e) => setContent({
                  ...content,
                  hero: { ...content.hero, backgroundImage: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Раздел "О нас"
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Заголовок
              </label>
              <input
                type="text"
                value={content.about.title}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, title: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Описание
              </label>
              <textarea
                rows={4}
                value={content.about.description}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, description: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                URL изображения
              </label>
              <input
                type="text"
                value={content.about.image}
                onChange={(e) => setContent({
                  ...content,
                  about: { ...content.about, image: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Раздел "Услуги"
          </h2>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Заголовок раздела
              </label>
              <input
                type="text"
                value={content.services.title}
                onChange={(e) => setContent({
                  ...content,
                  services: { ...content.services, title: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Описание раздела
              </label>
              <textarea
                rows={2}
                value={content.services.description}
                onChange={(e) => setContent({
                  ...content,
                  services: { ...content.services, description: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            {content.services.items.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-midnight mb-4">
                  Услуга {index + 1}
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Название"
                    value={service.title}
                    onChange={(e) => {
                      const newItems = [...content.services.items];
                      newItems[index] = { ...newItems[index], title: e.target.value };
                      setContent({
                        ...content,
                        services: { ...content.services, items: newItems }
                      });
                    }}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                  <textarea
                    rows={2}
                    placeholder="Описание"
                    value={service.description}
                    onChange={(e) => {
                      const newItems = [...content.services.items];
                      newItems[index] = { ...newItems[index], description: e.target.value };
                      setContent({
                        ...content,
                        services: { ...content.services, items: newItems }
                      });
                    }}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  />
                  <input
                    type="text"
                    placeholder="URL изображения"
                    value={service.image}
                    onChange={(e) => {
                      const newItems = [...content.services.items];
                      newItems[index] = { ...newItems[index], image: e.target.value };
                      setContent({
                        ...content,
                        services: { ...content.services, items: newItems }
                      });
                    }}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Контактная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Телефон
              </label>
              <input
                type="text"
                value={content.contact.phone}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, phone: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Email
              </label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, email: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-midnight mb-2">
                Адрес
              </label>
              <input
                type="text"
                value={content.contact.address}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, address: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-midnight mb-2">
                Режим работы
              </label>
              <input
                type="text"
                value={content.contact.workHours}
                onChange={(e) => setContent({
                  ...content,
                  contact: { ...content.contact, workHours: e.target.value }
                })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
