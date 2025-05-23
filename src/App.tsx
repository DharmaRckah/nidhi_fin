import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { CustomersPage } from './pages/CustomersPage';
import { StaffPage } from './pages/StaffPage';
import { LoansPage } from './pages/LoansPage';
import { ReportsPage } from './pages/ReportsPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { Layout } from './components/Layout';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/Toaster';
export function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Simulate splash screen loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const handleLogin = (email, password) => {
    // Simulate authentication
    if (email && password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  if (loading) {
    return <SplashScreen />;
  }
  return <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <Dashboard />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/customers" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <CustomersPage />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/staff" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <StaffPage />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/loans" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <LoansPage />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/reports" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <ReportsPage />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <ProfilePage />
                  </Layout> : <Navigate to="/login" />} />
            <Route path="/settings" element={isAuthenticated ? <Layout onLogout={handleLogout}>
                    <SettingsPage />
                  </Layout> : <Navigate to="/login" />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </ThemeProvider>;
}