import { useState, useEffect } from 'react';
import { Save, Shield } from 'lucide-react';
import { getSettings, saveSettings } from './storage';
import type { SiteSettings } from './types';

export default function SettingsPanel() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const handleSave = () => {
    if (settings) {
      saveSettings(settings);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  if (!settings) return <div>Загрузка...</div>;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl font-medium text-midnight mb-2">
            Настройки
          </h1>
          <p className="text-gray-500 font-light">
            Общие настройки сайта
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

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Основные настройки
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Название сайта
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Описание сайта
              </label>
              <textarea
                rows={3}
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={24} className="text-gold" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl font-medium text-midnight">
              Безопасность
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Пароль администратора
              </label>
              <input
                type="password"
                value={settings.adminPassword}
                onChange={(e) => setSettings({ ...settings, adminPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
              <p className="text-xs text-gray-500 mt-2">
                Текущий пароль используется для входа в админ-панель
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance Mode */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Режим обслуживания
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-midnight font-medium mb-1">
                Включить режим обслуживания
              </p>
              <p className="text-sm text-gray-500 font-light">
                Сайт будет недоступен для посетителей
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
            </label>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-medium text-blue-900 mb-2">
            Информация
          </h3>
          <p className="text-sm text-blue-700 font-light">
            Все изменения сохраняются в localStorage браузера. Для продакшн-версии рекомендуется использовать серверное хранилище данных.
          </p>
        </div>
      </div>
    </div>
  );
}
