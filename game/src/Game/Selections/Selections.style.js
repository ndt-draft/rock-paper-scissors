import styled from "styled-components";

export const StyledSelections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .choice {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .heading {
    margin-bottom: 32px;
    font-weight: 700;
  }

  .status {
    flex: 1;
    font-size: 32px;
    text-align: center;
  }

  .play-again {
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
