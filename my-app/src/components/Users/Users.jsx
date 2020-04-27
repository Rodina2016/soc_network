import React from "react";
import styles from './users.module.css';

let Users = (props) => {

  if(props.users.length === 0) {
      props.setUsers([
          {id: 1, follow: false, fullName: 'Sergey', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
          {id: 2, follow: true, fullName: 'Oleg', status: 'Good mood', location: {city: 'Moscow', country: 'Russia'} },
          {id: 3, follow: false, fullName: 'Masha', status: 'Hi', location: {city: 'Kiev', country: 'ukraine'} }
      ]);
  }

    return (
        <div>
            {
                props.users.map(u => {
                    return(
                        <div key={u.id}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
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