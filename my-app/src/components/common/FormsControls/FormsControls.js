import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
debugger;
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " +  (hasError ? styles.error : "")}>
            <textarea {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " +  (hasError ? styles.error : "")}>
            <input {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Checkbox = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " +  (hasError ? styles.error : "")}>
            <input type={'checkbox'} {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}