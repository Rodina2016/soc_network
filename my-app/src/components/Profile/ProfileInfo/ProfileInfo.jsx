import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
           <div className={classes.profileInfo}>
               <div className={classes.banner}>
                   <img src="https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt=""/>
               </div>
               <div className={classes.avatar}>
                   <img src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt=""/>
               </div>
               description
           </div>
    )
}

export default ProfileInfo;