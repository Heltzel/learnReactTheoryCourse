import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul className="nav-router">
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/people" className="nav-links">
            People
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
