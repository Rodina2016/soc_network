import React from 'react';
import Profile from "./Profile";
import {setUserProfileThunkCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let usersId = this.props.match.params.userId;
        if(!usersId) {
            usersId = 2;
        }

        this.props.setUserProfile(usersId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
    })

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setUserProfileThunkCreator})(withUrlDataContainerComponent);