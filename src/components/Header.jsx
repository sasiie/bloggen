import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { UserContext } from "../context/UserContext";


export const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div className="container">
      <nav className="nav">
        <div className="links-container">
          <Link to="/HomePage" className="link">
            Home
          </Link>
          <Link to="/Landningssida" className="link">
            Blogg sidan
          </Link>
          <SearchBar />
        </div>
        {isLoggedIn ? (
          <>
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

