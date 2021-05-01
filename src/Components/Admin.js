import React from 'react'
import { logout } from '../helper/loginmanager'
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Admin = () => {
    let history = useHistory();
    const handlelogout = () => {
        logout();
        history.push('/');
    }

    return (
        <div>
            <Button style={{margin:"20px"}} icon={<LogoutOutlined />} onClick={handlelogout}>
                    Çıkış
                </Button>
        </div>
    )
}
export default Admin;