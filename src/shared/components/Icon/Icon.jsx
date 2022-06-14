import Icons from "../../../images/icons.svg";

const Icon = ({ name, color, width, height }) => {
  return (
    <svg width={width} height={height} style={{ fill: { color } }}>
      <use href={Icons + `#${name}`}></use>
    </svg>
  );
};

export default Icon;
