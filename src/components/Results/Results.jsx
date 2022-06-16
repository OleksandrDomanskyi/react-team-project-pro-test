import PieDiagram from "./PieDiagram";
import { ReactComponent as Cat } from "../../images/cat.svg";
import styles from "./Results.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Results = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/test");
  };
  return (
    <>
      <h2 className={styles.results}>Results</h2>
      <h3 className={styles.testingTheory}>[Testing theory]</h3>
      <PieDiagram />
      <div className={styles.correctIncorrect}>
        <p className={styles.correct}>Correct answers</p>
        <p className={styles.incorrect}>Total questions</p>
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
