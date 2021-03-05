import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../iconfinder_Puppy_5439767.png';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Hazel
                    <img src={logo} alt="puppy" />
                </Link>
                <ul>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/diet" className="nav-links">
                            Diet
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/photos" className="nav-links">
                            Photos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;