<template>
  {{ pp.aaa }}
  {{ pdsp }}
  <input type="text" v-model="pdsp" />
</template>

<script>
import { computed, reactive, ref } from "vue";
export default {
  setup() {
    let pp = reactive({ app: "123", aaa: "456dd" });

    let pdsp = computed(() => {
      return pp.aaa;
    });
    return {
      pp,
      pdsp,
    };
  },
};
</script>

<style scoped></style>
