# Финальное состояние сайта «Артель реставрации и монтажа "Исторический Облик"»

**Дата сохранения:** 2026
**Статус:** Финальная версия со всеми корректировками

## 📋 Структура проекта

```
├── index.html
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── FullImage.tsx
│       ├── Stats.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       ├── Requisites.tsx
│       └── Footer.tsx
└── public/
    └── images/
        ├── header-bg.svg
        ├── window-illustration.svg
        └── workshop-illustration.svg
```

## 🎨 Изображения (URL)

- **Hero background:** https://image.qwenlm.ai/generated-images/42cff70b-f39f-41b2-bc47-b329fbffa30b/_result.png
- **About (мастер):** https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png
- **Services (демонтаж):** https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png
- **Services (реставрация):** https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png
- **Services (монтаж):** https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png
- **Process (монтаж окна):** https://image.qwenlm.ai/generated-images/63c00d6e-4be0-4ed2-bc76-470bbcbf7815/_result.png
- **FullImage (двор):** https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png
- **Portfolio (двери):** https://image.qwenlm.ai/generated-images/2de8c5e8-7d6e-45eb-8ae5-07859e2786d2/_result.png
- **Portfolio (ворота):** https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png

## 📝 Ключевые данные

- **Название:** Артель реставрации и монтажа «Исторический Облик»
- **Юр. лицо:** ИП Солонец Виталий Васильевич
- **ИНН:** 616619729113
- **ОГРНИП:** 323237500412353
- **Телефон:** +7 (960) 300-87-97
- **Email:** info@ist-oblik.ru
- **Адрес:** г. Санкт-Петербург, пр-кт Лахтинский, д. 129А, помещение 27.1
- **Банк:** ООО "ОЗОН Банк", БИК 044525068
- **р/с:** 40802810200000076978
- **к/с:** 30101810645374525068

## ✅ Применённые корректировки

1. ✅ Поднят текст в Hero (кнопки не на градиенте)
2. ✅ Удалена надпись «Листайте»
3. ✅ Удалён блок «Важно: Не используем ПВХ...»
4. ✅ Удалён раздел «Детали имеют значение» (Gallery)
5. ✅ Удалён раздел «Документы и лицензия» (Documents)
6. ✅ Удалён раздел «Нужна реставрация исторической столярки?» (CTA)
7. ✅ Телефон: +7 (960) 300-87-97
8. ✅ Услуги в футере: Демонтажные, Реставрационные, Монтажные работы
9. ✅ Адрес офиса: пр-кт Лахтинский, д. 129А, помещение 27.1
10. ✅ Убрана фраза «Реставрация исторической столярки на объектах культурного наследия»
11. ✅ Новое изображение в «Этапы работы» (монтаж окна)

---

## 📄 index.html

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Артель реставрации и монтажа «Исторический Облик»</title>
    <meta name="description" content="Артель реставрации и монтажа «Исторический Облик». Профессиональный демонтаж, реставрация и монтаж окон и дверей на объектах культурного наследия. Лицензия Минкульта. ИП Солонец В.В. Работаем по ГОСТ." />
    <meta name="keywords" content="реставрация окон ОКН, монтаж исторических дверей, реставрация памятников СПб, исторический облик, демонтажные работы, реставрационные работы, монтажные работы" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style>
      html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
      html { scroll-behavior: smooth; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 📄 src/App.tsx

```tsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import FullImage from './components/FullImage';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Requisites from './components/Requisites';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <FullImage />
        <Stats />
        <Portfolio />
        <Contact />
        <Requisites />
      </main>
      <Footer />
    </div>
  );
}
```

## 📄 src/index.css

```css
@import "tailwindcss";

@theme {
  --color-patina: #2d5a3d;
  --color-patina-dark: #1a3d28;
  --color-patina-light: #3d7a52;
  --color-ochre: #c8962e;
  --color-ochre-light: #e8b84a;
  --color-ochre-dark: #9a7220;
  --color-paper: #faf8f5;
  --color-paper-dark: #f0ebe3;
  --color-paper-darker: #e0d8c8;
  --color-graphite: #2a2a2a;
  --color-graphite-light: #5a5a5a;
  --color-graphite-dark: #1a1a1a;
  
  --font-serif: 'Playfair Display', 'Georgia', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-paper);
  color: var(--color-graphite);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  letter-spacing: -0.02em;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-paper);
}

::-webkit-scrollbar-thumb {
  background: var(--color-patina);
  border-radius: 3px;
}

.img-hover {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.img-hover:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.gradient-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
}

.gradient-overlay-left {
  background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
}

.decorative-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--color-ochre), transparent);
}
```

## 📄 src/components/Header.tsx

```tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Работы' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
  { href: '#requisites', label: 'Реквизиты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <rect x="4" y="2" width="32" height="36" rx="1" stroke="currentColor" strokeWidth="1.5" className="text-patina" />
                <rect x="8" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="22" y="6" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="8" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
                <rect x="22" y="22" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1" className="text-ochre" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className={`font-serif text-lg font-semibold leading-none transition-colors duration-500 ${
                isScrolled ? 'text-graphite' : 'text-white'
              }`}>
                Артель реставрации и монтажа
              </div>
              <div className={`text-[10px] tracking-[0.2em] uppercase mt-0.5 transition-colors duration-500 ${
                isScrolled ? 'text-graphite-light' : 'text-white/80'
              }`}>
                «Исторический Облик»
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-500 ${
                  isScrolled 
                    ? 'text-graphite-light hover:text-patina' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-500 ${
                isScrolled
                  ? 'bg-patina text-white hover:bg-patina-dark'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              Оставить заявку
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-graphite' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-base text-graphite hover:text-patina transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

## 📄 src/components/Hero.tsx

```tsx
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/42cff70b-f39f-41b2-bc47-b329fbffa30b/_result.png"
          alt="Историческое здание Санкт-Петербурга"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-patina-dark/80 via-patina/70 to-graphite-dark/80" />
        
        {/* Multi-layer gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-transparent via-patina-dark/30 to-paper" />
        <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-paper via-paper/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Артель реставрации и монтажа «Исторический Облик»
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="inline-block px-4 py-1.5 bg-ochre/20 backdrop-blur-sm border border-ochre/30 rounded-full">
            <span className="text-sm text-ochre-light font-medium tracking-wide">
              Лицензия Минкульта РФ
            </span>
          </div>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
          Сохраняем
          <span className="block text-ochre-light mt-2">исторический облик</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Профессиональные демонтажные, реставрационные и монтажные работы на объектах культурного наследия Санкт-Петербурга. Выполняем комплексные проекты и оказываем услуги на субподряде.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-4 bg-white text-patina-dark font-semibold rounded-md hover:bg-paper transition-colors shadow-lg"
          >
            Наши услуги
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/About.tsx

```tsx
import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png"
                alt="Реставратор за работой" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-xl font-semibold">
                  Мастер-реставратор за работой
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Традиционные технологии восстановления
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-6 leading-tight">
              Возвращаем подлинность
            </h2>
            <p className="text-lg text-graphite-light leading-relaxed mb-4">
              <span className="font-semibold text-graphite">Артель реставрации и монтажа «Исторический Облик»</span> специализируется 
              на демонтажных, реставрационных и монтажных работах с историческими конструкциями на объектах культурного наследия. 
              Выполняем комплексные проекты и оказываем услуги столярным мастерским на субподряде. Работаем по ГОСТ и соблюдаем требования 73-ФЗ.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="font-serif text-4xl font-bold text-patina mb-1">73-ФЗ</div>
                <div className="text-sm text-graphite-light">Охрана памятников</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-patina mb-1">ГОСТ</div>
                <div className="text-sm text-graphite-light">Р 55567</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-patina mb-1">Минкульт</div>
                <div className="text-sm text-graphite-light">Лицензия РФ</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <Shield className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Сохранение подлинности</h4>
                  <p className="text-sm text-graphite-light">Максимальное сохранение аутентичных элементов</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <Award className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Аутентичные материалы</h4>
                  <p className="text-sm text-graphite-light">Древесина аналогичных пород, традиционные технологии</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-patina/10 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <h4 className="font-semibold text-graphite mb-1">Обратимость вмешательств</h4>
                  <p className="text-sm text-graphite-light">Все материалы позволяют обратить вмешательства</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/Services.tsx

```tsx
import { ArrowDown, Wrench, ArrowUp } from 'lucide-react';

const services = [
  {
    icon: ArrowDown,
    title: 'Демонтажные работы',
    description: 'Бережное извлечение, маркировка каждого элемента, фотофиксация утрат',
    features: ['Маркировка элементов', 'Фотофиксация', 'Документирование утрат'],
    image: 'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
  },
  {
    icon: Wrench,
    title: 'Реставрационные работы',
    description: 'Восполнение дефектов дублированием, подбор древесины, восстановление шип-паз',
    features: ['Дублирование утраченных частей', 'Подбор аналогичной древесины', 'Консервация подлинных фрагментов'],
    image: 'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
  },
  {
    icon: ArrowUp,
    title: 'Монтажные работы',
    description: 'Интеграция в проёмы с регулировкой притворов, обратимые материалы. Оказываем услуги столярным мастерским на субподряде.',
    features: ['Точная интеграция в проёмы', 'Регулировка притворов', 'Обратимые материалы', 'Субподряд для мастерских'],
    image: 'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Направления работ
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Выполняем работы как комплексно, так и по отдельным направлениям. Оказываем услуги монтажных работ столярным мастерским на субподряде.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                    <service.icon className="w-7 h-7 text-patina" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-graphite mb-3">
                  {service.title}
                </h3>
                <p className="text-graphite-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-graphite-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-ochre flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/Process.tsx

```tsx
import { ClipboardCheck, Package, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Обследование',
    description: 'Осмотр объекта, фотофиксация, составление дефектной ведомости',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Package,
    number: '02',
    title: 'Демонтаж',
    description: 'Бережное извлечение с маркировкой каждого элемента',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Реставрация',
    description: 'Восполнение утрат, подбор древесины, восстановление соединений',
    color: 'bg-patina/10 border-patina/30',
    iconColor: 'text-patina',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Монтаж',
    description: 'Интеграция в проёмы, регулировка, финальная отделка',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Этапы работы
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Работы могут выполняться как комплексно, так и по отдельным этапам в зависимости от задач проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent z-0" />
              )}

              <div className={`relative z-10 rounded-2xl p-6 border-2 ${step.color} hover:shadow-lg transition-shadow duration-300`}>
                <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 font-serif text-sm font-bold text-graphite shadow-sm">
                  {step.number}
                </div>

                <div className="mb-4">
                  <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                </div>

                <h3 className="font-serif text-xl font-bold text-graphite mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-graphite-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://image.qwenlm.ai/generated-images/63c00d6e-4be0-4ed2-bc76-470bbcbf7815/_result.png"
            alt="Монтаж отреставрированного окна"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/FullImage.tsx

```tsx
export default function FullImage() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img 
        src="https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png"
        alt="Исторический двор Санкт-Петербурга"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="decorative-line mb-4" style={{ background: 'linear-gradient(90deg, #e8b84a, transparent)' }} />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Сохраняем историю<br />Санкт-Петербурга
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Каждый объект культурного наследия — это часть нашего общего наследия. 
              Мы возвращаем историческим зданиям их первоначальный облик.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/Stats.tsx

```tsx
const stats = [
  {
    number: '50+',
    label: 'Объектов реставрации',
    description: 'Окна, двери, ворота',
  },
  {
    number: '15',
    label: 'Лет опыта',
    description: 'В реставрации',
  },
  {
    number: '100%',
    label: 'Соответствие ГОСТ',
    description: 'Р 55567',
  },
  {
    number: '24/7',
    label: 'Поддержка',
    description: 'Консультации',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-patina via-patina-dark to-graphite-dark relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-serif text-5xl sm:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-ochre-light mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/Portfolio.tsx

```tsx
import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  address: string;
  year: string;
  category: string;
  description: string;
  before: string[];
  after: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Реставрация оконных заполнений',
    address: 'наб. реки Мойки, д. 16',
    year: '2024',
    category: 'Окна',
    description: 'Комплексная реставрация исторических оконных блоков XVIII века. Восстановление утраченных элементов методом дублирования, подбор древесины аналогичной породы, консервация подлинных фрагментов.',
    before: [
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
    ],
  },
  {
    id: 2,
    title: 'Восстановление входных дверей',
    address: 'Литейный пр., д. 9',
    year: '2024',
    category: 'Двери',
    description: 'Реставрация исторической филенчатой двери с восстановлением утраченных декоративных элементов. Сохранение подлинной фурнитуры, подбор аналогичной древесины для восполнения утрат.',
    before: [
      'https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png',
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/2de8c5e8-7d6e-45eb-8ae5-07859e2786d2/_result.png',
      'https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png',
    ],
  },
  {
    id: 3,
    title: 'Реставрация ворот и калиток',
    address: 'ул. Рубинштейна, д. 5',
    year: '2023',
    category: 'Ворота',
    description: 'Восстановление исторических ворот с коваными элементами. Бережный демонтаж, реставрация каркаса, восполнение утраченных декоративных накладок, обратный монтаж с регулировкой.',
    before: [
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
      'https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/d56a375c-7129-47ad-8ac8-4784b57ebdff/_result.png',
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
    ],
  },
  {
    id: 4,
    title: 'Комплексная реставрация конструкций',
    address: 'Казанская ул., д. 7',
    year: '2023',
    category: 'Комплекс',
    description: 'Комплексная реставрация исторических деревянных конструкций: окна, двери, ворота. Полный цикл работ от демонтажа до монтажа с применением традиционных технологий и аутентичных материалов.',
    before: [
      'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
      'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
    ],
    after: [
      'https://image.qwenlm.ai/generated-images/d1aacb29-0f8c-416c-9c43-5f2214c2137c/_result.png',
      'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
    ],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab('before');
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    const images = activeTab === 'before' ? selectedProject?.before : selectedProject?.after;
    if (images && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="decorative-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-graphite mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-graphite-light max-w-2xl mx-auto">
            Примеры выполненных проектов на объектах культурного наследия. Нажмите на проект для просмотра галереи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={project.after[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-white/80">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-ochre-light transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={14} />
                  {project.address}
                </div>
                <div className="mt-3 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  Нажмите для просмотра галереи →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div className="bg-white rounded-2xl max-w-5xl w-full relative shadow-2xl">
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
              >
                <X size={24} className="text-graphite" />
              </button>

              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-patina/10 text-patina rounded-full text-xs font-medium">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-graphite-light">
                    <Calendar size={14} />
                    {selectedProject.year}
                  </div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-graphite mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-graphite-light mb-4">
                  <MapPin size={14} />
                  {selectedProject.address}
                </div>
                <p className="text-graphite-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => {
                    setActiveTab('before');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-4 font-semibold transition-colors ${
                    activeTab === 'before'
                      ? 'text-patina border-b-2 border-patina'
                      : 'text-graphite-light hover:text-graphite'
                  }`}
                >
                  Было ({selectedProject.before.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('after');
                    setCurrentImageIndex(0);
                  }}
                  className={`flex-1 py-4 font-semibold transition-colors ${
                    activeTab === 'after'
                      ? 'text-patina border-b-2 border-patina'
                      : 'text-graphite-light hover:text-graphite'
                  }`}
                >
                  Стало ({selectedProject.after.length})
                </button>
              </div>

              <div className="p-8">
                <div className="relative">
                  <img
                    src={activeTab === 'before' ? selectedProject.before[currentImageIndex] : selectedProject.after[currentImageIndex]}
                    alt={`${activeTab === 'before' ? 'До' : 'После'} реставрации`}
                    className="w-full h-[500px] object-cover rounded-xl"
                  />

                  {currentImageIndex > 0 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronLeft size={24} className="text-graphite" />
                    </button>
                  )}
                  {currentImageIndex < (activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length) - 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
                    >
                      <ChevronRight size={24} className="text-graphite" />
                    </button>
                  )}

                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {activeTab === 'before' ? selectedProject.before.length : selectedProject.after.length}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-4">
                  {(activeTab === 'before' ? selectedProject.before : selectedProject.after).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx
                          ? 'border-patina shadow-lg'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
```

## 📄 src/components/Contact.tsx

```tsx
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
              <a href="tel:+79603008797" className="flex items-center gap-4 p-4 bg-paper rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-patina/10">
                  <Phone className="w-5 h-5 text-patina" />
                </div>
                <div>
                  <div className="text-xs text-graphite-light uppercase tracking-wider mb-1">Телефон</div>
                  <div className="text-lg font-semibold text-graphite">+7 (960) 300-87-97</div>
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
                  <label className="block text-sm font-medium text-graphite mb-2">Ваше имя *</label>
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
                  <label className="block text-sm font-medium text-graphite mb-2">Телефон *</label>
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
                  <label className="block text-sm font-medium text-graphite mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-patina focus:ring-2 focus:ring-patina/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">Сообщение</label>
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
```

## 📄 src/components/Requisites.tsx

```tsx
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
              <div className="text-xs uppercase tracking-wider text-graphite-light mb-2">Бренд</div>
              <div className="font-serif text-lg font-bold text-graphite">
                Артель реставрации и монтажа «Исторический Облик»
              </div>
              <div className="text-sm text-graphite-light mt-1">Торговое наименование</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="text-xs uppercase tracking-wider text-graphite-light mb-2">Юридическое лицо</div>
              <div className="font-serif text-lg font-bold text-graphite">ИП Солонец В.В.</div>
              <div className="text-sm text-graphite-light mt-1">Фигурирует в договорах и счетах</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 📄 src/components/Footer.tsx

```tsx
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
              Артель реставрации и монтажа «Исторический Облик». Демонтажные, реставрационные и монтажные работы на объектах культурного наследия. Оказываем услуги на субподряде.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Навигация</h4>
            <nav className="space-y-2">
              {[
                { href: '#about', label: 'О нас' },
                { href: '#services', label: 'Услуги' },
                { href: '#portfolio', label: 'Работы' },
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

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Демонтажные работы</li>
              <li>Реставрационные работы</li>
              <li>Монтажные работы</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79603008797" className="flex items-center gap-2 text-sm text-white/60 hover:text-ochre transition-colors">
                <Phone size={14} />
                +7 (960) 300-87-97
              </a>
              <a href="mailto:info@ist-oblik.ru" className="flex items-center gap-2 text-sm text-white/60 hover:text-ochre transition-colors">
                <Mail size={14} />
                info@ist-oblik.ru
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>г. Санкт-Петербург,<br />пр-кт Лахтинский, д. 129А,<br />помещение 27.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
```

---

## 🔄 Инструкция по восстановлению

Для восстановления финального состояния:

1. Скопируйте код из этого файла в соответствующие файлы проекта
2. Убедитесь, что все изображения доступны по указанным URL
3. Запустите `npm run build` для проверки сборки

**Важно:** Все изображения загружаются через внешние URL. Если какие-то изображения недоступны, их нужно будет перегенерировать.
