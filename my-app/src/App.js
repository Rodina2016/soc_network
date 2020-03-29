import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const  App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
           <div className="content">
            <Route path='/dialogs' render={() => {return <Dialogs dialogsData={props.state.dialogsPage}/>}}/>
            <Route path='/profile' render={() => {return <Profile postData={props.state.profilePage}/>}}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
