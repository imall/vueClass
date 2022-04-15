<template>
  <h1>Home</h1>

  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - {{ keyword }}</p>
  <hr />
  <p>Employee Name :</p>
  <div>
    <p v-for="employee in filterResult" :key="employee">{{ employee }}</p>
  </div>
</template>
<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "Home11",
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
    const filterResult = computed(() => {
      return employeeList.value.filter((name) =>
        name.startsWith(keyword.value)
      );
    });

    watch(keyword, () => {
      // console.log(` watch  `);
      console.log(` watch : ${keyword.value} `);
    });
    watchEffect(() => {
      // console.log( ` watchEffect ` );
      console.log(` watchEffect : ${keyword.value} `);
    });

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
