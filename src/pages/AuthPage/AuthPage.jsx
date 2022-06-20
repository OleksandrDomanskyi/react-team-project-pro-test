import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, signup } from "../../redux/auth/auth-operations";

import AuthForm from "../../components/AuthForm";
import useLogin from "../../shared/hooks/useLogin";

import styles from "./auth-page.module.scss";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const onSubmit = (data, type) => {
    if (type === "signup") {
      return dispatch(signup(data));
    }

    if (type === "login") {
      return dispatch(login(data));
    }
  };

  return (
    <main className={styles.mainContainer}>
      <section className="container">
        <div className={styles.sectionContainer}>
          <div className={styles.description}>
            <h2 className={styles.title}>Pro Test</h2>
            <p className={styles.text}>
              <span className={styles.bold}>&#91;</span> We will help you find
              weak points in knowledge so that you can strengthen it. We will
              show you what is relevant to know for a{" "}
              <span className={styles.bold}>QA Engineer</span> and will try to
              make the learning process more diverse_{" "}
              <span className={styles.bold}>&#93;</span>;
            </p>
          </div>
          <AuthForm onSubmit={onSubmit} />
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
