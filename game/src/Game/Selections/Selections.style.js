import styled from "styled-components";

export const StyledSelections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
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
`;
