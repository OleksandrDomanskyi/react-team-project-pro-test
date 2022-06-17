import Icon from "../Icon";

import styles from "./burger.module.scss";

const BurgerMenu = ({ isOpen, onClick }) => {
  document.body.style.overflow = isOpen ? "hidden" : "scroll";
  return (
    <button onClick={onClick} type="button" className={styles.burgerBtn}>
      {isOpen ? (
        <Icon
          name={"icon-close"}
          width={"20px"}
          height={"20px"}
          className={styles.burger}
        />
      ) : (
        <Icon
          name={"icon-burger"}
          width={"20px"}
          height={"20px"}
          className={styles.burger}
        />
      )}
    </button>
  );
};

export default BurgerMenu;
