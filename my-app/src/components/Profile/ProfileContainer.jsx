import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    setUserStatus,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let usersId = this.props.match.params.userId;
        if(!usersId) {
            usersId = 7623;
        }

        this.props.getUserProfile(usersId);
        this.props.getUserStatus(usersId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getUserStatus: getUserStatusThunkCreator, updateUserStatus: updateUserStatusThunkCreator}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);

