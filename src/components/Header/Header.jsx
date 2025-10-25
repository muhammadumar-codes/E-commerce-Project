// 📦 Imports

import "./Header.css";


// components
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";


// ======= Header Component ==========
export default function Header() {





  return (
    <>
      <header className="header">
        {/* Left: Logo + Navigation */}
        <div className="logo-link-container">
          <div className="logo">
           Muhammad Umar
           
          </div>

          <nav className="nav-links">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink  to={"/About"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/Contact"}>
              <li>Contact</li>
            </NavLink>
           
          </nav>
        </div>

        {/* Right: Search + Cart + Logout */}
        <div className="right-section">
          <form className="search-box">
            <input type="text" placeholder="Search..." />
          </form>

             <NavLink to={"/Cart"}>
              <img
                src="/public/assets/images/cart-icon.png"
                alt="Cart"
                className="cart-icon-image"
              />
            </NavLink>

          {/* components used ! */}
          <Button>Log out</Button>

        </div>
      </header>
    </>
  );
}
