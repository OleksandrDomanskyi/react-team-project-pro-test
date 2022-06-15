import AuthForm from "../../components/AuthForm";

import styles from './authPage.module.scss'

const AuthPage = () => {

    return (
        <main>
            <section className="container">
                <div  className={styles.sectionContainer}>
                    <div className={styles.description}>
                        <h2 className={styles.title}>Pro Test</h2>
                        <p className={styles.text}>
                            <span className={styles.bold} >&#91;</span>  We will help you find weak points in knowledge so that you can strengthen it.
                            We will show you what is relevant to know for a <span className={styles.bold}>QA Engineer</span> and will try to make the
                            learning process more diverse_ <span className={styles.bold}>&#93;</span>;
                        </p>
                    </div>
                    <AuthForm />
                </div>
            </section>
        </main>
    )
};

export default AuthPage;