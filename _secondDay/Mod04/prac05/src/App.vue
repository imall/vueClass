<template>
  <div class="container">
    <h1 class="display-3">Posts App</h1>
    <h1 class="h6">Seeing all posts.</h1>
    <hr />
    <add-post />
    <hr />
    <Posts />
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import AddPost from "./components/AddPost.vue";
export default {
  name: "App",
  components: {
    Posts,
    AddPost,
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
