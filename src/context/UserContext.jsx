import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const lsIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const lsUserName = localStorage.getItem("userName") || "";

  const [userName, setUserName] = useState(lsUserName);
  const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn);

  const login = (email) => {
    setIsLoggedIn(true);
    setUserName(email);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
  };

  const value = {
    userName,
    setUserName,
    isLoggedIn,
    login,
    logout,
  };

  useEffect(() => {
    setIsLoggedIn(lsIsLoggedIn);
    setUserName(lsUserName);
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

