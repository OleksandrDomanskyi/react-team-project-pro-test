import PropTypes from "prop-types";

import UserMenu from "../../../../components/Header/UserMenu/UserMenu";
import NavBarMenu from "../../../../components/Header/NavBarMenu";
import Icon from "../../Icon";

import styles from "./expanded-navbar.module.scss";

const ExpandedNavbar = ({ isLogin, isMobile }) => {
  return (
    <div className={styles.controlItems}>
      <NavBarMenu />

      {isLogin && (
        <>
          <UserMenu isMobile={isMobile} />
          <button type="button" className={styles.logoutBtn}>
            <Icon
              name={"icon-sign-out"}
              width={16}
              height={16}
              className={styles.icon}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ExpandedNavbar;

ExpandedNavbar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
