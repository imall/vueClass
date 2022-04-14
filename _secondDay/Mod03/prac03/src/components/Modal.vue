<template>
  <div class="backstyle" @click="$emit('close')">
    <div class="modal">
      <slot></slot>
      <div class="actions">
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ["close"],
};
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backstyle {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color :blue;
    border: none;
    padding: 0;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }

</style>
