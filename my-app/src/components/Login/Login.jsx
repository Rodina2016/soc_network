import React from "react";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field type="text" typeFild={'input'} name={"login"} placeholder={"login"} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type="text" typeFild={'input'} name={"password"} placeholder={"password"} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field type="checkbox" typeFild={'checkbox'} name={"remember-me"} component={Checkbox} validate={[required]}/>
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