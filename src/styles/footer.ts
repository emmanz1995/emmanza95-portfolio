import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  background-color: ${(props: any) => props.theme.light};
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-wrapper {
    text-align: center;
    width: 100%;
    color: ${(props: any) => props.theme.secondaryColor};
    a {
      color: ${(props: any) => props.theme.secondaryColor};
      text-decoration: none;
    }
  }
`;