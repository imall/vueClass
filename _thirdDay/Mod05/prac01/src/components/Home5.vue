<template>
  <h1>Home</h1>
  <div ref="div">
    <p>Employee Name : {{ employeeName }}</p>
    <p>Age : {{ age }}</p>
    <p>Is Married : {{ isMarried }}</p>
  </div>
  <button @click="buttonClick">Click</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home5",
  setup() {
    const employeeName = ref("mary");
    const age = ref(50);
    const isMarried = ref(true);

    const div = ref(null);

    const buttonClick = () => {
      employeeName.value = "candy";
      age.value = 60;
      isMarried.value = false;
      console.log(employeeName.value);
      console.log(age.value);
      console.log(isMarried.value);
      div.value.style.backgroundColor = "yellow";
    };

    return {
      employeeName: employeeName,
      age: age,
      isMarried: isMarried,
      buttonClick,
      div,
    };
  },
};
</script>

<style>
</style>

