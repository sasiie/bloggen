import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("");
  const lsIsLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn);

  const login = (email) => {
    setIsLoggedIn(true);
    setUserName(email);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
  };

  const useInApp = {
    userName,
    setUserName,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={useInApp}>
      {props.children}
    </UserContext.Provider>
  );
};
