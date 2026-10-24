import { useState, useEffect } from 'react';
import { Trash2, CheckCircle, Clock, AlertCircle, MessageSquare } from 'lucide-react';
import { getInquiries, deleteInquiry, updateInquiryStatus } from './storage';
import type { Inquiry } from './types';

export default function InquiriesManager() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState<'all' | 'new' | 'in_progress' | 'completed'>('all');

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = () => {
    setInquiries(getInquiries());
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту заявку?')) {
      deleteInquiry(id);
      loadInquiries();
    }
  };

  const handleStatusChange = (id: string, status: Inquiry['status']) => {
    updateInquiryStatus(id, status);
    loadInquiries();
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    if (filter === 'all') return true;
    return inquiry.status === filter;
  });

  const getStatusBadge = (status: Inquiry['status']) => {
    const badges = {
      new: { label: 'Новая', color: 'bg-blue-100 text-blue-700', icon: AlertCircle },
      in_progress: { label: 'В работе', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
      completed: { label: 'Завершена', color: 'bg-green-100 text-green-700', icon: CheckCircle },
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon size={14} strokeWidth={1.5} />
        {badge.label}
      </span>
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-medium text-midnight mb-2">
          Заявки
        </h1>
        <p className="text-gray-500 font-light">
          Управление обращениями клиентов
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'all', label: 'Все' },
          { id: 'new', label: 'Новые' },
          { id: 'in_progress', label: 'В работе' },
          { id: 'completed', label: 'Завершённые' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === f.id
                ? 'bg-gold text-midnight'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filteredInquiries.map((inquiry) => (
          <div
            key={inquiry.id}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl font-medium text-midnight">
                    {inquiry.name}
                  </h3>
                  {getStatusBadge(inquiry.status)}
                </div>
                <p className="text-sm text-gray-500 font-light">
                  {new Date(inquiry.createdAt).toLocaleString('ru-RU')}
                </p>
              </div>
              <button
                onClick={() => handleDelete(inquiry.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={18} className="text-red-600" strokeWidth={1.5} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Телефон</p>
                <a href={`tel:${inquiry.phone}`} className="text-midnight hover:text-gold transition-colors">
                  {inquiry.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${inquiry.email}`} className="text-midnight hover:text-gold transition-colors">
                  {inquiry.email}
                </a>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Сообщение</p>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                {inquiry.message}
              </p>
            </div>

            <div className="flex gap-2">
              <select
                value={inquiry.status}
                onChange={(e) => handleStatusChange(inquiry.id, e.target.value as Inquiry['status'])}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              >
                <option value="new">Новая</option>
                <option value="in_progress">В работе</option>
                <option value="completed">Завершена</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {filteredInquiries.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-100">
          <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" strokeWidth={1.5} />
          <p className="text-gray-500 font-light">Заявок пока нет</p>
        </div>
      )}
    </div>
  );
}
