import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    return (
        <div className={classes.profileStatus}>
            {!editMode &&
                <div>
                    <span  onDoubleClick={ activateEditMode }>{status || '------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } onBlur={ deactivateEditMode } autoFocus={true} value={status}  type="text"/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;