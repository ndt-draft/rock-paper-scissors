import { StyledSelection } from "./Selection.style";

const Selection = ({ icon, value, onSelect, size, iconSize, menu }) => {
  return (
    <StyledSelection
      onClick={onSelect}
      $menu={menu}
      $value={value}
      $size={size}
      $iconSize={iconSize}
    >
      <div className="selection-inner">
        <img src={icon} alt={value} />
      </div>
    </StyledSelection>
  );
};

export default Selection;
