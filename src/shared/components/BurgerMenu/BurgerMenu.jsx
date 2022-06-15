import Icon from "../Icon";

import styles from "./burger.module.scss";

const BurgerMenu = ({ isOpen, onClick }) => {
  document.body.style.overflow = isOpen ? "hidden" : "scroll";
  return (
    <button onClick={onClick} type="button" className={styles.burgerBtn}>
      {isOpen ? (
        <Icon
          name={"icon-close"}
          width={"26px"}
          height={"26px"}
          color={"var(--main-black-color)"}
        />
      ) : (
        <Icon
          name={"icon-burger"}
          color={"var(--main-black-color)"}
          width={"26px"}
          height={"26px"}
        />
      )}
    </button>
  );
};

export default BurgerMenu;
