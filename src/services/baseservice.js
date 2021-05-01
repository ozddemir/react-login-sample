const axios = require('axios');
const apiurl = 'http://localhost:4000/'  // doğrusu direk yazmak yerine env config ten çağırmak

// API ye istek atan metod. API den cevap zaman alabilir o yuzden async kullanıldı. zaman alacak operasyonların başına await eklenerek
// servisin beklenmesi sağlandı
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