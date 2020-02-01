<template>
    <div class="home">
        <div v-for="(item, index) in list" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['list']),
    },
    methods: {
        ...mapActions(['getList']),
    },
    mounted() {
        this.getList();
    },
};
</script>
