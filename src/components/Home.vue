<template>
    <h2>{{ title }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit sapiente nulla illo aperiam doloribus harum id neque repellat obcaecati nihil accusamus quos asperiores ipsum laborum reiciendis, animi soluta doloremque!</p>
    <!-- <router-link to="/users/3">show user</router-link> -->
    <router-link :to="{name: 'showUser' , params:{id: 3}}">show user</router-link>
    <button @click="goToShowUser">Show User</button>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
export default {
    beforeRouteEnter(to, from, next) {
        console.log('Before Route Enter');
        next();
    },
    setup() {
        const title = ref('Home Page');
        const router = useRouter();

        function goToShowUser() {
            // router.push({name: 'showUser' , params:{id: 3}});
            // router.push({name: 'showUser' , params:{id: 5}, query: {name:'hasan', lastname:'moosavi'}});
            router.push({name: 'showUser' , params:{id: 5}, query: {name:'hasan', lastname:'moosavi'}, hash: '#selin'});
        }

        return {
            title,
            goToShowUser
        };
    }
}
</script>

<style>

</style>