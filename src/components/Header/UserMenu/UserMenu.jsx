import PropTypes from "prop-types";

import styles from "./user-menu.module.scss";

const UserMenu = ({ isMobile }) => {
  const name = "oleksii.kikot@yahoo.com";
  return (
    <div className={styles.userWrapper}>
      <p className={styles.userName}>
        <img
          className={styles.userName}
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
          // https://cdn.pixabay.com/photo/2020/10/21/04/12/man-5672061_1280.png
          alt="avatar"
        />
      </p>
      {!isMobile && <p className={styles.fullName}>{name}</p>}
    </div>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
