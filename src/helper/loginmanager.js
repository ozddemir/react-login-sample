
export const login = (userdata) => {
    localStorage.setItem('token', userdata.token);
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const islogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}