import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    const {fullName, photos, contacts} = props.profile;

    return (
           <div className={classes.profileInfo}>
               <div>{fullName}</div>
               <div className={classes.avatar}>
                   <img src={photos.large} alt={fullName}/>
               </div>
               <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
               <div className={classes.soc}>
                   <a href={contacts.github} className={classes.socItem}>{contacts.github}</a>
                   <a href={contacts.vk} className={classes.socItem}>{contacts.vk}</a>
                   <a href={contacts.facebook} className={classes.socItem}>{contacts.facebook}</a>
               </div>
           </div>
    )
}

export default ProfileInfo;