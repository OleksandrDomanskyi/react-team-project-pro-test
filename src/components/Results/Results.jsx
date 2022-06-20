import { ReactComponent as Cat } from "../../images/cat.svg";
import styles from "./Results.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTestResult,
  getResultLoading,
} from "../../redux/results/results-selectors";
import ResultContent from "./ResultContent";

import { erase } from "../../redux/results/results-slice";
// import { useSelector } from "react-redux";

const Results = () => {
  const navigate = useNavigate();
  const result = useSelector((store) => getTestResult(store));
  const loading = useSelector((store) => getResultLoading(store));
  const questions = localStorage.getItem("answers")
    ? JSON.parse(localStorage.getItem("answers")).answers
    : {};

  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(erase());
    localStorage.removeItem("answers");
    navigate("/test");
  };
  const renderContent = () => {
    if (loading) {
      return <h3>...Loading</h3>;
    }
    if (result && !loading) {
      return <ResultContent result={result} questions={questions} />;
    }
    if (!result && !loading) {
      return <h3 className={styles.wrong}>Oooops! Something went wrong</h3>;
    }
  };
  return (
    <>
      <h2 className={styles.results}>Results</h2>
      <h3 className={styles.testingTheory}>[Testing theory]</h3>
      {renderContent()}
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
