import PropTypes from "prop-types";
import useEmail from "../../../shared/hooks/useUserEmail";

import styles from "./user-menu.module.scss";

const UserMenu = ({ isMobile }) => {
  const name = useEmail();
  return (
    <div className={styles.userWrapper}>
      <p className={styles.userName}>{name && name.slice(0, 1)}</p>
      {!isMobile && <p className={styles.fullName}>{name}</p>}
    </div>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
