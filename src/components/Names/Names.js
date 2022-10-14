import { NavLink } from "react-router-dom";

const Names = ({list}) => {
    return ( <>
    <div className="results">
      {list.length === 0 && <p>No people...</p>}
      {list.map((item, index) => (
        <p key={item.name}>
          <NavLink className="activeLink" to={`/people/${index + 1}`}>
            {item}
          </NavLink>
        </p>
      ))}
    </div>
    </> );
}
 
export default Names;