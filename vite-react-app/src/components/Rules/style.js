import styled from "styled-components";

export const StyledRules = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  button {
    border: 1px solid white;
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 4px;
  }

  @media (max-width: 576px) {
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
  color: hsl(229, 25%, 31%);
  text-align: center;
  margin: 0;
  margin-bottom: 100px;
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;

export const ModalClose = styled.div`
  color: hsl(229, 25%, 31%);
  text-align: center;
  cursor: pointer;
  margin-top: 100px;
  display: none;

  @media (max-width: 576px) {
    display: block;
  }
`;
