<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'NamedCard',
}
</script>

<style scoped>
.card {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  padding: 20px;
  margin-bottom: 20px;
  width: 300px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(58, 10, 233, 0.5);
}
</style>
