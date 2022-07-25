import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  background-color: ${(props: any) => props.theme.primaryColor};
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${(props: any) => props.theme.light};
  .footer-wrapper {
    text-align: center;
    width: 100%;
    color: ${(props: any) => props.theme.light};
    a {
      color: ${(props: any) => props.theme.light};
      text-decoration: none;
    }
  }
`;