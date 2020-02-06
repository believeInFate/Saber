import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import userlist from './home/userlist';
import useradd from './home/useradd';
import rolelist from './home/rolelist';
import roleadd from './home/roleadd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class home extends Component {
    state = {
        menu: [
            {
                belong: '用户管理',
                icon: 'user',
                sub: [
                    {
                        key: 1,
                        name: '用户列表',
                        to: '/home/userlist',
                    },
                    {
                        key: 2,
                        name: '添加用户',
                        to: '/home/useradd',
                    },
                ],
            },
            {
                belong: '角色管理',
                icon: 'team',
                sub: [
                    {
                        key: 3,
                        name: '角色管理',
                        to: '/home/rolelist',
                    },
                    {
                        key: 4,
                        name: '添加角色',
                        to: '/home/roleadd',
                    },
                ],
            },
        ],
    };
    render() {
        const { menu } = this.state;
        const _this = this;
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div
                            className="logo"
                            style={{
                                height: '59px',
                                color: 'white',
                                textAlign: 'center',
                                lineHeight: '59px',
                            }}
                        >
                            工作台
                        </div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['0']}
                        >
                            {menu.map((item, key) => {
                                return (
                                    <SubMenu key={key} title={<span>{item.belong}</span>}>
                                        {item.sub.map(jtem => (
                                            <Menu.Item
                                                key={jtem.key}
                                                onClick={() => {
                                                    _this.props.history.push(jtem.to);
                                                }}
                                            >
                                                {jtem.name}
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                );
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            欢迎
                            <span style={{ marginLeft: '15px' }}>
                                {localStorage.getItem('username')}
                            </span>
                            <span
                                style={{ marginLeft: '15px' }}
                                onClick={() => {
                                    localStorage.clear();
                                    _this.props.history.push('/login');
                                }}
                            >
                                注销
                            </span>
                            <Button
                                type="danger"
                                style={{ position: 'absolute', top: '15px', right: '10px' }}
                                onClick={() => {
                                    _this.props.history.push('/home/useradd');
                                }}
                            >
                                增加用户
                            </Button>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route path="/home/userlist" component={userlist} />
                                <Route path="/home/useradd" component={useradd} />
                                <Route path="/home/rolelist" component={rolelist} />
                                <Route path="/home/roleadd" component={roleadd} />
                                <Redirect from="/home" to="/home/userlist" exact />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default home;
