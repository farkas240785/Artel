import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon } from 'lucide-react';
import { getProjects, addProject, updateProject, deleteProject } from './storage';
import type { Project } from './types';

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setProjects(getProjects());
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот проект?')) {
      deleteProject(id);
      loadProjects();
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleSave = (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }
    setShowForm(false);
    setEditingProject(null);
    loadProjects();
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl font-medium text-midnight mb-2">
            Проекты
          </h1>
          <p className="text-gray-500 font-light">
            Управление портфолио работ
          </p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gold text-midnight font-medium rounded-lg hover:bg-gold-light transition-colors"
        >
          <Plus size={20} strokeWidth={1.5} />
          Добавить проект
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-100 relative">
              {project.afterImages[0] && (
                <img
                  src={project.afterImages[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                >
                  <Edit2 size={16} className="text-midnight" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={16} className="text-red-600" strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gold/10 text-gold-dark text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-midnight mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 font-light mb-2">
                {project.address}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg border border-gray-100">
          <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" strokeWidth={1.5} />
          <p className="text-gray-500 font-light">Проекты пока не добавлены</p>
        </div>
      )}

      {/* Edit Form Modal */}
      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
}

interface ProjectFormProps {
  project: Project | null;
  onSave: (data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
}

function ProjectForm({ project, onSave, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    address: project?.address || '',
    year: project?.year || '',
    category: project?.category || '',
    description: project?.description || '',
    beforeImages: project?.beforeImages || [],
    afterImages: project?.afterImages || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-medium text-midnight">
            {project ? 'Редактировать проект' : 'Новый проект'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-midnight mb-2">
              Название проекта *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              placeholder="Реставрация оконных заполнений"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Адрес *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                placeholder="наб. реки Мойки, д. 16"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-midnight mb-2">
                Год *
              </label>
              <input
                type="text"
                required
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                placeholder="2024"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight mb-2">
              Категория *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
            >
              <option value="">Выберите категорию</option>
              <option value="Окна">Окна</option>
              <option value="Двери">Двери</option>
              <option value="Ворота">Ворота</option>
              <option value="Комплекс">Комплекс</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight mb-2">
              Описание *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
              placeholder="Описание выполненных работ..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight mb-2">
              URL изображений "До" (через запятую)
            </label>
            <input
              type="text"
              value={formData.beforeImages.join(', ')}
              onChange={(e) => setFormData({ 
                ...formData, 
                beforeImages: e.target.value.split(',').map(s => s.trim()).filter(s => s) 
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-midnight mb-2">
              URL изображений "После" (через запятую)
            </label>
            <input
              type="text"
              value={formData.afterImages.join(', ')}
              onChange={(e) => setFormData({ 
                ...formData, 
                afterImages: e.target.value.split(',').map(s => s.trim()).filter(s => s) 
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold text-midnight font-medium rounded-lg hover:bg-gold-light transition-colors"
            >
              <Save size={20} strokeWidth={1.5} />
              Сохранить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
