const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
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

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}

export default usersReducer;