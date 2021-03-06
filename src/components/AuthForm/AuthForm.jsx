import { useState } from "react";

import { initialState } from "./initialState";
import styles from "./auth-form.module.scss";

const AuthForm = ({ onSubmit }) => {
  const [submitType, setSubmitType] = useState(null);
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form }, submitType);
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.text}>Login to our app using e-mail and password:</p>

      <div className={styles.inputs}>
        <div className={styles.inputItem}>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="E-mail"
          />
        </div>
        <div className={styles.inputItem}>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          onClick={() => setSubmitType("login")}
          type="submit"
          className={styles.signButtonActive}
        >
          {" "}
          <span className={styles.sign}>sign in</span>{" "}
        </button>
        <button
          onClick={() => setSubmitType("signup")}
          type="submit"
          className={styles.signButton}
        >
          {" "}
          <span className={styles.sign}>sign up</span>{" "}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
