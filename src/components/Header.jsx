import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleMenu = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <section className="header">
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
            <div className="text-box">
                <h1>Welcome to Little Lemon Restaurant</h1>
                <p>Where Every Bite is a Culinary Delight</p>
                <p className='home-line'>At Little Lemon Restaurant, we are committed to delivering a remarkable dining experience that tantalizes your taste buds. From our carefully crafted dishes to our warm and inviting ambiance, we aim to make every visit unforgettable.</p>
                <Link to="/menu" className="button-27">View Menu</Link>
            </div>

        </section>
    );
}

export default Header;
