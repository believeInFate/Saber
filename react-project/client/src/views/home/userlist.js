import React, { Component } from 'react';
import { Table, Tag, Divider, Modal } from 'antd';
const { confirm } = Modal;
class userlist extends Component {
    state = {
        visible: false,
        list: [],
        item: [],
        columns: [
            {
                title: '用户ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '用户账号',
                dataIndex: 'username',
                key: 'user',
            },
            {
                title: '用户角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, item) => (
                    <span>
                        <Tag
                            onClick={() => {
                                this.setState({ visible: true, item });
                            }}
                        >
                            查看
                        </Tag>
                        <Divider type="vertical" />
                        <Tag
                            onClick={() => {
                                this.delFun(item.id);
                            }}
                        >
                            删除
                        </Tag>
                        <Divider type="vertical" />
                        <Tag
                            onClick={() => {
                                this.props.history.push({ pathname: '/home/useradd', item });
                            }}
                        >
                            编辑
                        </Tag>
                    </span>
                ),
            },
        ],
    };
    render() {
        const { columns, list, item } = this.state;
        return (
            <div>
                <Table columns={columns} dataSource={list} rowKey={row => row.id} />
                <Modal
                    visible={this.state.visible}
                    onOk={() => {
                        this.setState({ visible: false });
                    }}
                    onCancel={() => {
                        this.setState({ visible: false });
                    }}
                    footer={null}
                >
                    <h3>用户详情</h3>
                    <p>用户账号: {item.username}</p>
                    <p>用户权限: {item.role}</p>
                </Modal>
            </div>
        );
    }
    componentDidMount() {
        let { $request } = this;
        $request('get', '/userlist').then(res => {
            this.setState({
                list: res.data.data,
            });
        });
    }
    delFun(id) {
        let { $request } = this;
        confirm({
            title: '你确定要删除吗?',
            onOk() {
                $request('post', '/delete', { id }).then(res => {
                    if (res.data.code === 0) {
                        alert(res.data.msg);
                        window.location.reload();
                    }
                });
            },
            onCancel() {},
        });
    }
}

export default userlist;
