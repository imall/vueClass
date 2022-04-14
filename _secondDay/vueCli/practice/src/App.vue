<template>
  <div class="container">
    <h1 class="display-3">Posts App</h1>
    <h1 class="h6">Seeing all posts.</h1>
    <PostsComponent></PostsComponent>
    
  </div>
</template>

<script>
import PostsComponent from "./components/PostsComponent.vue";

export default {
  components: {
    PostsComponent,
  },

};
</script>

<style>
#app {
  color: #2c3e50;
  background-color: rgb(252, 233, 198);
  padding: 50px;
}
body {
  background-color: rgb(252, 233, 198) !important;
}
</style>
