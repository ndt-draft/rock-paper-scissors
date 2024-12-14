import logo from "../images/logo-bonus.svg";
import { StyledHeader, StyledPoint } from "./style";
import { useGame } from "../GameProvider";

const Header = () => {
  const { point } = useGame();
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />

      <StyledPoint>
        <div className="score">SCORE</div>
        <div className="score-point">{point}</div>
      </StyledPoint>
    </StyledHeader>
  );
};

export default Header;
