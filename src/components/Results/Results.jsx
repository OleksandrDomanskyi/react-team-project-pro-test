import PieDiagram from "./PieDiagram/PieDiagram";
import { ReactComponent as Cat } from "../../images/cat.svg";
import styles from "./Results.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTestResult } from "../../redux/results/results-selectors";

import { erase } from "../../redux/results/results-slice";
// import { useSelector } from "react-redux";

const Results = () => {
  const navigate = useNavigate();
  const result = useSelector((store) => getTestResult(store));

  const questions = localStorage.getItem("answers")
    ? JSON.parse(localStorage.getItem("answers")).answers
    : {};
  console.log(questions);
  console.log(result);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(erase());
    localStorage.removeItem("answers");
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
            &nbsp;
            {Math.floor((parseFloat(result.result) * questions.length) / 100)}
          </span>
        </p>
        <p className={styles.incorrect}>
          Total questions -&nbsp;
          <span className={styles.boldInfo}>{questions.length}</span>
        </p>
      </div>
      <Cat className={styles.cat} />
      {/* <img src={Cat} alt="cute cat" /> */}
      <p className={styles.notBad}> {result.mainMessage}</p>
      <p className={styles.butYou}>{result.secondaryMessage}</p>

      <button onClick={onButtonClick} className={styles.button}>
        Try again
      </button>
    </>
  );
};

export default Results;
