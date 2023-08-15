
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo-no-background.png';
import SearchBar from './SearchBar';
import { useState } from 'react';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [preview, setPreview] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 // Search-bar
 const handleSearch = (searchTerm) => {
  const filteredData = preview.filter(datamapping =>
    datamapping.props.titles.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setPreview(filteredData);
  setSearching(true);
};


const handleGoBackToHomePage = () => {
  const homepageURL = 'http://localhost:5174/';
  // Navigate to the homepage
  window.location.href = homepageURL;
};


  return (
   <>
   
  
    <nav className='nav-nav'>
       <img src= {logo} alt="logo-no-background" className='nav-logo'/> 
      {/* <Link to="/" className='title'></Link>  */}
      <div className={`Menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="./AboutUs.jsx">About Us</NavLink></li>
        <li><NavLink to="./Cards.jsx">Podcasts</NavLink></li>
        <li><NavLink to="/host">Blog</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
   
    </nav>
    {searching && <button className='back-button' onClick={handleGoBackToHomePage}>Go Back</button>}
    </>  
  );

};

