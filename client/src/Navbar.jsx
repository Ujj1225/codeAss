import React from "react";
import "./Styles.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          Site name
        </a>
        <ul>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
