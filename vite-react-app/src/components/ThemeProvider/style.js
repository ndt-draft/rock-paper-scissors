import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

export const ThemeSwitch = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;

  button {
    background-color: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.buttonText};
    border: 1px solid ${(props) => props.theme.buttonBg};
    cursor: pointer;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 4px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    left: 0;
    width: 100%;
    text-align: center;
  }
`;
