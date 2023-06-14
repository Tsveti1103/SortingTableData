import formStyles from '../commonStyles/formStyle.module.css';
import buttonStyles from '../commonStyles/button.module.css';

import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useErrors from '../../hooks/useErorrs';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Register() {
    const { registerUser } = useAuthContext();
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, registerUser);

    const { formErrors, formValidate, isValid } = useErrors(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        values.password
    );

    return (
        <div className={formStyles.formBox}>
            <h2>Register</h2>
            <form onSubmit={onSubmit} className={formStyles.form}>
                <div className={formStyles.userBox}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required=""
                        autoComplete="username"
                        value={values.username}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.username &&
                        <p className={formStyles.formError}>
                            {formErrors.username}
                        </p>

                    }
                </div>
                <div className={formStyles.userBox}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        required=""
                        value={values.email}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.email &&
                        <p className={formStyles.formError}>
                            {formErrors.email}
                        </p>

                    }
                </div>
                <div className={formStyles.userBox}>
                    <label htmlFor="password">Password</label>
                    <input
                        type={"password"}
                        name="password"
                        id="password"
                        required=""
                        autoComplete="password"
                        value={values.password}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.password &&
                        <p className={formStyles.formError}>
                            {formErrors.password}
                        </p>

                    }
                </div>
                <div className={formStyles.userBox}>
                    <label htmlFor="confirmPassword">Repeat Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="repass"
                        required=""
                        autoComplete="new-password"
                        value={values.confirmPassword}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.confirmPassword &&
                        <p className={formStyles.formError}>
                            {formErrors.confirmPassword}
                        </p>

                    }
                </div>
                {serverErrors &&
                    <p className={formStyles.formError}>{serverErrors}</p>
                }
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.blueBtn} disabled={!isValid}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Register
                    </button>
                    <Link to="/login" className={buttonStyles.signUpIn}>Sign In?</Link>
                </div>
            </form >
        </div >
    );
};