import styles from "../../Users/users.module.css";
import spiner from "../../../assets/spiner.svg";
import React from "react";

let Preloader = (props) => {
    return(
        <div className={`${styles.spiner} ${props.isFetching ? styles.show : ''}`}>
            <img src={spiner}/>
        </div>
    )
}

export  default Preloader