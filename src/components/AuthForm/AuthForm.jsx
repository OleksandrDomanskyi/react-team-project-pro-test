import { useState } from "react";

import { initialState } from './initialState';
import styles from './auth-form.module.scss'

import Icon from "../../shared/components/Icon";

const AuthForm = ({ onSubmit }) => {
    const [submitType, setSubmitType] = useState(null)
    const [form, setForm] = useState({...initialState});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...form}, submitType);
        setForm({...initialState});
    }

    const {email, password} = form;

    return (
            <form className={styles.form} onSubmit={handleSubmit}>

                <p className={styles.text}>You can use your Google Account to authorize:</p>

                <button type='button' className={styles.GoogleButton}>
                    <Icon name={"google"} width={18} height={18} /> 
                    <span className={styles.Google}>Google</span>
                </button>
                
                <p className={styles.text}>Or login to our app using e-mail and password:</p>

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
                            placeholder="E-mail" />
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
                    <button onClick={() => setSubmitType('login')} type='submit' className={styles.signButtonActive}> <span className={styles.sign}>sign in</span> </button>
                    <button  onClick={() => setSubmitType('signup')} type='submit' className={styles.signButton}> <span className={styles.sign}>sign up</span> </button>
                </div>

            </form>
    )
};

export default AuthForm;