import { Link } from "react-router-dom";

import NavBarMenu from "./NavBarMenu/NavBarMenu";

import styles from "./header.module.scss";
import UserMenu from "./UserMenu/UserMenu";

import Icon from "../../shared/components/Icon";

const Header = () => {
  return (
    <header className={styles.menu}>
      <Link to="/">
        <Icon
          name={"icon-logo"}
          color={"black"}
          width={"130px"}
          height={"30px"}
        />
      </Link>

      <NavBarMenu />
      <UserMenu />
    </header>
  );
};

export default Header;
