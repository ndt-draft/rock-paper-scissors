import { StyledSelection } from "./Selection.style";

const Selection = ({ icon, value, onSelect, size, iconSize }) => {
  return (
    <StyledSelection
      onClick={onSelect}
      value={value}
      size={size}
      iconSize={iconSize}
    >
      <div className="selection-inner">
        <img src={icon} alt={value} />
      </div>
    </StyledSelection>
  );
};

export default Selection;
