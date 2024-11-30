import React from 'react';
// import logo from '../logo.png'; // Adjust the path as necessary

const Header = () => (
  <header>
    <div className="logo">
      {/* <img src={logo} alt="My Logo" /> */}
      <h1>My Portfolio</h1>
    </div>
    <nav>
      <ul>
        <li><a href="./main.html">About Me</a></li>
        <li><a href="./skills.html">Skills</a></li>
        <li><a href="./projects.html">Projects</a></li>
        <li><a href="https://github.com/stevenzhr">GitHub</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;