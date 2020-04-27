const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{id: 1, follow: false, fullName: 'Sergey', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, follow: true, fullName: 'Oleg', status: 'Good mood', location: {city: 'Moscow', country: 'Russia'} },
        {id: 3, follow: false, fullName: 'Masha', status: 'Hi', location: {city: 'Kiev', country: 'ukraine'} },*/
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.user_id) {
                        return {...u, follow: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.user_id) {
                        return {...u, follow: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }
}


export const followAC = (id) => {
    return {
        type: FOLLOW,
        user_id: id,
    }
}

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        user_id: id
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;