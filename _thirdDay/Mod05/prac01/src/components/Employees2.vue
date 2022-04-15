<template>
    <div v-for="emp in employeeList" :key="emp.employeeId" >
      <h3> {{emp.employeeId}} </h3>
      {{ emp.employeeName }}
      {{ emp.age }}
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["employeeList"],
  setup() {
    onMounted(() => {
      console.log(" onMounted ");
    });
    onUnmounted(() => {
      console.log(" onUnmounted ");
    });
    onUpdated(() => {
      console.log(" onUpdated ");
    });
  },
};
</script>

<style>
</style>

