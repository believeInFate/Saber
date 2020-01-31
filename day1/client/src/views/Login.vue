<template>
    <div class="login">
        <van-field v-model="user" placeholder="请输入用户名" />
        <van-field v-model="pwd" type="password" placeholder="请输入密码" />
        <van-button type="info" v-show="!click" @click="loginIn('/login')">登录</van-button>
        <p v-show="!click" @click="click = !click">没有账号？去注册</p>
        <van-button type="primary" v-show="click" @click="loginIn('/registry')">注册</van-button>
        <p v-show="click" @click="click = !click">已有账号？去登陆</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: '',
            pwd: '',
            click: false,
        };
    },
    methods: {
        async loginIn(url) {
            const { pwd, user, $request, $router } = this;
            if (user === '') return alert('大兄弟 看看账号');
            if (pwd === '') return alert('大兄弟 看看密码');
            const sendObj = { user, pwd };
            let res = await $request('post', url, sendObj);
            alert(res.data.message);
            if (res.data.code === 0) {
                localStorage.setItem('token', res.data.token);
                $router.push('/home');
            }
            if (res.data.code === 2) {
                this.click = !this.click;
            }
        },
    },
};
</script>

<style></style>
