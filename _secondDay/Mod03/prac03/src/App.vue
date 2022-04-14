<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <welcome-component
    :user-name="name"
    @sayhello="onsayhello"
  ></welcome-component>
  <div>{{ msg }}</div>
  <home />
   <Card> My Card Content 1 </Card>
  <Card>
    <h2>My Card Content 2</h2>
  </Card>

  <named-card>
    <template #header>
      <h3>Dear Cat</h3>
    </template>
    <template #default>
      <img src="./assets/cat_cage.png" />
    </template>
    <template #footer>
      <button>more ...</button>
    </template>
  </named-card>
  <button @click="showModal = true">Show Modal</button>
  <teleport to="#myroot">
    <Modal v-show="showModal" @close="showModal = false">
      <h1>Info :</h1>
      <p>This is the secret modal message!</p>
    </Modal>
  </teleport> 
</template>

<script>
import Welcome from "./components/WelcomeComponent.vue";
import Home from "./components/Home.vue";
import Card from "./components/Card.vue";
import NamedCard from "./components/NamedCard.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data: function () {
    return {
      name: "mary",
      msg: "",
      showModal: false,
    };
  },
  components: {
    Modal,
    "named-card": NamedCard,
    Card,
    Home,
    "welcome-component": Welcome,
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
