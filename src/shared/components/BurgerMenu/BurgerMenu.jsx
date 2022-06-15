import Icon from "../Icon";

const BurgerMenu = () => {
  return (
    <button type="button">
      <Icon
        name={"icon-burger"}
        color={"var(--main-black-color)"}
        width={"26px"}
        height={"26px"}
      />
    </button>
  );
};

export default BurgerMenu;
