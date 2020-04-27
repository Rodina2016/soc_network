import React from "react";
import Users from "./Users";
import {connect} from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => {
            dispatch(followAC(user_id));
        },
        unfollow: (user_id) => {
            dispatch(unfollowAC(user_id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);