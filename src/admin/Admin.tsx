import { useState, useEffect } from 'react';
import { isAuthenticated, logout } from './storage';
import Login from './Login';
import AdminPanel from './AdminPanel';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <AdminPanel onLogout={handleLogout} />;
}
