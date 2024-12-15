import { StyledSelection } from "./Selection.style";

const Selection = ({
  icon,
  value,
  onSelect,
  size,
  iconSize,
  menu,
  mobileSize,
  mobileIconSize,
}) => {
  return (
    <StyledSelection
      onClick={onSelect}
      $menu={menu}
      $value={value}
      $size={size}
      $iconSize={iconSize}
      $mobileSize={mobileSize}
      $mobileIconSize={mobileIconSize}
    >
      <div className="selection-inner">
        <img src={icon} alt={value} />
      </div>
    </StyledSelection>
  );
};

export default Selection;
