<template>
  <h1> Home </h1>
  <employees :employee-list="employeeList" />
</template>
<script>
import { ref } from "vue";
import Employees from "./Employees.vue";
export default {
  name: "Home13",
  components: { Employees },
  setup() {
    const  employeeList= ref( [
      { employeeId : 1, employeeName : "mary", age : 50 },
      { employeeId : 2, employeeName : "candy", age : 60 },
      { employeeId : 3, employeeName : "lulu", age : 40 },
    ] );
    return {
      employeeList,
    };
  },
};
</script>

<style>
</style>
