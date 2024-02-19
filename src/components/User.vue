<template>
    <h2>{{ title }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit sapiente nulla illo aperiam doloribus harum id neque repellat obcaecati nihil accusamus quos asperiores ipsum laborum reiciendis, animi soluta doloremque!</p>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const title = ref('User Page');

        return {
            title
        }
    }
}
</script>

<style>

</style>