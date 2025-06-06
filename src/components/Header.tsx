import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Mursal Ashraf</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mursal-ashraf/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mursal-ashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 