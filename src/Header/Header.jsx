import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="apnaStore" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="categories">
                <a href="#" className="category">Men</a>
                <a href="#" className="category">Women</a>
                <a href="#" className="category">Contact</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit" className="search-button">
                    <i className="fab fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;
