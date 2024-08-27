import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
      <h1>TechStar.</h1>
      <main>
        {/* Use HashLink consistently for navigation within the same page */}
        <HashLink smooth to="/#Home"> Home </HashLink>
        <HashLink smooth to="/contact"> Contact </HashLink> {/* Change to HashLink for consistency */}
        <HashLink smooth to="/#About"> About </HashLink>
        <HashLink smooth to="/#Brands"> Brands </HashLink>
        <HashLink smooth to="/Services"> Services </HashLink>
      </main>
    </nav>
  );
};

export default Header;
