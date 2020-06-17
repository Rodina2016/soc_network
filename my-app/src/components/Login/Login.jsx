import React from "react";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

let maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" typeFild={'input'} name={"email"} placeholder={"email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type="password" typeFild={'input'} name={"password"} placeholder={"password"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type="checkbox" typeFild={'checkbox'} name={"rememberMe"} component={Checkbox}/>
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>
                    login
                </button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const submit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return  <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={submit}/>
    </div>
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
    }
)

export default connect(mapStateToProps, {loginThunkCreator})(Login);