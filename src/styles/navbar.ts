import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
  width: 100%;
  background-color: ${(props: any) => props.theme.primaryColor};
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {}
`
export const StyledNavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  h2 {
    color: ${(props: any) => props.theme.light};
  }
  .nav-options {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    a {
      text-decoration: none;
      color: ${(props: any) => props.theme.light};
    }
  }
  .menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 5%;
    left: 52%;
    background-color: ${(props: any) => props.theme.light};
    padding: 30px 50px;
    a {
      text-decoration: none;
      color: ${(props: any) => props.theme.secondaryColor};
    }
  }
  .hamburger-menu {
    display: none;
  }
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    width: 100%;
    padding: 10px;
    .nav-options {
      display: none;
    }
    .expanded {
      display: block;
      position: absolute;
      top: 40px;
      left: 59.5%;
      text-align: center;
      padding: 20px 30px;
      background-color: ${(props: any) => props.theme.light};
      border-radius: 5px;
      box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
      a {
        color: ${(props: any) => props.theme.secondaryColor};
      }
    }
    
    .hamburger-menu {
      display: block;
    }
  }
`

