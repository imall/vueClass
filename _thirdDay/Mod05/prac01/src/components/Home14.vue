<template>
  <h1>Home</h1>
  <button @click="show = !show">Show/Hide Employees</button>
  <employees2 v-if="show" :employee-list="employeeList" />
</template>
<script>
import { ref } from "vue";
import Employees2 from "./Employees2.vue";
export default {
  name: "Home14",
  components: { Employees2 },
  setup() {
    const employeeList = ref([
      { employeeId: 1, employeeName: "mary", age: 50 },
      { employeeId: 2, employeeName: "candy", age: 60 },
      { employeeId: 3, employeeName: "lulu", age: 40 },
    ]);
    const show = ref(true);
    return {
      employeeList,
      show,
    };
  },
};
</script>

<style>
</style>


