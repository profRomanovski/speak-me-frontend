<template>
  <div class="home-container">

  </div>
</template>

<script>

export default {
  name: "Home.vue",
}
</script>

<style scoped>
.chat-container{
  display: grid;
  grid-template-areas: "message-list"
                       "input-field";
  grid-template-columns: 1fr;
  grid-template-rows:  1fr 15%;
  overflow: hidden;
  background-color: #DCDCDC;
}
</style>