import styled from "styled-components";

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

export const StyledSelection = styled.div`
  width: ${(props) => props.size || 100}px;
  height: ${(props) => props.size || 100}px;
  cursor: pointer;
  background: linear-gradient(${(props) => `${bgColors[props.value]}`});
  border-radius: 50%;
  position: ${(props) => props.position || "initial"};
  ${(props) =>
    props.position === "absolute" &&
    `
    top: ${(props) => `${positions[props.value]?.top}`};
    left: ${(props) => `${positions[props.value]?.left}`};
  `}
  display: flex;
  justify-content: center;
  align-items: center;

  .selection-inner {
  }

  img {
    height: ${(props) => (props.iconSize ? props.iconSize : 40)}px;
  }
`;