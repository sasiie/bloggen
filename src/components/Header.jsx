import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { UserContext } from "../context/UserContext";

export const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div className="container">
      <h1 className="Title-header"> Saras Blogg</h1>
      <nav className="links-container">
        {isLoggedIn ? (
          <>
            <Link to="/HomePage" className="link">
              Home
            </Link>
            <Link to="/Landningssida" className="link">
              Blogg sidan
            </Link>
            <SearchBar />

            <p className="userName">{userName}</p>
            <button onClick={logout}> Log out</button>
          </>
        ) : (
          <button onClick={login}>Log in</button>
        )}
      </nav>
    </div>
  );
};
export default Header;
