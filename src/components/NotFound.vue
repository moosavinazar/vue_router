<template>
    <h2>{{ title }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const title = ref('Not Found Page');
        
        return {
            title
        }
    }
}
</script>

<style>

</style>