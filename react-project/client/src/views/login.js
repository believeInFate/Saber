import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
class login extends Component {
    handleSubmit = e => {
        let _this = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.$request('post', '/login', values).then(res => {
                    if (res.data.code === 0) {
                        localStorage.setItem('token', res.data.data.token);
                        localStorage.setItem('username', res.data.data.user);
                        _this.props.history.push('/home');
                    } else {
                        alert(res.data.msg);
                    }
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div style={{ textAlign: 'center' }}>
                    <h3>
                        登录<small>login</small>
                    </h3>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('user', {
                            rules: [{ required: true, message: '请输入你的用户名!' }],
                        })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('pwd', {
                            rules: [{ required: true, message: '请输入你的密码!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" />}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(login);
