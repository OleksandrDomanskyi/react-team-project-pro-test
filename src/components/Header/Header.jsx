import { Link } from "react-router-dom";
import { useState } from "react";

import NavBarMenu from "./NavBarMenu";
import UserMenu from "./UserMenu/UserMenu";
import BurgerMenu from "../../shared/components/BurgerMenu";

import Icon from "../../shared/components/Icon";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

import styles from "./header.module.scss";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isLogin = true;

  const toggleMenu = () => {
    return setNavbarOpen((prev) => !prev);
  };

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <Link to="/">
          <Icon
            name={"icon-logo"}
            color={"var(--main-black-color)"}
            width={130}
            height={30}
          />
        </Link>

        {isLogin && <UserMenu />}
        {isMobile ? (
          <BurgerMenu isOpen={navbarOpen} onClick={toggleMenu} />
        ) : (
          <NavBarMenu />
        )}
      </div>
      {navbarOpen && isMobile && <NavBarMenu toggleNavbar={toggleMenu} />}
    </header>
  );
};

export default Header;
