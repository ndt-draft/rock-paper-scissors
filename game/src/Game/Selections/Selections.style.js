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
    font-size: 20px;
  }

  .status {
    flex: 1;
    font-size: 32px;
    text-align: center;
    font-weight: 700;
  }

  .play-again {
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
  }

  .mobile-status {
    display: none;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;

    .status {
      display: none;
    }

    .mobile-status {
      flex: 100%;
      display: block;
      font-size: 64px;
      text-align: center;
      margin-top: 50px;
      font-weight: 700;
    }

    .play-again {
      background-color: white;
      padding: 8px 32px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 32px;
    }
  }
`;
