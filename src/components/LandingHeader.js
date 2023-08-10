import { NavLink } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/landingHeader.css";
import img from "../img/logo-masterji 1.png";
import imgPay from "../img/Group 221.png";

const LandingHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-warning  navContainer" style={{ background: '#FED549' }}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/Landing">
                        <img src={img} className="logoImg" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto"> {/* ml-auto will push the nav links to the right */}
                            <li className="nav-item">
                                <NavLink className="nav-link header1" activeClassName="active" to="/">find fabric shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header2" activeClassName="active" to="/fashion">fashion consultant</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header3" activeClassName="active" to="/working">How it works?</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link header4" activeClassName="active" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="landing-child1"></div>
            <div class="landing-child2"></div>
            <div class="landing-child3"></div>
            <div class="landing-child4"></div>
            <div className='headerMain text-center py-5'> {/* text-center to center-align content */}
                <h1 className='headerText'>Book a tailor at your<br />door step</h1>
            </div>
            <div className="text-center">
                <img src={imgPay} className='imgPay img-fluid' alt='' />
            </div>
        </>
    );
}

export default LandingHeader;
