
export const login = (email) => {
    localStorage.setItem('email', email);
    // localStorage.setItem('id', userdata.id);
    // localStorage.setItem('tokenstamp', userdata.tokenstamp);
}

export const logout = () => {
       localStorage.removeItem('email');
}

export const islogin = () => {
    if (localStorage.getItem('email')) {
        return true;
    }
    return false;
}