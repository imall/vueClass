<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <welcome-component
    :user-name="name"
    @sayhello="onsayhello"
  ></welcome-component>

  <div>{{ msg }}</div>
</template>

<script>
import WelcomeComponent from "./components/WelcomeComponent.vue";


export default {
  name: "App",
  data() {
    return {
      name: "mary",
      msg: "",
    };
  },
  components: {
    WelcomeComponent,
  },
  methods: {
    onsayhello: function (txt) {
      this.msg = txt;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
