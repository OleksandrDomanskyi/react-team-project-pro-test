import { Link } from "react-router-dom";

import NavBarMenu from "./NavBarMenu/NavBarMenu";

import styles from "./header.module.scss";
import UserMenu from "./UserMenu/UserMenu";

const Header = () => {
    return (
        <div className={styles.menu}>
            <Link to="/" >Logo</Link>
            <NavBarMenu />
            <UserMenu />
        </div>
    )
};

export default Header;