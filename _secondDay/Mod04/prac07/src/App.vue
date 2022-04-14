<template>
  <div class="container">
    <div id="nav">
      <router-link to="/"> Home </router-link> |
      <router-link to="/about"> About </router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
 
};
</script>

<style>
#app {
  color: #2c3e50;
  background-color: rgb(252, 233, 198);
  padding: 50px;
}
body {
  background-color: rgb(252, 233, 198) !important;
}
</style>
