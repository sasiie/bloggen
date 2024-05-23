import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import PageLayout from './components/PageLayout';
import Landningssida from './pages/Landningssida';
import { ProductProvider } from './context/BlogContext';

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <ProductProvider>
      <Router>
        <Header />
        {isLoggedIn ? (
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Landningssida" element={<Landningssida />} />
          </Routes>
        ) : (
          <PageLayout>Please Log in</PageLayout>
        )}
      </Router>
    </ProductProvider>
  );
};

export default App;


