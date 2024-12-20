import styled from "styled-components";
import breakPoints from "@/constants/breakPoints";

export const StyledSelections = styled.div`
  display: grid;
  gap: 16px; /* Add space between columns and rows */

  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto; /* Automatically adjust row heights */
  align-items: center; /* Center align items vertically if needed */

  padding: 0 20px;

  .choice,
  .status {
    text-align: center; /* Optional, for centering content */
  }

  .choice:nth-child(1) {
    grid-column: 1; /* First column */
  }

  .status {
    grid-column: 2; /* Second column */
  }

  .choice:nth-child(3) {
    grid-column: 3; /* Third column */
  }

  .heading {
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 20px;
  }

  .status {
    font-size: 48px;
    font-weight: 700;
  }

  .play-again {
    background-color: ${(props) => props.theme.buttonBg};
    padding: 8px 60px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.buttonText};
  }

  @media (max-width: ${breakPoints.mobile}) {
    grid-template-columns: repeat(2, 1fr); /* 2 equal columns for "choice" */
    grid-template-rows: auto auto; /* Add extra rows */

    .choice:nth-child(1) {
      grid-column: 1;
    }

    .choice:nth-child(3) {
      grid-column: 2;
      grid-row: 1;
    }

    .status {
      grid-column: 1 / -1; /* Full width */
    }

    .status {
      font-size: 64px;
      line-height: 64px;
      margin-top: 50px;
    }

    .play-again {
      background-color: ${(props) => props.theme.buttonBg};
      padding: 8px 60px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
