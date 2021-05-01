const axios = require('axios');

const apiurl = 'http://localhost:4000/'
export const postlogin = async (endpoint, values) => {

    return await axios({
        method: 'post',
        url: apiurl + endpoint,
        headers: { 'Content-Type': 'application/json' },
        data: values,
    }).then((response) => {
        return response;
    }).catch((error) => {
        if (error.response !== undefined) {
            return error.response;
        } else {
            return { status: 400 }
        }
    })
}