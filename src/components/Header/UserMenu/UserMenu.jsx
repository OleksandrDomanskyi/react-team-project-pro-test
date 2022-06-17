import PropTypes from "prop-types";

import styles from "./user-menu.module.scss";

const UserMenu = ({ isMobile }) => {
  const name = "oleksii.kikot@yahoo.com";
  return (
    <div className={styles.userWrapper}>
      <p className={styles.userName}>{name.slice(0, 1)}</p>
      {!isMobile && <p className={styles.fullName}>{name}</p>}
    </div>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
