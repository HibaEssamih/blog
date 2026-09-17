import React, { useEffect, useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Blog from "./Blog";
import "./Navbar.css";

const navigation = [
  { name: "Tools", href: "/tools" },
  { name: "Shop", href: "/allProducts" },
  { name: "Contact", href: "/contactUs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function MotivogLogo({ light = false }) {
  return (
    <span className={classNames("motivo-wordmark", light && "motivo-wordmark-light")}>
      <span className="motivo-mark" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
      <span className="motivo-name">Motivog</span>
      <span className="motivo-dot" aria-hidden="true" />
    </span>
  );
}

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const isActive = (href) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 22);
      setProgress(available > 0 ? Math.min((top / available) * 100, 100) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <header className={classNames("navbar", scrolled && "navbar-scrolled")}>
        <div className="navbar-container">
          <div className="navbar-inner">
            <Link to="/" aria-label="Motivog home" className="navbar-logo">
              <MotivogLogo />
            </Link>

            <nav className="navbar-desktop-links" aria-label="Primary navigation">
              <Link
                to="/"
                aria-current={isActive("/") ? "page" : undefined}
                className={classNames("nav-link", isActive("/") && "nav-link-active")}
              >
                Home
              </Link>

              <div className={classNames("nav-blog-link", isActive("/categoryPage") && "nav-link-active")}>
                <Blog />
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={classNames("nav-link", isActive(item.href) && "nav-link-active")}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="navbar-actions">
              <Link to="/search" aria-label="Search" className="navbar-icon-button navbar-search">
                <MagnifyingGlassIcon aria-hidden="true" />
              </Link>

              <Link to="/login" className="navbar-signin-link">
                <span className="navbar-signin-content">
                  <span className="navbar-signin-label">Sign in</span>
                  <span className="navbar-signin-arrow" aria-hidden="true">↗</span>
                </span>
              </Link>

              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(true)}
                className="navbar-icon-button navbar-menu-button"
              >
                <Bars3Icon aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div className="navbar-spacer" aria-hidden="true" />

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata setIsOpen={setIsOpen} />
      </Drawer>
    </>
  );
};

export default Navbar;
