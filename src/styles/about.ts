import styled from 'styled-components';

export const StyledAboutContainer = styled.section`
  display: flex;
  width: 100%;
  background-color: #fff;
  margin-bottom: 40px;
  .about-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .about-title {
    color: #002265;
    text-transform: uppercase;
    margin: 20px 0;
  }
  .about-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    div {
      color: #002265;
    }
    .text {
      font-size: 19px;
      text-align: justify;
    }
  }
  .about-img-wrapper {
    width: 1200px;
  }
  .about-img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    width: 100%;
    .about-info {
      display: flex;
      flex-direction: column;
    }
    .about-img-wrapper {
      width: 400px;
    }
    .about-img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .about-title {
      margin: 10px;
    }
    .about-info {
      margin: 20px 10px;
    }
  }
`