import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Questions from "./Questions/Questions";
import Button from "../../shared/components/Button";
import { fetchQuestions } from "../../redux/test/test-operations";
import { getTest } from "../../redux/test/test-selectors";
import getResults from "../../redux/results/results-operations";
import styles from "./test.module.scss";

const testTypes = ["tech", "theory"];
const Test = () => {
  const test = useSelector(getTest, shallowEqual);
  const [questions, setQuestions] = useState({
    items: [],
    loading: true,
    error: null,
  });
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuestions = localStorage.getItem("questions");
    if (savedQuestions && JSON.parse(savedQuestions).length) {
      setQuestions({
        items: JSON.parse(savedQuestions),
        loading: false,
        error: null,
      });
      const savedAnswers = JSON.parse(localStorage.getItem("answers")) ?? {
        answers: [],
        currentQuestion: 0,
      };
      setAnswers(savedAnswers.answers ?? []);
      setCurrentQuestion(savedAnswers.currentQuestion ?? 0);
    } else {
      !test ||
        dispatch(fetchQuestions(test))
          .then(({ payload }) => {
            setQuestions({ items: payload, loading: false, error: null });
            localStorage.setItem("questions", JSON.stringify(payload));
            localStorage.removeItem("answers");
          })
          .catch((error) =>
            setQuestions({ items: [], loading: false, error: error.message })
          );
    }
  }, [dispatch, test]);

  if (!testTypes.includes(test)) {
    return <Navigate to="/" />;
  }

  const onClickFinishTest = () => {
    localStorage.removeItem("answers");
    localStorage.removeItem("questions");
    if (questions.items?.length === answers?.length) {
      dispatch(getResults({ answers, type: test })).then((result) => {
        return result;
      });
      return navigate("/results");
    }
    return navigate("/");
  };

  const onSelectAnswer = ({ target: { id: questionId, value: answer } }) => {
    const index = answers.findIndex(
      (i) => String(i.questionId) === String(questionId)
    );

    setAnswers((prevState) => {
      if (index === -1) {
        const newAnswers = [
          ...prevState,
          { questionId: Number(questionId), answer },
        ];
        localStorage.setItem(
          "answers",
          JSON.stringify({ answers: newAnswers, currentQuestion })
        );
        return newAnswers;
      }

      const newAnswers = [...prevState];
      newAnswers[index] = { questionId, answer };
      localStorage.setItem(
        "answers",
        JSON.stringify({ answers: newAnswers, currentQuestion })
      );
      return newAnswers;
    });
  };

  const onClickPrevBtn = () => {
    setCurrentQuestion((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  const onClickNextBtn = () => {
    setCurrentQuestion((prevState) => {
      if (prevState < questions.items.length - 1) {
        return prevState + 1;
      }
      return prevState;
    });
  };
  if (!questions.items?.length) {
    return (
      <main>
        <div>
          <div>
            <h2>{"[Testing " + test + "]"}</h2>
            <Button
              btnText="Finish Test"
              type="button"
              isActive={true}
              onClickBtn={onClickFinishTest}
              className={styles.finish_btn}
            />
          </div>
          {!questions.loading && <p>Sorry</p>}
        </div>
        {questions.loading && <p>...loading</p>}
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        <div>
          <h2>
            [Testing
            <br />
            {test}_]
          </h2>
          <Button
            btnText="Finish Test"
            type="button"
            isActive={true}
            onClickBtn={onClickFinishTest}
            className={styles.finish_btn}
          />
        </div>
        {Boolean(questions.items?.length) && (
          <div>
            <p>
              Question <span>{currentQuestion + 1}</span> /{" "}
              {questions.items.length}{" "}
            </p>

            <Questions
              questions={questions.items[currentQuestion]}
              onChange={onSelectAnswer}
              selectedAnswers={answers}
            />
          </div>
        )}
        <div>
          <Button
            btnText="prevQuestion"
            type="button"
            isActive={true}
            onClickBtn={onClickPrevBtn}
            className={styles.prev_btn}
          />
          <Button
            btnText="NextQuestion"
            type="button"
            isActive={true}
            onClickBtn={onClickNextBtn}
            className={styles.next_btn}
          />
        </div>
      </div>
      {questions.loading && <p>...loading</p>}
    </main>
  );
};

export default Test;
