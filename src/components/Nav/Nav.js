import { NavLink } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink style={({ isActive }) => ({ color: isActive ? "orange" : "yellow" })} to="/people" >PEOPLE</NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? "orange" : "yellow" })} to="/planets">PLANETS</NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? "orange" : "yellow" })} to="/films">FILMS</NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? "orange" : "yellow" })} to="/species">SPECIES</NavLink>
    </nav>
  );
};

export default Nav;
