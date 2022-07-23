import React from 'react';
import { StyledFooterContainer } from '../styles/footer';

const Footer = () => {
    return (
        <StyledFooterContainer>
            <div className="footer-wrapper">
                Created By <a href="https://github.com/emmanz1995" target="_blank" rel="noopener">emmanz95</a> &copy; {new Date().getFullYear()}
            </div>
        </StyledFooterContainer>
    );
};

export default Footer;