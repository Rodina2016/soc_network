import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.user_id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.user_id) {
                        return {...u, followed: false};
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                    followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(item => item !== action.userId)
            }
        default:
            return state;
    }
}


export const follow = (id) => {
    return {
        type: FOLLOW,
        user_id: id,
    }
}

export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        user_id: id
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}

export const setFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress: isFetching,
        userId: userId,
    }
}

export const getUserThunkCreater = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        UserAPI.getUsers( page ,pageSize)
            .then(response => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        UserAPI.followUser(userId)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        UserAPI.unFollowUser(userId)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;