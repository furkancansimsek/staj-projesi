import React, { useEffect } from 'react';
import { Form, Input, Card, message } from 'antd';
import users from '../../utils/data/users.json'
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const auth = useAuth();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const onFinish = (values) => {
        let user = users.find((item) => item.email === values.email && item.password === values.password);
        if (!user) {
            messageApi.open({
                type: 'error',
                content: 'E-Posta veya şifre hatalı!',
            });
        } else {
            auth.setIsLogin(true);
            auth.setToken(user.token);
            auth.setUser(user);
            localStorage.setItem("token", user.token);
            navigate("/map");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/map");
        }
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen w-full">
            {contextHolder}
            <Card
                className='w-[25%]'
                title={(<span className='block text-center'>Giriş Yap</span>)}
                bordered={true}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="E-Posta"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen e-posta girin!',
                            },
                        ]}
                    >
                        <Input type='email' />
                    </Form.Item>

                    <Form.Item
                        label="Şifre"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifre girin!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Beni hatırla!</Checkbox>
                    </Form.Item> */}

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition-all' >Giriş Yap</button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default LoginPage;