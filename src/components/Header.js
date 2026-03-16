import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Position", path: "/position" },
  { name: "Process", path: "/process" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__logo">
            <Link to="/" aria-label="HOON 홈으로 이동">
              <img src={logo} alt="HOON" className="header__logo-image" />
            </Link>
          </h1>

          <nav className="header__nav" aria-label="주요 메뉴">
            <ul className="header__menu">
              {menuItems.map((item) => (
                <li key={item.name} className="header__item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`header__menu-btn ${isMenuOpen ? "is-active" : ""}`}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={handleMenuClose}
      />

      <aside className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__header">
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="메뉴 닫기"
            onClick={handleMenuClose}
          >
            ✕
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="모바일 메뉴">
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.name} className="mobile-menu__item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "mobile-menu__link mobile-menu__link--active"
                      : "mobile-menu__link"
                  }
                  onClick={handleMenuClose}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}