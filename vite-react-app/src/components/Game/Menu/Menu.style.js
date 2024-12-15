import styled from "styled-components";
import pentagon from "@images/bg-pentagon.svg";
import breakPoints from "@/constants/breakPoints";

export const StyledMenu = styled.div`
  max-width: 500px;
  height: 500px;
  margin: auto;
  position: relative;
  background: url("${pentagon}") no-repeat center 17px;

  @media (max-width: ${breakPoints.mobile}) {
    max-width: 300px;
    background-size: 250px;
    background-position-y: 50px;
  }
`;
