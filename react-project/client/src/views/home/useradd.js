import React, { Component } from 'react';
import { Input, Button, Select } from 'antd';
const { Option } = Select;
class useradd extends Component {
    isType = () => {
        let stateObj = {
            roleList: [],
            id: null,
            user: '',
            pwd: '',
            url: '/useradd',
            role: 'student',
        };
        let typeObj = this.props.location.item;
        if (typeObj) {
            stateObj.id = typeObj.id;
            stateObj.username = typeObj.username;
            stateObj.password = typeObj.password;
            stateObj.role = typeObj.role;
            stateObj.url = '/useredit';
        }
        return stateObj;
    };
    state = this.isType();
    render() {
        let { roleList, id, username, password, role } = this.state;
        return (
            <div>
                <div>
                    <h3>{id === null ? '添加用户' : '编辑用户'}</h3>
                </div>
                <div>ID: {id === null ? '暂无ID' : id}</div>
                <div>
                    账户：
                    <Input
                        style={{ width: '200px' }}
                        defaultValue={username}
                        ref="username"
                        type="text"
                    />
                </div>
                <div>
                    密码：
                    <Input
                        style={{ width: '200px' }}
                        defaultValue={password}
                        ref="password"
                        type="text"
                    />
                </div>
                <div>
                    角色：
                    <Select
                        defaultValue={role}
                        style={{ width: '120px' }}
                        onChange={value => this.setState({ role: value })}
                    >
                        {roleList.map((item, index) => {
                            return (
                                <Option value={item.role} key={index}>
                                    {item.role}
                                </Option>
                            );
                        })}
                    </Select>
                </div>
                <Button
                    type="danger"
                    onClick={() => {
                        this.sureData();
                    }}
                >
                    提交
                </Button>
            </div>
        );
    }
    componentDidMount() {
        const { $request } = this;
        $request('get', '/roleList').then(res => {
            this.setState({
                roleList: res.data.data,
            });
        });
    }
    sureData() {
        let Data = {
            id: this.state.id,
            username: this.refs.username.input.value,
            password: this.refs.password.input.value,
            role: this.state.role,
        };

        let { $request } = this;
        let { url } = this.state;
        $request('post', url, Data).then(res => {
            if (res.data.code === 0) {
                alert(res.data.msg);
            } else {
                alert(res.data.msg);
            }
        });
    }
}

export default useradd;
