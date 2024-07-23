import React from 'react';
import './Header.scss';
import Logo from '../Logo/logo';
import SearchBar from '../Searchbar/searchbar';
import NavLinks from '../Navlinks/navlinks';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <NavLinks />
    </header>
  );
}

export default Header;
