import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SearchBar from '../components/SearchBar';


const Header = () => {
    const { userName,isLoggedIn, login, logout } = useContext(UserContext);
  
    return (
        <div className="container">
          <nav className="nav">
    <div className="links-container">
        <Link to="/HomePage" className="link">Home</Link>
        <Link to="/Landningssida" className="link">Blogg sidan</Link>
        <SearchBar />
    </div>
    <Link to="/LogIn" className="link">Logga in</Link>
    {isLoggedIn ? (<>
      <p className="userName">{userName}</p>
      <button onClick={logout}> Log out</button>
</> ): (
 
  <button onClick={login}>Log in</button>
)}
    
</nav>
        </div>
      );
    };
    
    export default Header;
