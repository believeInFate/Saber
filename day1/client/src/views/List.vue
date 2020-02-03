<template>
    <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div v-for="item in list.filter(item => item.title.indexOf(value) !== -1)" :key="item.id">
            <p @click="$router.push({ name: 'detail', params: item })">{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            item: this.$route.params.class,
            value: '',
        };
    },
    methods: {
        ...mapActions(['getList']),
    },
    computed: {
        ...mapState(['list']),
    },
    mounted() {
        if (this.$route.params.class !== undefined) {
            sessionStorage.setItem('key', this.$route.params.class);
        }
        this.getList({
            method: 'post',
            url: '/branch',
            data: { key: sessionStorage.getItem('key') },
        });
    },
};
</script>

<style></style>
