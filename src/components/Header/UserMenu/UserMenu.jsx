import styles from "./user-menu.module.scss";

const UserMenu = () => {
  return (
    <div className={styles.userWrapper}>
      <p className={styles.userWrapperName}>{"Oleksii".slice(0, 1)}</p>
    </div>
  );
};

export default UserMenu;
