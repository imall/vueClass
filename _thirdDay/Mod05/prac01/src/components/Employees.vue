<template>
    <div v-for="emp in employeeList" :key="emp.employeeId" >
      <h3> {{emp.employeeId}} </h3>
      {{ emp.employeeName }}
      {{ emp.age }}
    </div>
    <p>
      Total Count : {{Count}}
    </p>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["employeeList"],
  setup(props){
    const Count = computed( () => {
      return `${props.employeeList.length}`;
    } );
    return { Count };

  }
};
</script>

<style>
</style>
