<template>
  <h1>Home</h1>
  keyword : <input type="text" v-model="keyword" />
  <p>filter Keyword - {{ keyword }}</p>
  <hr />
  <p>Employee Name :</p>
  <div>
    <p v-for="employee in filterResult" :key="employee">{{ employee }}</p>
  </div>
  <p>
    <button @click="buttonClick">Disable All Watch</button>
  </p>
</template>
<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "Home12",
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

    const disableWatch = watch(keyword, () => {
      // console.log(` watch  `);
      console.log(` watch : ${keyword.value} `);
    });
    const disableWatchEffect = watchEffect(() => {
      // console.log( ` watchEffect ` );
      console.log(` watchEffect : ${keyword.value} `);
    });

    const buttonClick = () => {
      // 名稱可以隨便取
      disableWatch();
      disableWatchEffect();
    };

    return {
      employeeList,
      keyword,
      filterResult,
      buttonClick,
    };
  },
};
</script>

<style>
</style>
