<template>
  <h1>Home</h1>
  <p>Employee Name : {{ employeeName }}</p>
  <p>Age : {{ age }}</p>
  <p>Is Married : {{ isMarried }}</p>
  <button @click="buttonClick">Click</button>
</template>

<script>
export default {
  name: "Home3",
  setup() {
    let employeeName = "mary";
    let age = 50;
    let isMarried = true;
    const buttonClick = () => {
      console.log(employeeName);
      console.log(age);
      console.log(isMarried);
    };
    return {
      employeeName: employeeName,
      age: age,
      isMarried: isMarried,
      buttonClick,
    };
  },
};
</script>

<style>
</style>

