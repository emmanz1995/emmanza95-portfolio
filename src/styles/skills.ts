import styled from 'styled-components';

export const StyledSkillsContainer = styled.section`
  display: flex;
  width: 100%;
  background-color: ${(props: any) => props.theme.light};
  padding-bottom: 40px;
  .skills-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  .skills-title {
    color: ${(props: any) => props.theme.secondaryColor};
    text-transform: uppercase;
    margin: 20px 0;
  }
  .flex-skills {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .skills {
    padding: 10px 20px;
    background-color: ${(props: any) => props.theme.primaryColor};
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    h6 {
      color: ${(props: any) => props.theme.light};
    }
  }
  .skill-bar {
    width: 100%;
    background-color: ${(props: any) => props.theme.light};
    padding: 0;
    margin: 6px 0 15px 0;
    div {
      height: 10px;
      text-align: right;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      background-color: ${(props: any) => props.theme.secondaryColor};
      position: relative;
      p {
        position: absolute;
        bottom: 0;
        left: 0;  
        color: ${(props: any) => props.theme.light};
      }
    }
  }
  .icon-wrapper {
    width: 100px;
    margin: 0 auto;
  }
  .icon {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    .skills-title {
      margin: 20px 10px;
    }
    .skills {
      width: 100%;
      margin: 0 10px;
    }
  }
`;