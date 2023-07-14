import React from 'react';
import './Header.css'; // Import the associated CSS file

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span>Grow</span>
        </div>
        <div className="user">
          <img src="user-icon.png" alt="User Icon" />
        </div>
      </header>
    );
  }
}

export default Header; // Export the Header component
