// Утилита для загрузки и обработки изображений

export interface UploadedImage {
  dataUrl: string;
  name: string;
  size: number;
  type: string;
}

/**
 * Конвертирует файл в base64 data URL
 */
export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Валидирует файл изображения
 */
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Недопустимый формат файла. Разрешены: JPG, PNG, WebP, GIF'
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'Размер файла превышает 5MB'
    };
  }

  return { valid: true };
};

/**
 * Загружает и обрабатывает изображение
 */
export const uploadImage = async (file: File): Promise<UploadedImage> => {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const dataUrl = await fileToDataUrl(file);

  return {
    dataUrl,
    name: file.name,
    size: file.size,
    type: file.type
  };
};

/**
 * Форматирует размер файла для отображения
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};
