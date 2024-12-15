import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

const bgColors = {
  rock: `hsl(349, 71%, 52%), hsl(349, 70%, 56%)`,
  paper: `hsl(230, 89%, 62%), hsl(230, 89%, 65%)`,
  scissors: `hsl(39, 89%, 49%), hsl(40, 84%, 53%)`,
  spock: `hsl(189, 59%, 53%), hsl(189, 58%, 57%)`,
  lizard: `hsl(261, 73%, 60%), hsl(261, 72%, 63%)`,
};

const positions = {
  rock: {
    top: `250px`,
    left: `300px`,
  },
  paper: {
    top: `100px`,
    left: `350px`,
  },
  scissors: {
    top: `0`,
    left: `200px`,
  },
  spock: {
    top: `100px`,
    left: `50px`,
  },
  lizard: {
    top: `250px`,
    left: `100px`,
  },
};

const mobilePositions = {
  rock: {
    top: `250px`,
    left: `180px`,
  },
  paper: {
    top: `100px`,
    left: `220px`,
  },
  scissors: {
    top: `0`,
    left: `100px`,
  },
  spock: {
    top: `100px`,
    left: `-20px`,
  },
  lizard: {
    top: `250px`,
    left: `20px`,
  },
};

export const StyledSelection = styled.div`
  width: ${(props) => props.$size || 100}px;
  height: ${(props) => props.$size || 100}px;
  cursor: pointer;
  background: ${(props) =>
    props.$value
      ? `linear-gradient(${bgColors[props.$value]})`
      : `hsl(237, 49%, 15%)`};
  border-radius: 50%;
  position: ${(props) => (props.$menu ? "absolute" : "initial")};
  top: ${(props) => `${positions[props.$value]?.top}`};
  left: ${(props) => `${positions[props.$value]?.left}`};
  display: flex;
  justify-content: center;
  align-items: center;

  .selection-inner {
    background: ${(props) => (props.$value ? "white" : "transparent")};
    border-radius: 50%;
    width: ${(props) => (props.$size ? props.$size - 50 : 80)}px;
    height: ${(props) => (props.$size ? props.$size - 50 : 80)}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: ${(props) => (props.$iconSize ? props.$iconSize : 40)}px;
  }

  @media (max-width: ${breakPoints.mobile}) {
    width: ${(props) => props.$mobileSize || 100}px;
    height: ${(props) => props.$mobileSize || 100}px;
    top: ${(props) => `${mobilePositions[props.$value]?.top}`};
    left: ${(props) => `${mobilePositions[props.$value]?.left}`};

    .selection-inner {
      width: ${(props) => props.$mobileSize - 30 || 80}px;
      height: ${(props) => props.$mobileSize - 30 || 80}px;
    }

    img {
      max-height: ${(props) => props.$mobileIconSize || 40}px;
    }
  }
`;
