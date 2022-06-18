import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import testType from "../../redux/test/test-actions";
import styles from "./select-test.module.scss";

const SelectTest = () => {
  const dispatch = useDispatch();
  const setType = useCallback(
    (type) => {
      dispatch(testType(type));
    },
    [dispatch]
  );

  useEffect(() => {
    localStorage.removeItem("answers");
    localStorage.removeItem("questions");
    setType({ testType: "" });
  }, [setType]);

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
            <Link
              onClick={() => setType({ testType: "tech" })}
              to="/test"
              className={styles.link}
            >
              QA technical training
            </Link>
            <Link
              onClick={() => setType({ testType: "theory" })}
              to="/test"
              className={styles.link}
            >
              Testing theory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SelectTest;
