import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { StyledNavbarContainer, StyledNavbarWrapper } from '../styles/navbar';

const Navbar = () => {
    const [reveal, setReveal] = useState(false);
    const revealMenu = () => setReveal(!reveal);
    // const [revealNav, setRevealNav] = useState(false)
    // const navTransition = () => {
    //     if (window.scrollY > 50) {
    //         setRevealNav(true)
    //     } else {
    //         setRevealNav(false)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', navTransition)
    //
    //     return () => window.removeEventListener('scroll', navTransition)
    // }, [])
    return (
        <StyledNavbarContainer>
            <StyledNavbarWrapper>
                <div>
                    <h2>Emmanz95</h2>
                </div>
                <div>
                    <GiHamburgerMenu size={30} onClick={revealMenu} className="hamburger-menu" />
                </div>
                <ul className={!reveal ? "nav-options" : "menu"}>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="/assets/Emmanuel Okuchukwu New CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
                    </li>
                    {/*<li>*/}
                    {/*    <Link href="/contact">Contact</Link>*/}
                    {/*</li>*/}
                </ul>
            </StyledNavbarWrapper>
        </StyledNavbarContainer>
    );
};

export default Navbar;