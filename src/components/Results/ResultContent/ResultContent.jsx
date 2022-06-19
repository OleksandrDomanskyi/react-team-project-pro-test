import PieDiagram from "../PieDiagram/PieDiagram";
import styles from "./ResultContent.module.scss";
const ResultContent = ({ result, questions }) => {
  return (
    <>
      <PieDiagram result={result} />
      <div className={styles.correctIncorrect}>
        <p className={styles.correct}>
          Correct answers -
          <span className={styles.boldInfo}>
            &nbsp;
            {Math.round((parseFloat(result.result) * questions.length) / 100) ||
              0}
          </span>
        </p>
        <p className={styles.incorrect}>
          Total questions -&nbsp;
          <span className={styles.boldInfo}>{questions.length}</span>
        </p>
      </div>
    </>
  );
};
export default ResultContent;
