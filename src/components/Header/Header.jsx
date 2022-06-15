import { Link } from "react-router-dom";
import { useState } from "react";

import NavBarMenu from "./NavBarMenu";
import MobileNavbar from "../../shared/components/Navbar/MobileNavbar";
import ExpandedNavbar from "../../shared/components/Navbar/ExpandedNavbar/ExpandedNavbar";

import Icon from "../../shared/components/Icon";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

import styles from "./header.module.scss";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    return setNavbarOpen((prev) => !prev);
  };

  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isLogin = false;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div>
          <Link
            to="/"
            className={styles.logo}
            onClick={() => setNavbarOpen(false)}
          >
            <Icon name={"icon-logo"} width={130} height={30} />
          </Link>
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
