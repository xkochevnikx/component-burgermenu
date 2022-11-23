import React from "react";
import "../BurgerMenu/BurgerMenu.css";

const BurgerMenu = ({ header, items, active, setActive }) => {
  return (
    <>
      <div
        className={active ? "menu_active" : "menu"}
        onClick={() => setActive(!active)}>
        <div className="blur">
          <div className="menu_burg" onClick={e => e.stopPropagation()}>
            <div className="menu_header"> {header}</div>
            <ul>
              {items.map(item => (
                <li>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
