import React from 'react';
import {Button, Form, Input, Space, Typography , notification} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import firebase from "firebase";
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 12,
    },
};

function Login(props) {
    const [form] = Form.useForm();
    const fbAuth = firebase.auth();
    notification.config({
        duration:2,

    })
    const onFinish = values => {
        fbAuth.signInWithEmailAndPassword(values.Email, values.password).catch(function(error) {
            if(error){

                notification.open({
                    message: 'Sai tai khoan roi ban oi',
                    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                });
            }
        });


    };
    const onReset = () => {
        form.resetFields();
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{marginTop: "30px"}}>
            <Typography style={{textAlign: "center"}}>
                <Typography.Title level={2}>Mời bạn đăng nhập</Typography.Title>
            </Typography>

            <Form
                {...layout}
                form={form}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space size="large">

                        <Button type="primary" htmlType="submit">
                            Dang nhap
                        </Button>

                        <Button type="danger" onClick={()=> onReset()}>
                            Clear
                        </Button>
                    </Space>
                </Form.Item>


            </Form>
        </div>
    );
}

export default Login;