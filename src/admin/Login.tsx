import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { login } from './storage';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      onLogin();
    } else {
      setError('Неверный пароль');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-midnight-light to-midnight flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gold/10 rounded-full mb-4">
            <Lock size={48} className="text-gold" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-4xl font-medium text-white mb-2">
            Админ-панель
          </h1>
          <p className="text-white/60 font-light">
            Артель «Исторический Облик»
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="font-serif text-2xl font-medium text-midnight mb-6">
            Вход в систему
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-midnight mb-2">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                placeholder="Введите пароль"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" strokeWidth={1.5} />
                ) : (
                  <Eye size={20} className="text-gray-500" strokeWidth={1.5} />
                )}
              </button>
            </div>
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-midnight font-medium rounded-lg hover:bg-gold-light transition-colors"
          >
            Войти
          </button>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700 font-light">
              <strong>Демо-доступ:</strong> пароль <code className="bg-blue-100 px-2 py-0.5 rounded">admin123</code>
            </p>
          </div>
        </form>

        <p className="text-center text-white/40 text-sm mt-6 font-light">
          © 2024 Артель «Исторический Облик»
        </p>
      </div>
    </div>
  );
}
