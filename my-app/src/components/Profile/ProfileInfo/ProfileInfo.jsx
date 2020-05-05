import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    const {fullName, photos, contacts} = props.profile;

    return (
           <div className={classes.profileInfo}>
               <div className={classes.banner}>
                   <img src="https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae" alt=""/>
               </div>
               <div>{fullName}</div>
               <div className={classes.avatar}>
                   <img src={photos.large} alt={fullName}/>
               </div>
               <div className={classes.soc}>
                   <a href={contacts.github} className={classes.socItem}>{contacts.github}</a>
                   <a href={contacts.vk} className={classes.socItem}>{contacts.vk}</a>
                   <a href={contacts.facebook} className={classes.socItem}>{contacts.facebook}</a>
               </div>
           </div>
    )
}

export default ProfileInfo;