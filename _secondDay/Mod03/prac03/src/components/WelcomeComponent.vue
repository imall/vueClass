<template>
  <div>
     <label> {{labelText}} </label>
     <input type="text" v-model="inputText" />
     <button v-on:click="$emit('sayhello', inputText)">
         sayhello
     </button>
  </div>
</template>

<script>
export default {
  props: ['userName'],
  data: function() {
    return {
      labelText: ' Hello ',
      inputText: this.userName
    }
  }
}
</script>

<style scoped>
label {
  text-align: center;
  color: blue;
}
</style>
