<template>
    <div>
        {{ list.con }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: this.$route.params,
        };
    },
};
</script>

<style></style>
