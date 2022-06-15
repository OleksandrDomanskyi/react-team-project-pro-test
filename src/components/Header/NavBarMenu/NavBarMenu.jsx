import { NavLink } from "react-router-dom";

import { items } from "./items";

import styles from "./nav-bar-menu.module.scss";
import Icon from "../../../shared/components/Icon";

const getActiveLink = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;
};

const NavBarMenu = ({ toggleNavbar }) => {
  const isLogin = false;
  const privateItems = items.filter((item) => item.private === isLogin);
  const validItems = isLogin ? items : privateItems;

  const closeMenu = () => {
    toggleNavbar();
  };

  const elements = validItems.map(({ id, to, text }) => (
    <li key={id} className={styles.navMenuItem}>
      <NavLink to={to} className={getActiveLink}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.navMenu}>
      <ul className={styles.navMenuList} onClick={closeMenu}>
        {elements}
        {isLogin && (
          <li className={styles.navMenuItemIcon}>
            <Icon
              name="icon-sign-out"
              width={16}
              height={16}
              color={"var(--accent-color)"}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBarMenu;
