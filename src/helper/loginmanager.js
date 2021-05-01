
//gelen token localstorage yazılır
export const login = (userdata) => {
    localStorage.setItem('token', userdata.token);
}

//localstorage token silmeye yarar
export const logout = () => {
    localStorage.removeItem('token');
}

//kullanıcın localstorage ta token sahip olup olmadığını kontrol eder
export const islogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}