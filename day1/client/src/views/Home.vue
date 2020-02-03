<template>
    <div class="home">
        <div
            v-for="(item, index) in list"
            :key="index"
            class="item"
            :style="{
                background: `url(${item.classImg})`,
                backgroundSize: '100% 100%',
                color: 'yellow',
            }"
            @click="
                {
                    $router.push({ name: 'list', params: { class: item.class } });
                }
            "
        >
            {{ item.class }}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(['list']),
    },
    methods: {
        ...mapActions(['getList']),
    },
    mounted() {
        this.getList({
            method: 'get',
            url: '/list',
            data: [],
        });
    },
};
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
.item {
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
}
</style>
