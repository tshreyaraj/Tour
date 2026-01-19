import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <h2 className="logo">JustWravel</h2>

        {/* Desktop Menu */}
        <nav className="menu">
          <span>New Launches</span>
          <span>Backpacking Trips</span>
          <span>Best Sellers</span>
          <span>Biking Trips</span>
          <span>More</span>
        </nav>

        {/* Desktop Login */}
        <button className="login-btn">Login</button>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <span>New Launches</span>
          <span>Backpacking Trips</span>
          <span>Best Sellers</span>
          <span>Biking Trips</span>
          <span>More</span>
          <button className="mobile-login">Login</button>
        </div>
      )}
    </>
  );
}
