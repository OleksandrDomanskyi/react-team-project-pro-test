import { Link } from "react-router-dom";

import NavBarMenu from "./NavBarMenu";

import styles from "./header.module.scss";
import UserMenu from "./UserMenu/UserMenu";
import Icon from "../../shared/components/Icon";
import BurgerMenu from "../../shared/components/BurgerMenu";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <Icon
          name={"icon-logo"}
          color={"var(--main-black-color)"}
          width={"130px"}
          height={"30px"}
        />
      </Link>

      {width < 768 ? <BurgerMenu /> : <NavBarMenu />}
    </header>
  );
};

export default Header;
