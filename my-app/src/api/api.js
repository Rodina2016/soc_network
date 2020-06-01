import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'246157dd-addb-43ff-96a8-b314a399a625'
    }
});

export const UserAPI = {

    getUsers (currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    followUser (userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unFollowUser (userId){
        return instance.delete(`follow/${userId}`, {})
            .then(response => response.data);
    },

    getAuthData () {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    getUserProfile (usersId) {
        console.warn('Obsolete method. Please ProfileAPI object');
        return ProfileAPI.getUserProfile(usersId);
    },
}

export const ProfileAPI = {
    getUserProfile (usersId) {
        return instance.get(`profile/${usersId}`)
            .then(response => response.data);
    },

    getUserStatus(usersId) {
        return instance.get(`profile/status/${usersId}`);
    },

    updateUserStatus(status) {
        return instance.put(`/profile/status`,{status: status});
    },
}

