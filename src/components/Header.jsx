import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authfunc";

export const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="container">
      <h1 className="Title-header"> Saras Blogg</h1>
      <nav className="links-container">
        {userLoggedIn ? (
          <>
            <Link to="/HomePage" className="link">
              Home
            </Link>
            <Link to="/BlogPage" className="link">
              Blogg sidan
            </Link>
            <SearchBar />

            <p className="userName">{currentUser.email}</p>
            <button onClick={signOutUser}> Log out</button>
          </>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
    </div>
  );
};
export default Header;
