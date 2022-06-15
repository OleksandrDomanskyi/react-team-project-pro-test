import { Link } from "react-router-dom";

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <section className="container">
                <div className={styles.footer}>
                    <p className={styles.text}>&#169; 2022 &#124; All Rights Reserved &#124; Developed with</p>
                    <p className={styles.text}>by</p>
                    <a className={styles.link} href="https://goit.ua/" target="_blank" rel="noreferrer">Go
                        <span className={styles.item}>IT</span>
                    </a>
                    <Link to='/contacts' className={styles.contacts}>Students</Link>
                </div>
            </section>
        </footer>
    )
};

export default Footer;