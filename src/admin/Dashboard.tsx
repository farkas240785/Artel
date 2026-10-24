import { useEffect, useState } from 'react';
import { TrendingUp, Image as ImageIcon, MessageSquare, Clock } from 'lucide-react';
import { getProjects, getInquiries } from './storage';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    newInquiries: 0,
    totalInquiries: 0,
    recentProjects: 0,
  });

  useEffect(() => {
    const projects = getProjects();
    const inquiries = getInquiries();
    
    const newInquiries = inquiries.filter(i => i.status === 'new').length;
    const recentProjects = projects.filter(p => {
      const created = new Date(p.createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return created > weekAgo;
    }).length;

    setStats({
      totalProjects: projects.length,
      newInquiries,
      totalInquiries: inquiries.length,
      recentProjects,
    });
  }, []);

  const statCards = [
    {
      title: 'Всего проектов',
      value: stats.totalProjects,
      icon: ImageIcon,
      color: 'bg-blue-500',
    },
    {
      title: 'Новые заявки',
      value: stats.newInquiries,
      icon: MessageSquare,
      color: 'bg-green-500',
    },
    {
      title: 'Всего заявок',
      value: stats.totalInquiries,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      title: 'За последние 7 дней',
      value: stats.recentProjects,
      icon: Clock,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-medium text-midnight mb-2">
          Обзор
        </h1>
        <p className="text-gray-500 font-light">
          Добро пожаловать в панель управления сайтом
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-medium text-midnight mb-1">
                {card.value}
              </h3>
              <p className="text-sm text-gray-500 font-light">{card.title}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
          Быстрые действия
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#/admin/projects"
            className="p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-200"
          >
            <ImageIcon size={24} className="text-gold mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-midnight mb-1">Добавить проект</h3>
            <p className="text-sm text-gray-500 font-light">
              Добавить новый проект в портфолио
            </p>
          </a>
          <a
            href="#/admin/content"
            className="p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-200"
          >
            <MessageSquare size={24} className="text-gold mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-midnight mb-1">Просмотреть заявки</h3>
            <p className="text-sm text-gray-500 font-light">
              Проверить новые обращения клиентов
            </p>
          </a>
          <a
            href="#/admin/settings"
            className="p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-200"
          >
            <Clock size={24} className="text-gold mb-3" strokeWidth={1.5} />
            <h3 className="font-medium text-midnight mb-1">Настройки сайта</h3>
            <p className="text-sm text-gray-500 font-light">
              Изменить контактную информацию
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
