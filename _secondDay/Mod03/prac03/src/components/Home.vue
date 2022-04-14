<template>
  <h1> Home </h1>
  <employees />
</template>
<script>
import Employees from "./Employees.vue";
export default {
  name: "Home",
  components: { Employees },
  provide: {
    companyName: "UTest",
  },
};
</script>

<style>
</style>
