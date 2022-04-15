
<template>
    <h1 class="display-3">Posts App</h1>
    <h1 class="h6">Seeing all posts.</h1>
    <hr />
    <add-post />
    <hr />
    <PostsComponent />
</template>

<script>
import PostsComponent from "./PostsComponent.vue";
import AddPost from "./AddPost.vue";
export default {

  components: {
    PostsComponent,
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
