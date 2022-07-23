import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMenuContainer = styled.ul`
  list-style: none;
  display: none;
  //flex-direction: column;
  //align-items: center;
  text-align: center;
  gap: 10px;
  position: absolute;
  left: 50%;
  background-color: ${(props: any) => props.theme.light};
  padding: 30px 50px;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: ${(props: any) => props.theme.secondaryColor};
  }
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    display: block;
  }
`;

const Menu: FC<{revealMenu: () => void}> = ({ revealMenu }) => {
    return (
        <StyledMenuContainer>
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
                <a href="/assets/New Emmanuel Okuchukwu CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </li>
        </StyledMenuContainer>
    );
};

export default Menu;