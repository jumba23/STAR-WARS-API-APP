import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import "./names.css";

const Names = ({ list }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  let names = [];
  list.map((element) => (names = [...names, element.name]));
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname.includes(prevPath)) return;
    setPrevPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className="names-results">
        {list.length === 0 && <p>No people...</p>}
        {names.map((name, i) => (
          <div key={name}>
            <NavLink className="activeLink" style={({ isActive }) => ({ color: isActive ? "orange" : "yellow" })} to={`${prevPath}/${i + 1}`}>
              {name}
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Names;
