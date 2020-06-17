import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {getAuthDataThunkCreater} from "./redux/authReducer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="content">
                        <Route path='/dialogs' render={() => {
                            return <DialogsContainer/>
                        }}/>
                        <Route path='/profile/:userId?' render={() => {
                            return <ProfileContainer/>
                        }}/>
                        <Route path='/users' render={() => {
                            return <UsersContainer/>
                        }}/>
                        <Route path='/login' render={() => {
                            return <Login/>
                        }}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps,{initializeApp:initializeApp})(App);
