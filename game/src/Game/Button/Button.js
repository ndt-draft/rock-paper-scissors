import { StyledButton } from "./Button.style";

const Button = ({ icon, value, onSelect, type }) => {
  return (
    <StyledButton onClick={onSelect} value={value} type={type}>
      <img src={icon} alt={value} />
    </StyledButton>
  );
};

export default Button;
