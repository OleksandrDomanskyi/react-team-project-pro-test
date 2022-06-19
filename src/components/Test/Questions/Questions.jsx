import PropTypes from "prop-types";
import styles from "./questions.module.scss";

const Questions = ({
  questions: { questionId, question, answers },
  onChange,
  selectedAnswers,
}) => {
  const elements = answers.map((answer, index) => {
    return (
      <label key={index} className={styles.questions_label}>
        <input
          id={questionId}
          type="radio"
          name="answers"
          value={answer}
          required={false}
          className={styles.radio_input}
          onChange={onChange}
          checked={Boolean(
            selectedAnswers.find(
              (i) =>
                i?.answer === answer &&
                String(i?.questionId) === String(questionId)
            )
          )}
        />
        {answer}
      </label>
    );
  });

  const textSize =
    (question?.length < 30 && styles.test_question_size_big) ||
    (question?.length < 60 && styles.test_question_size_medium) ||
    styles.test_question_size_small;

  return (
    <div className={styles.question_container}>
      <p className={`${styles.test_question} ${textSize}`}>{question}</p>
      <div className={styles.answers}>{elements}</div>
    </div>
  );
};

export default Questions;

Questions.defaultProps = {
  answers: [],
};

Questions.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
