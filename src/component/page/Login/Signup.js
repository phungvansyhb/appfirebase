import React from 'react';
import {Button, Form, Input, Space, Typography} from 'antd';
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

function SignUp(props) {

    const onFinish = values => {
        console.log('Success:', values);
        firebase.auth().createUserWithEmailAndPassword(values.Email, values.password).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
        });

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
                            Dang Ky
                        </Button>

                        <Button type="danger">
                            Clear
                        </Button>
                    </Space>
                </Form.Item>


            </Form>
        </div>
    );
}

export default SignUp;