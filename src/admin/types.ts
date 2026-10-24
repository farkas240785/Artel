export interface Project {
  id: string;
  title: string;
  address: string;
  year: string;
  category: string;
  description: string;
  beforeImages: string[];
  afterImages: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: 'new' | 'in_progress' | 'completed';
  createdAt: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  services: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    workHours: string;
  };
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  adminPassword: string;
  maintenanceMode: boolean;
}
