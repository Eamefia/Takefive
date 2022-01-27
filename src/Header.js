import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  
    return (
        <nav className="header">
           <Link to="/">
             <img className="header__logo" src="https://www.freshmenu.com/images/fm-header-logo.svg" alt="Amazon" />
           </Link>
           <div className="header__nav ps-5 pe-5">
              <Link to="/uploads" className="header__link">
                <div className="header__option">
                  uploads
                </div>
              </Link>
              <Link to="/" className="header__link">
                <div className="header__option">
                 Login
                </div>
              </Link>

           </div>
            
        </nav>
    )
}

export default Header
