import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAboutContainer = styled(motion.section)`
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
    margin-bottom: 0;
    .about-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 10px;
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
  }

  @media screen and (max-width: ${(props: any) => props.theme.xsm}) {
    width: 100%;
    margin-bottom: 0;
    .about-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 20px 10px;
    }
    .about-img-wrapper {
      width: 360px;
    }
    .about-img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .about-title {
      margin: 10px;
    }
  }
`