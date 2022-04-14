<template>
  <div>
    <h3>Posts</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="p in getAllPosts" v-bind:key="p.id">
        <strong> User Id : </strong> {{ p.userId }} <br />
        <strong> Title : </strong> {{ p.title }} <br />
        <strong> Body : </strong> {{ p.body }} <br />
        <div class="mt-3"></div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            @click="removePostAction(p.id)"
            type="button"
            class="btn btn-danger"
          >
            Delete
          </button>
          <router-link class="btn btn-success" :to="`/edit/${p.id}`">
            Edit
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",
  computed: {
    ...mapGetters(["getAllPosts"]),
  },
  methods: {
    ...mapActions(["getPostsAction", "removePostAction"]),
  },
  created() {
    if (this.getAllPosts.length <= 0) {
      this.getPostsAction();
    }
  },
};
</script>

<style scoped>
.list-group-item {
  color: brown;
}
</style>
