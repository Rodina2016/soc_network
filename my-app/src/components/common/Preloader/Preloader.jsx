import styles from "../../Users/users.module.css";
import spiner from "../../../assets/spiner.svg";
import React from "react";

let Preloader = () => {
    return(
        <div className={`${styles.spiner}`}>
            <img src={spiner}/>
        </div>
    )
}

export  default Preloader