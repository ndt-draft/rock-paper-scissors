import styled from "styled-components";

export const StyledHeader = styled.div`
  border: 2px solid hsl(217, 16%, 45%);
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  color: hsl(229, 25%, 31%);
`;

export const StyledPoint = styled.div`
  width: 200px;
  text-align: center;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: hsl(229, 64%, 46%);
  border-radius: 12px;

  .score {
    font-size: 20px;
  }

  .score-point {
    color: hsl(229, 25%, 31%);
    font-size: 32px;
  }
`;
