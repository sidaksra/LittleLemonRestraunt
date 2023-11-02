import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubHeader = () => {
const location = useLocation();

    // Function to get the current page name based on the pathname
    const getPageName = (pathname) => {
        switch (pathname) {
            case '/':
                return 'HOME';
            case '/about':
                return 'ABOUT';
            case '/menu':
                return 'Menu';
            case '/book':
                return 'RESERVATION';
            case '/contact':
                return 'CONTACT';
            case '/supervisa':
                return 'Super Visa Insurance';
            default:
                return '';
        }
    };

    // Get the current page name
    const currentPage = getPageName(location.pathname);

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <section className="sub-header">
            <nav>
                <div>
                    <Link to={"/"}><img src={require("../images/logo.jpg")}/></Link>
                </div>
                <div className="both-nav">
                    <div className="above-nav">
                        <div className="nav-links" id="navLinks" style={{ right: isNavOpen ? 0 : "-200px" }}>
                            <i className="fa fa-close" onClick={toggleMenu}></i>
                            <ul>
                                <li><Link to={"/"}>HOME</Link></li>
                                <li><Link to={"/about"}>ABOUT</Link></li>
                                <li><Link to={"/menu"}>MENU</Link></li>
                                <li><Link to={"/book"}>BOOK</Link></li>
                                <li><Link to={"/contact"}>CONTACT</Link></li>
                            </ul>
                        </div>
                        <i className="fa fa-bars" onClick={toggleMenu}></i>
                    </div>
                </div>
            </nav>
            <div className="text-box-2">
                <h1>{currentPage}</h1>
            </div>
        </section>
    );
}

export default SubHeader;
