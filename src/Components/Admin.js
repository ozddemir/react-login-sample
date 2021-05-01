import React from 'react'
import { logout } from '../helper/loginmanager'
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Admin = () => {
    let history = useHistory();

    //bu metod ile loginmanager dosyasındaki localstorage daki tokenı silmeye yarayan logout metodu tetikleniyor
    const handlelogout = () => {
        logout();
        //localstorage token silindikten sonra kullanıcı login sayfasına yönlendiriliyor
        history.push('/');
    }

    return (
        <div>
            {/* çıkış yapmak için logout funksiyonunu tetikleyecek buton */}
            <Button style={{margin:"20px"}} icon={<LogoutOutlined />} onClick={handlelogout}>
                    Çıkış
                </Button>
        </div>
    )
}
export default Admin;