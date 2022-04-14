<template>
  <div>
    <p> Company Name : {{ companyName }} </p>
  </div>
</template>

<script>
export default {
  inject: [ "companyName" ],
  mounted() {
    console.log( this.companyName );
  },
};
</script>

<style>
</style>
