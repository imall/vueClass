<template>
  <div>
    <label> {{ labelText }} </label>
    <input type="text" v-model="inputText"  @keyup.enter="sayHello()" />
    <button v-on:click="sayHello()">sayhello</button>
  </div>
</template>

<script>
export default {
  props: ["userName"],
  data: function () {
    return {
      labelText: " Hello ",
      inputText: this.userName,
    };
  },
  methods:{
    sayHello(){
      this.$emit('sayhello', this.inputText)
    }
  }
};
</script>

<style scoped>
label {
  text-align: center;
  color: blue;
}
</style>
