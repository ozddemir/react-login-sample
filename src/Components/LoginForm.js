import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { login } from "./helper/loginmanager";

const LoginForm = () => {
    let history = useHistory();
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 8 },
    };

    const [loginwarningmsg, setLoginwarningmsg] = useState('')

    const onFinish = async values => {
        const email = "admin@mail.com"
        const password = "123"
        if (values.email === email && values.password === password) {
            login(values.email)
            history.push('/admin');
        } else {
            setLoginwarningmsg('Bilgileriniz eksik veya hatalı.')
        } 
    };

    return (
        <div className="container">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                className="form"
            >
                <Form.Item>
                    <h3 style={{color:"#ef5350"}}>{loginwarningmsg}</h3>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Geçerli bir e-posta adresi girmelisiniz.',
                        },
                    ]}
                >
                    <Input type="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-posta adresi" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Şifrenizi girmelisiniz.',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Şifre"
                    />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Giriş
                     </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;