<template>
  <h1> Home </h1>
  <p> Employee Name : </p>
  <div>
      <p v-for = "employee in employeeList" :key = "employee"> {{ employee }} </p>
  </div>
</template>
<script>
import { ref,computed } from "vue";
export default {
  name: "Home9",
  setup() {
    const employeeList = ref([
      "mary",
      "candy",
      "lulu",
      "cindy",
      "joy",
      "christine",
    ]);
    return {
      employeeList,
    };
  },
};
</script>

<style>
</style>
