<template>
  <div>
    <router-link class="mr-2" to="/">Home</router-link>
    <router-link active-class="aaa" exact-active-class="bbb" class="mr-2" to="/users">User</router-link>
    <router-link to="/posts">Post</router-link>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    return {};
  }
}
</script>

<style>
.mr-2 {
  margin-right: 1rem;
}

.router-link-active {
  color: red;
}

.router-link-exact-active{
  color: green;
}
</style>
