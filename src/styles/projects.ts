import styled from 'styled-components';

export const StyledProjectContainer = styled.section`
  display: flex;
  width: 100%;
  background-color: ${(props: any) => props.theme.primaryColor};
  padding-bottom: 40px;
  .project-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .project-title {
    color: ${(props: any) => props.theme.light};
    text-transform: uppercase;
    margin: 20px 0;
  }
  .flex-project {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .project-card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .project-content {
    padding: 20px;
  }

  .button-link {
    margin: 10px 0 0 0;
    width: 100%;
    background-color: ${(props: any) => props.theme.secondaryColor};
    border: none;
    padding: 10px 5px;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }

  .title {
    color: #fff;
    margin-bottom: 10px;
  }

  .headline {
    text-align: justify;
    color: #fff;
  }
  .project-img {
    width: 100%;
    height: auto;
  }
  .btn-flex {
    display: flex;
    gap: 20px;
  }
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    .project-card {
      width: 100%;
      margin: 10px;
    }
    .project-title {
      margin: 20px 10px;
    }
  }
`;

