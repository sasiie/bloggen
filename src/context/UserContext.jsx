import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("John Doe");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={{ userName, setUserName, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};