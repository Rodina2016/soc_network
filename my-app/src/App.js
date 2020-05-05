import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

const  App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
           <div className="content">
            <Route path='/dialogs' render={() => {return <DialogsContainer/>}}/>
            <Route path='/profile/:userId?' render={() => {return <ProfileContainer/>}}/>
            <Route path='/users' render={() => {return <UsersContainer/>}}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
