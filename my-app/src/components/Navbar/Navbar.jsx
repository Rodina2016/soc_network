import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active} className={classes.link}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active} className={classes.link}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.active} className={classes.link}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.active} className={classes.link}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" activeClassName={classes.active} className={classes.link}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Users" activeClassName={classes.active} className={classes.link}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;