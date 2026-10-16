import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, File } from 'lucide-react';

interface TreeNode {
  id: string;
  label: string;
  href?: string;
  children?: TreeNode[];
}

const siteTree: TreeNode[] = [
  {
    id: 'about',
    label: 'О нас',
    href: '#about',
    children: [
      { id: 'about-mission', label: 'Миссия', href: '#about' },
      { id: 'about-principles', label: 'Принципы работы', href: '#about' },
    ],
  },
  {
    id: 'services',
    label: 'Услуги',
    href: '#services',
    children: [
      { id: 'services-demontage', label: 'Демонтаж', href: '#services' },
      { id: 'services-restoration', label: 'Реставрация', href: '#services' },
      { id: 'services-montage', label: 'Монтаж', href: '#services' },
    ],
  },
  {
    id: 'process',
    label: 'Как мы работаем',
    href: '#process',
    children: [
      { id: 'process-steps', label: 'Этапы работы', href: '#process' },
    ],
  },
  {
    id: 'portfolio',
    label: 'Портфолио',
    href: '#portfolio',
    children: [
      { id: 'portfolio-projects', label: 'Проекты', href: '#portfolio' },
    ],
  },
  {
    id: 'documents',
    label: 'Документы',
    href: '#documents',
    children: [
      { id: 'documents-license', label: 'Лицензия Минкульта', href: '#documents' },
      { id: 'documents-certificates', label: 'Аттестаты', href: '#documents' },
    ],
  },
  {
    id: 'contact',
    label: 'Контакты',
    href: '#contact',
    children: [
      { id: 'contact-info', label: 'Контактная информация', href: '#contact' },
      { id: 'contact-form', label: 'Форма заявки', href: '#contact' },
    ],
  },
  {
    id: 'requisites',
    label: 'Реквизиты',
    href: '#requisites',
    children: [
      { id: 'requisites-details', label: 'Банковские реквизиты', href: '#requisites' },
    ],
  },
];

interface TreeNodeComponentProps {
  node: TreeNode;
  level: number;
}

function TreeNodeComponent({ node, level }: TreeNodeComponentProps) {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-paper-dark/50 cursor-pointer transition-colors ${
          level === 0 ? 'font-semibold text-graphite' : 'text-graphite-light'
        }`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown size={16} className="text-ochre flex-shrink-0" />
          ) : (
            <ChevronRight size={16} className="text-ochre flex-shrink-0" />
          )
        ) : (
          <div className="w-4 flex-shrink-0" />
        )}
        {hasChildren ? (
          <Folder size={16} className="text-ochre flex-shrink-0" />
        ) : (
          <File size={16} className="text-patina flex-shrink-0" />
        )}
        {node.href ? (
          <a href={node.href} className="hover:text-patina transition-colors">
            {node.label}
          </a>
        ) : (
          <span>{node.label}</span>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className="ml-6 border-l-2 border-ochre/20 pl-2">
          {node.children!.map((child) => (
            <TreeNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TreeNavigation() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-serif text-lg font-bold text-graphite mb-4 flex items-center gap-2">
        <Folder size={20} className="text-ochre" />
        Структура сайта
      </h3>
      <div className="space-y-1">
        {siteTree.map((node) => (
          <TreeNodeComponent key={node.id} node={node} level={0} />
        ))}
      </div>
    </div>
  );
}
