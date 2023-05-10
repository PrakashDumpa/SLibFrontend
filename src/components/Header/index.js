import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { item: "Home", path: "/" },
  { item: "Store", path: "/books-store" },
  { item: "Cart", path: "/cart" },
  { item: "TopClips", path: "/top-clips" },
  { item: "History", path: "/history" },
];

const Header = () => {
  return (
    <div className="d-flex justify-content-center navMainCon">
      <div className="navCon d-flex justify-content-between align-items-center pt-2 pb-2">
        <div className="logo h2 text-dark">
          S<span className="text-warning pt-1 pb-1">Lib</span>
        </div>
        <ul className="d-flex justify-content-around list-unstyled navitemsCon m-0">
          {navItems.map((obj) => (
            <li key={uuidv4()} className="h6" style={{ fontSize: "17px" }}>
              <NavLink to={obj.path} className="navItemLi">
                {obj.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
