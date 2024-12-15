import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

export const StyledRules = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  button {
    border: 1px solid ${(props) => props.theme.buttonBg};
    background-color: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 600;
  }

  @media (max-width: ${breakPoints.mobile}) {
    right: 0;
    bottom: 60px;
    width: 100%;
    text-align: center;

    button {
      padding: 8px 32px;
      border-radius: 4px;
      font-size: 16px;
    }
  }
`;

export const ModalHeading = styled.h1`
  color: ${(props) => props.theme.darkText};
  text-align: center;
  margin: 0;
  margin-bottom: 100px;
  display: none;

  @media (max-width: ${breakPoints.mobile}) {
    display: block;
  }
`;

export const ModalClose = styled.div`
  text-align: center;
  cursor: pointer;
  margin-top: 100px;
  display: none;

  @media (max-width: ${breakPoints.mobile}) {
    display: block;
  }
`;
