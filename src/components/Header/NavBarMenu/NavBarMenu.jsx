import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Icon from "../../../shared/components/Icon";
import useWindowDimensions from "../../../shared/hooks/useWindowDimensions";
import useLogin from "../../../shared/hooks/useLogin";
import { logout } from "../../../redux/auth/auth-operations";

import { items } from "./items";
import styles from "./nav-bar-menu.module.scss";

const getActiveLink = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`;
};

const NavBarMenu = ({ toggleNavbar }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const isLogin = useLogin();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  const privateItems = items.filter((item) => item.private === isLogin);
  const validItems = isLogin ? items : privateItems;

  const closeMenu = () => {
    if (isMobile) {
      toggleNavbar();
    }
    return;
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
        {isLogin && isMobile && (
          <li className={styles.navMenuItemIcon} onClick={logoutUser}>
            <Icon
              name="icon-sign-out"
              width={16}
              height={16}
              className={styles.icon}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBarMenu;

NavBarMenu.defaultProps = {
  toggleNavbar: () => {},
};

NavBarMenu.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
};
