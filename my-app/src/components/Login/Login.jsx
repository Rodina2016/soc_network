import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" name={"login"} placeholder={"login"} component={"input"}/>
            </div>
            <div>
                <Field type="text" name={"password"} placeholder={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"remember-me"} component={"input"}/>
            </div>
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
        // print the form values to the console
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={submit}/>
    </div>

}

export default Login;