<template>
  <h1>Home</h1>
  
  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - {{ keyword }}</p>
  <hr/>
  <p>Employee Name :</p>
  <div>
    <p v-for="employee in filterResult" :key="employee">{{ employee }}</p>
  </div>
</template>
<script>
import { ref,computed } from "vue";
export default {
  name: "Home10",
  setup() {
    const keyword = ref("");
    const employeeList = ref([
      "mary",
      "candy",
      "lulu",
      "cindy",
      "joy",
      "christine",
    ]);
      const filterResult = computed( () => {
      return employeeList.value.filter( (name) => name.startsWith( keyword.value ) );
    } );
    return {
      employeeList,
      keyword,
      filterResult,
    };
  },
};
</script>

<style>
</style>
