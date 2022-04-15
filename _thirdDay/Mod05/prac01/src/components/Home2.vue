<template>
  <h1> Home </h1>
  <p>
    Employee Name  : {{ employeeName}}
  </p>
  <p>
     Age  : {{ age}}
  </p>
  <p>
    Is Married  : {{ isMarried }}
  </p>

</template>

<script>
export default {
   name: "Home2",
   setup() {
    let employeeName = 'mary';
    let age = 50;
    let isMarried = true;
    return {
      employeeName : employeeName ,
      age : age ,
      isMarried : isMarried
    }
  }
};
</script>

<style>
</style>

