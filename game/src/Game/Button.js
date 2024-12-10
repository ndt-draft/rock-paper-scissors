import { StyledButton } from "./Button.style";

const Button = ({ icon, value, onSelect }) => {
  return (
    <StyledButton onClick={onSelect} value={value}>
      <img src={icon} alt={value} />
    </StyledButton>
  );
};

export default Button;
