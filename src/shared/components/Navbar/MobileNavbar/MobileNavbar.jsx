import PropTypes from "prop-types";

import BurgerMenu from "../../BurgerMenu";
import UserMenu from "../../../../components/Header/UserMenu/UserMenu";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import styles from "./mobile-navbar.module.scss";

const MobileNavbar = ({ isLogin, isOpen, toggleNavbar }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div className={styles.mobileMenu}>
      {isLogin && <UserMenu isMobile={isMobile} isLogin={isLogin} />}
      <BurgerMenu isOpen={isOpen} onClick={toggleNavbar} />
    </div>
  );
};

export default MobileNavbar;

MobileNavbar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};
