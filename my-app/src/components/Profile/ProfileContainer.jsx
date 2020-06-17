import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let usersId = this.props.match.params.userId;
        if(!usersId) {
            usersId = this.props.authorizedUserId;
            if(!usersId) {
               this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(usersId);
        this.props.getUserStatus(usersId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getUserStatusThunkCreator, updateUserStatus: updateUserStatusThunkCreator}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);

