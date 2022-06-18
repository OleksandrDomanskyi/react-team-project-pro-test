import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import UserMenu from "../../../../components/Header/UserMenu/UserMenu";
import NavBarMenu from "../../../../components/Header/NavBarMenu";
import Icon from "../../Icon";

import { logout } from "../../../../redux/auth/auth-operations";

import styles from "./expanded-navbar.module.scss";

const ExpandedNavbar = ({ isLogin, isMobile }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout())
  };
  
  return (
    <div className={styles.controlItems}>
      <NavBarMenu />

      {isLogin && (
        <>
          <UserMenu isMobile={isMobile} />
          <button onClick={() => dispatch(logoutUser)} type="button" className={styles.logoutBtn}>
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
