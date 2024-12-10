import styled from "styled-components";

const colors = {
  rock: `hsl(349, 71%, 52%)`,
  paper: `hsl(230, 89%, 62%)`,
  scissors: `hsl(39, 89%, 49%)`,
  spock: `hsl(189, 59%, 53%)`,
  lizard: `hsl(261, 73%, 60%)`,
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

export const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 12px solid ${(props) => `${colors[props.value]}`};
  border-radius: 50%;
  position: ${(props) => (props.type === "preview" ? "initial" : "absolute")};
  top: ${(props) => `${positions[props.value]?.top}`};
  left: ${(props) => `${positions[props.value]?.left}`};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
  }
`;
