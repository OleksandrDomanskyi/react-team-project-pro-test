import PropTypes from "prop-types";

const Questions = ({
  questions: { questionId, question, answers },
  onChange,
  selectedAnswers,
}) => {
  const elements = answers.map((answer, index) => {
    return (
      <label key={index}>
        <input
          id={questionId}
          type="radio"
          name="answers"
          value={answer}
          required={false}
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

  return (
    <div>
      <p>{question}</p>
      <div>{elements}</div>
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
