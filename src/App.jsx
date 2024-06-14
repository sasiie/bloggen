import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <AuthProvider>
        <UserProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/BlogPage" element={<BlogPage />} />
              </Route>
              <Route path="/Login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
    </AuthProvider>
  );
};

export default App;
