import Users from "./Users";
import {connect} from 'react-redux'
import {
    follow, followUser, getUserThunkCreater,
    setCurrentPage, setFollowingProgress,
    unfollow, unfollowUser
} from "../../redux/usersReduser";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersComponent extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.setCurrentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        if(this.props.isFetching){
            return <Preloader/>
        } else {
            return (
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged ={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.followUser}
                       unfollow={this.props.unfollowUser}
                       followingInProgress ={this.props.followingInProgress}
                />
            )
        }


    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setFollowingProgress,
        getUsers: getUserThunkCreater,
        followUser: followUser,
        unfollowUser: unfollowUser,
    })
)(UsersComponent);