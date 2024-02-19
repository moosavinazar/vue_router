<template>
    <h2>{{ title }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit sapiente nulla illo aperiam doloribus harum id neque repellat obcaecati nihil accusamus quos asperiores ipsum laborum reiciendis, animi soluta doloremque!</p>
    
    <router-view></router-view>
    
    <button @click="goToHome">Home</button>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
export default {
    setup() {
        const title = ref('User Page');

        const router = useRouter();
        const route = useRoute();

        function goToHome() {
            router.push('/');
        }

        return {
            title,
            goToHome,
            route
        }
    }
}
</script>

<style>

</style>