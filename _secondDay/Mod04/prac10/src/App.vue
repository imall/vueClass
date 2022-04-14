<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/"> Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about"> About </router-link>
      </li>
    </ul>
   
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
.nav-item {
     width:50%;
     text-align: center
   }

</style>
