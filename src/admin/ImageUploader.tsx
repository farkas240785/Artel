import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadImage, formatFileSize } from './fileUtils';

interface ImageUploaderProps {
  value: string;
  onChange: (dataUrl: string) => void;
  label?: string;
}

export default function ImageUploader({ value, onChange, label = 'Изображение' }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const uploaded = await uploadImage(file);
      onChange(uploaded.dataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    onChange('');
    setError(null);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-midnight mb-2">
        {label}
      </label>

      {value ? (
        <div className="relative group">
          <img
            src={value}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border border-gray-200"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gold hover:bg-gold/5 transition-all"
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mb-4"></div>
              <p className="text-sm text-gray-600">Загрузка...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload size={48} className="text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Нажмите для загрузки изображения
              </p>
              <p className="text-xs text-gray-500">
                JPG, PNG, WebP, GIF (макс. 5MB)
              </p>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
