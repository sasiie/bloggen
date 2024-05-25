import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext, UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PageLayout from "./components/PageLayout";
import Landningssida from "./pages/Landningssida";
import { PostProvider } from "./context/BlogContext";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <PostProvider>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/Landningssida" element={<Landningssida />} />
            </Route>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route
              path="/"
              element={<PageLayout title="Please log in" />}
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </PostProvider>
  );
};

export default App;
