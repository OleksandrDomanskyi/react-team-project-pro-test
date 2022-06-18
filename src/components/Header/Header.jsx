import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBarMenu from "./NavBarMenu";
import MobileNavbar from "../../shared/components/Navbar/MobileNavbar";
import ExpandedNavbar from "../../shared/components/Navbar/ExpandedNavbar/ExpandedNavbar";

import Icon from "../../shared/components/Icon";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import useLogin from "../../shared/hooks/useLogin";

import styles from "./header.module.scss";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = ({ switchTheme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    switchTheme();
  };

  const toggleMenu = () => {
    return setNavbarOpen((prev) => !prev);
  };

  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isLogin = useLogin();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => setNavbarOpen(false)}
          >
            <Icon
              name={"icon-logo"}
              width={130}
              height={30}
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.themeSwitch}>
          <DarkModeSwitch
            size={25}
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </div>

        {!isMobile && <ExpandedNavbar isLogin={isLogin} isMobile={isMobile} />}

        {isMobile && (
          <MobileNavbar
            isLogin={isLogin}
            isOpen={navbarOpen}
            toggleNavbar={toggleMenu}
          />
        )}
      </div>
      {navbarOpen && isMobile && (
        <NavBarMenu toggleNavbar={toggleMenu} isLogin={isLogin} />
      )}
    </header>
  );
};

export default Header;
