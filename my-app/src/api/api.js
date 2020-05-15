import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'246157dd-addb-43ff-96a8-b314a399a625'
    }
});

export const getUsers = (currentPage = 1, pageSize = 1) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data);
}

export const unFollowUser = (userId) => {
    return instance.delete(`follow/${userId}`, {})
        .then(response => response.data);
}
