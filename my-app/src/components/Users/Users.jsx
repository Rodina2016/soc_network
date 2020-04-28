import React from "react";
import styles from './users.module.css';
import * as axios from "axios";

let Users = (props) => {

  if(props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
          .then(response => {
              props.setUsers(response.data.items);
          });
  }

    return (
        <div>
            {
                props.users.map(u => {
                    return(
                        <div key={u.id}>
                            <div>{u.name}</div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : 'https://img.icons8.com/clouds/2x/user.png'} alt={u.name}/>
                            </div>
                            <div>{u.status}</div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                            {u.follow ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;