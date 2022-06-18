import PieDiagram from "./PieDiagram/PieDiagram";
import { ReactComponent as Cat } from "../../images/cat.svg";
import styles from "./Results.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTestResult } from "../../redux/results/results-selectors";
import { getTest } from "../../redux/test/test-selectors";
import { erase } from "../../redux/results/results-slice";
// import { useSelector } from "react-redux";

const Results = () => {
  const navigate = useNavigate();
  const result = parseFloat(useSelector((store) => getTestResult(store)));
  const questions = useSelector((store) => getTest(store));
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(erase());
    navigate("/test");
  };
  return (
    <>
      <h2 className={styles.results}>Results</h2>
      <h3 className={styles.testingTheory}>[Testing theory]</h3>
      <PieDiagram result={result} />
      <div className={styles.correctIncorrect}>
        <p className={styles.correct}>
          Correct answers -
          <span className={styles.boldInfo}>
            {(result.result * questions.length) / 100}
          </span>
        </p>
        <p className={styles.incorrect}>
          Total questions -
          <span className={styles.boldInfo}>{questions.length}</span>
        </p>
      </div>
      <Cat className={styles.cat} />
      {/* <img src={Cat} alt="cute cat" /> */}
      <p className={styles.notBad}>Not bad!</p>
      <p className={styles.butYou}>
        But you still need to learn some materials.
      </p>
      <button onClick={onButtonClick} className={styles.button}>
        Try again
      </button>
    </>
  );
};

export default Results;
