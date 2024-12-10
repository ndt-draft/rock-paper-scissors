import styled from "styled-components";

export const StyledApp = styled.div`
  background: linear-gradient(
    to bottom,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  color: white;
  min-height: 100vh;

  .game-wrapper {
    max-width: 1366px;
    margin: auto;
    padding: 32px;
  }
`;
