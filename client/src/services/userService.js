import * as api from './requester.js';

const endpoints = {
    login: '/user/login',
    register: '/user/register',
    logout: '/user/logout',
};
export async function register(data) {
    const {
        username,
        email,
        password,
    } = data
    return await api.post(endpoints.register, { username, email, password });
};
export async function login(data) {
    const {
        username,
        password,
    } = data;
    return await api.post(endpoints.login, { username, password });
};

export function logout() {
    api.get(endpoints.logout);
};

