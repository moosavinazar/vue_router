<template>
    <h2>{{ title }}</h2>
    <!-- <h2>{{ route.params.id }} , {{ route.params.name }}</h2> -->
    <h2>{{ route.params.id }}</h2>
    <h2>{{ route.query.name }}</h2>
    <h2>{{ route.query.lastname }}</h2>
    <h2>{{ route.hash }}</h2>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
export default {
    setup() {
        const title = ref('Show User Page');

        const route = useRoute();

        return {
            title,
            route
        }
    }
}
</script>

<style>

</style>