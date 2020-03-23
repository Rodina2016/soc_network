import React from 'react';
import './App.css';

const  App = () =>{
  return (
    <div className="app-wrapper">
        <header className="header">
            <img src="https://mediaseller.agency/wp-content/uploads/2019/08/vk-logo-fb.png"/>
        </header>
        <nav className="nav">
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="">News</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img src="https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt=""/>
            </div> 
            <div>
                <img src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt=""/>
            </div>
            <div>
                my posts
            </div>
            <div>
                new post
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
  );
}

export default App;
