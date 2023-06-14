import formStyles from '../commonStyles/formStyle.module.css';
import buttonStyles from '../commonStyles/button.module.css';

import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import useErrors from "../../hooks/useErorrs";
import useForm from '../../hooks/useForm';

export default function Login() {
    const { userLogin } = useAuthContext();
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        password: '',
    }, userLogin);
    const { formErrors, formValidate, isValid } = useErrors(
        {
            username: '',
            password: '',
        }
    );
    return (
        <div className={formStyles.formBox}>
            <h2>Login</h2>
            <form onSubmit={onSubmit} className={formStyles.form}>
                <div className={formStyles.userBox}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required=""
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

                {serverErrors &&
                    <p className={formStyles.formError}>{serverErrors}</p>
                }
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.blueBtn} disabled={!isValid}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Login
                    </button>
                    <Link to="/register" className={buttonStyles.signUpIn}>Sign Up?</Link>
                </div>
            </form >
        </div >

    )
}