import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Card from './components/Card';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import AuthLayout from './layout/AuthLayout';

export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('uz');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.state?.token) {
      setToken(localStorage.getItem('token'));
    } else {
      navigate('/login');
    }
  }, []);

  function PrivateRoute({ isAuth, children }) {
    if (!isAuth) {
      navigate('/login');
    }
    return children;
  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Routes>
            <Route
              index
              element={
                <PrivateRoute isAuth={!!token}>
                  <MainLayout>
                    <Home></Home>
                  </MainLayout>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <PrivateRoute isAuth={!!token}>
                  <MainLayout>
                    <About></About>
                  </MainLayout>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <Login></Login>
                </AuthLayout>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <AuthLayout>
                  <Register></Register>
                </AuthLayout>
              }
            ></Route>
          </Routes>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
