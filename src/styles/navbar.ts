import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
  width: 100%;
  background-color: ${(props: any) => props.theme.primaryColor};
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
    .hamburger-menu {
      display: block;
    }
  }
`

