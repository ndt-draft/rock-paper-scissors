import styled from "styled-components";
import pentagon from "@images/bg-pentagon.svg";

export const StyledMenu = styled.div`
  max-width: 500px;
  height: 500px;
  margin: auto;
  position: relative;
  background: url("${pentagon}") no-repeat center 17px;

  @media (max-width: 576px) {
    max-width: 300px;
    background-size: 250px;
    background-position-y: 50px;
  }
`;
