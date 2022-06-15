
import styles from './authForm.module.scss'

const AuthForm = () => {
    return (
            <form className={styles.form}>

                <p className={styles.text}>You can use your Google Account to authorize:</p>

                <button type='button' className={styles.GoogleButton}> <span className={styles.Google}>Google</span> </button>
                
                <p className={styles.text}>Or login to our app using e-mail and password:</p>

                <div className={styles.inputs}>
                    <div className={styles.inputItem}>
                        <input
                            className={styles.input}
                            id="email"
                            name="email"
                            type="email"
                            // value={email}
                            // onChange={handleChange}
                            required
                            placeholder="E-mail" />
                    </div>
                    <div className={styles.inputItem}>
                        <input
                            className={styles.input}
                            id="password"
                            name="password"
                            type="password"
                            // value={password}
                            // onChange={handleChange}
                            required
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button type='button' className={styles.signButtonActive}> <span className={styles.sign}>sign in</span> </button>
                    <button type='button' className={styles.signButton}> <span className={styles.sign}>sign up</span> </button>
                </div>

            </form>
    )
};

export default AuthForm;