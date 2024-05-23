import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SearchBar from '../components/SearchBar';


const Header = () => {
    const { userName } = useContext(UserContext);
  
    return (
        <div className="container">
          <nav className="nav">
    <div className="links-container">
        <Link to="/HomePage" className="link">Home</Link>
        <Link to="/Landningssida" className="link">Blogg sidan</Link>
        <SearchBar />
    </div>
    <p className="userName">
    <Link to="/LogIn" className="link">Logga in</Link>
{userName}</p>
</nav>
        </div>
      );
    };
    
    export default Header;
