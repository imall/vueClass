<template>
  <div>
    <h3>Posts</h3>
    <ul class="list-group">
       <li class="list-group-item" v-for="p in getAllPosts" v-bind:key="p.id">
        <strong> User Id : </strong> {{ p.id }} <br />
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import vuex from "vuex";
// 或是這樣寫
// import {mapGetters,mapActions} from 'vuex';
export default {
  computed: { ...vuex.mapGetters(["getAllPosts"]) },
  methods: {
    ...vuex.mapActions(["getPostsAction","removePostAction"])
  },
  created() {
    this.getPostsAction();
  },
};
</script>

<style scoped>
.list-group-item {
  color: brown;
}
</style>
