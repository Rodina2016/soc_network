import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunkCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let usersId = this.props.match.params.userId;
        if(!usersId) {
            usersId = 2;
        }

        this.props.getUserProfile(usersId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    });

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(withUrlDataContainerComponent);