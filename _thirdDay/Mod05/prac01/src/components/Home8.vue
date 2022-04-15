<template>
  <h1>Home</h1>
  <div ref="div">
    <p>Employee Name : {{ employee.employeeName }}</p>
    <p>Age : {{ employee.age }}</p>
    <p>Is Married : {{ employee.isMarried }}</p>
  </div>
  <button @click="buttonClick">Click</button>
  <hr />
  <div>
    Employee Name : <input type="text" v-model="employee.employeeName" />
    <br />
    age : <input type="number" v-model="employee.age" /><br />
    isMarried : <input type="checkbox" v-model="employee.isMarried" /><br />
  </div>
  <hr />
  <div>Employee Info : {{ employeeInfo }} </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "Home8",
  setup() {
    const employee = reactive({
      employeeName: "mary",
      age: 50,
      isMarried: true,
    });

    const employeeInfo = computed(() => {
      return ` ${employee.employeeName} - ${employee.age} - ${employee.isMarried}`;
    });

    const div = ref(null);
    const buttonClick = () => {
      employee.employeeName = "candy";
      employee.age = 60;
      employee.isMarried = false;
      console.log(employee.employeeName);
      console.log(employee.age);
      console.log(employee.isMarried);
      div.value.style.backgroundColor = "yellow";
    };

    return {
      employee,
      buttonClick,
      div,
      employeeInfo,
    };
  },
};
</script>

<style>
</style>

