import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    //console.log(props);
    return (
        <header className={classes.header}>
            <img src="https://mediaseller.agency/wp-content/uploads/2019/08/vk-logo-fb.png"/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;