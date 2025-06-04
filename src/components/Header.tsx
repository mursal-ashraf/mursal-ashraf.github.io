import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Mursal Ashraf</h1>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mursal-ashraf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mursal-ashraf"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 