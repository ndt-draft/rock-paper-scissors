import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

export const StyledRules = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  button {
    border: 1px solid ${(props) => props.theme.buttonOutlineText};
    background-color: transparent;
    color: ${(props) => props.theme.buttonOutlineText};
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
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: ${breakPoints.mobile}) {
    margin-bottom: 100px;
    text-align: center;
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 20px;
  top: 28px;
  cursor: pointer;

  @media (max-width: ${breakPoints.mobile}) {
    position: initial;
    text-align: center;
    margin-top: 100px;
  }
`;
