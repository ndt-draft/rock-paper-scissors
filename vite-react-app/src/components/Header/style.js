import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

export const StyledHeader = styled.div`
  max-width: 960px;
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.headerOutline};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.headerBg};

  @media (max-width: ${breakPoints.tablet}) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    img {
      max-width: 80px;
      padding: 16px;
    }
  }
`;

export const StyledPoint = styled.div`
  width: 150px;
  text-align: center;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 16px;

  @media (max-width: ${breakPoints.mobile}) {
    width: 100px;
    padding: 8px;
  }

  .score {
    font-size: 20px;
    color: ${(props) => props.theme.scoreText};
  }

  .score-point {
    color: ${(props) => props.theme.darkText};
    font-size: 64px;
  }
`;
