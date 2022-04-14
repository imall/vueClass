<template>
  <div>
    <h1 class="display-3"> Edit Post </h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="eid" class="form-label"> Id </label>
        <input
          type="text"
          class="form-control"
          id="eid"
          v-model="form.id"
          disabled
        />
      </div>
      <div class="mb-3">
        <label for="uid" class="form-label"> User Id </label>
        <input
          type="text"
          class="form-control"
          id="uid"
          v-model="form.userId"
          required
          placeholder="Enter user id"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label"> Title </label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="form.title"
          required
          placeholder="Enter title"
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label"> Body </label>
        <input
          type="text"
          class="form-control"
          id="body"
          v-model="form.body"
          required
          placeholder="Enter body"
        />
      </div>

      <button type="submit" class="btn btn-primary"> Submit </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "EditPost",
  methods: {
    ...mapActions(["editPostAction"]),
    onSubmit() {
      this.editPostAction(this.form)
      this.$router.push("/")
    }
  },
  data() {
    return {
      form: { }
    };
  },
  computed: {
    ...mapState(["posts"])
  },
  mounted() {
    const rid = Number.parseInt(this.$route.params.id),
      ar = this.posts,
      p = ar.find(o => o.id == rid)
    this.form = p
  }
}
</script>
<style scoped>
</style>
