import type { Project, Inquiry, SiteContent, SiteSettings } from './types';

const STORAGE_KEYS = {
  PROJECTS: 'admin_projects',
  INQUIRIES: 'admin_inquiries',
  CONTENT: 'admin_content',
  SETTINGS: 'admin_settings',
  AUTH: 'admin_auth',
};

// Projects
export const getProjects = (): Project[] => {
  const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  return data ? JSON.parse(data) : [];
};

export const saveProjects = (projects: Project[]): void => {
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
};

export const addProject = (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project => {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
};

export const updateProject = (id: string, updates: Partial<Project>): Project | null => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  saveProjects(projects);
  return projects[index];
};

export const deleteProject = (id: string): boolean => {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  if (filtered.length === projects.length) return false;
  saveProjects(filtered);
  return true;
};

// Inquiries
export const getInquiries = (): Inquiry[] => {
  const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
  return data ? JSON.parse(data) : [];
};

export const saveInquiries = (inquiries: Inquiry[]): void => {
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};

export const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry => {
  const inquiries = getInquiries();
  const newInquiry: Inquiry = {
    ...inquiry,
    id: Date.now().toString(),
    status: 'new',
    createdAt: new Date().toISOString(),
  };
  inquiries.push(newInquiry);
  saveInquiries(inquiries);
  return newInquiry;
};

export const updateInquiryStatus = (id: string, status: Inquiry['status']): Inquiry | null => {
  const inquiries = getInquiries();
  const index = inquiries.findIndex(i => i.id === id);
  if (index === -1) return null;
  
  inquiries[index].status = status;
  saveInquiries(inquiries);
  return inquiries[index];
};

export const deleteInquiry = (id: string): boolean => {
  const inquiries = getInquiries();
  const filtered = inquiries.filter(i => i.id !== id);
  if (filtered.length === inquiries.length) return false;
  saveInquiries(filtered);
  return true;
};

// Content
export const getContent = (): SiteContent => {
  const data = localStorage.getItem(STORAGE_KEYS.CONTENT);
  return data ? JSON.parse(data) : getDefaultContent();
};

export const saveContent = (content: SiteContent): void => {
  localStorage.setItem(STORAGE_KEYS.CONTENT, JSON.stringify(content));
};

const getDefaultContent = (): SiteContent => ({
  hero: {
    title: 'Сохраняем исторический облик',
    subtitle: 'Профессиональные демонтажные, реставрационные и монтажные работы на объектах культурного наследия Санкт-Петербурга',
    backgroundImage: 'https://image.qwenlm.ai/generated-images/42cff70b-f39f-41b2-bc47-b329fbffa30b/_result.png',
  },
  about: {
    title: 'Возвращаем подлинность',
    description: 'Артель реставрации и монтажа «Исторический Облик» специализируется на демонтажных, реставрационных и монтажных работах с историческими конструкциями на объектах культурного наследия.',
    image: 'https://image.qwenlm.ai/generated-images/02e71511-c365-4bb4-9f2a-8927d96f4caa/_result.png',
  },
  services: {
    title: 'Направления работ',
    description: 'Выполняем работы как комплексно, так и по отдельным направлениям.',
    items: [
      {
        title: 'Демонтажные работы',
        description: 'Бережное извлечение, маркировка каждого элемента, фотофиксация утрат',
        image: 'https://image.qwenlm.ai/generated-images/f212a628-9066-4854-aa35-d1bde33930cb/_result.png',
      },
      {
        title: 'Реставрационные работы',
        description: 'Восполнение дефектов дублированием, подбор древесины, восстановление шип-паз',
        image: 'https://image.qwenlm.ai/generated-images/b081e597-a2d6-4ff1-9d94-4430e486829c/_result.png',
      },
      {
        title: 'Монтажные работы',
        description: 'Интеграция в проёмы с регулировкой притворов, обратимые материалы',
        image: 'https://image.qwenlm.ai/generated-images/246ff841-b554-4042-8302-a994f6fc8478/_result.png',
      },
    ],
  },
  contact: {
    phone: '+7 (960) 300-87-97',
    email: 'info@ist-oblik.ru',
    address: 'г. Санкт-Петербург, пр-кт Лахтинский, д. 129А, помещение 27.1',
    workHours: 'Пн–Пт: 9:00–18:00',
  },
});

// Settings
export const getSettings = (): SiteSettings => {
  const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  return data ? JSON.parse(data) : getDefaultSettings();
};

export const saveSettings = (settings: SiteSettings): void => {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
};

const getDefaultSettings = (): SiteSettings => ({
  siteName: 'Артель реставрации и монтажа «Исторический Облик»',
  siteDescription: 'Профессиональная реставрация исторических конструкций',
  adminPassword: 'admin123', // В реальном приложении это должно быть на сервере
  maintenanceMode: false,
});

// Auth
export const isAuthenticated = (): boolean => {
  return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
};

export const login = (password: string): boolean => {
  const settings = getSettings();
  if (password === settings.adminPassword) {
    localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    return true;
  }
  return false;
};

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEYS.AUTH);
};
