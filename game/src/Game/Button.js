import { StyledButton } from "./Button.style";

const Button = ({ icon, value, onSelect }) => {
  return (
    <StyledButton onClick={onSelect}>
      <img src={icon} alt={value} />
    </StyledButton>
  );
};

export default Button;
