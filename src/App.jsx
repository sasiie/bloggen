import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PageLayout from "./components/PageLayout";
import Landningssida from "./pages/Landningssida";
import { PostProvider } from "./context/BlogContext";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <PostProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Landningssida" element={<Landningssida />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
