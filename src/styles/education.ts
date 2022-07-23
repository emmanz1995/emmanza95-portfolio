import styled from 'styled-components';

export const StyledEducationContainer = styled.section`
  display: flex;
  width: 100%;
  background-color: ${(props: any) => props.theme.primaryColor};
  padding-bottom: 40px;
  .education-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .education-title {
    color: ${(props: any) => props.theme.light};
    text-transform: uppercase;
    margin: 20px 0;
  }
  .education {
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    width: 100%;
    background-color: ${(props: any) => props.theme.light};
    padding: 10px;
    border-radius: 5px;
  }
  .certificate-img-wrapper {
    width: 300px;
  }
  .certificate-img {
    width: 100%;
    height: auto;
  }
  //.flex-education {
  //  display: flex;
  //  gap: 20px;
  //  align-items: center;
  //  justify-content: space-between;
  //}
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    .education-title {
      margin: 20px 10px;
    }
    .education {
      padding: 10px;
    }
  }
`;