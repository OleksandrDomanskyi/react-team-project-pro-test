import { Link } from "react-router-dom";

import styles from "./select-test.module.scss";

const SelectTest = () => {
  return (
    <main>
      <section className="container">
        <div className={styles.select}>
          <h2 className={styles.title}>
            “Regression testing. What is it? <br />
            If the system compiles, that's good, if it boots, that's great!”
          </h2>
          <p className={styles.name}>Linus Torvalds</p>
          <p className={styles.text}>Linux kernel creator, hacker, 1969</p>
          <div className={styles.choice}>
            <Link to="/test" className={styles.link}>
              QA technical training
            </Link>
            <Link to="/test" className={styles.link}>
              Testing theory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SelectTest;
