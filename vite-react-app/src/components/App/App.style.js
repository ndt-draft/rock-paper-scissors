import styled from "styled-components";

export const StyledApp = styled.div`
  background: radial-gradient(
    ${(props) => props.theme.bodyBg1 + "," + props.theme.bodyBg2}
  );
  color: ${(props) => props.theme.contentText};
  min-height: 100vh;
  padding-top: 20px;
`;
